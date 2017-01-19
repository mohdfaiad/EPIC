$(document).ready(function() {
  prowareTable();

  $('body').delegate('.prowareView','click',function()
  {
      var viewP = $(this).attr("idPv");
      var viewC = $(this).attr("conditionPv");
      var viewL = $(this).attr("locationPv");
      $.ajax
      ({
              url : 'accountabilitiesTable.php',
              async : false,
              type : 'POST',
              data :
              {
                  showInformation : 1,
                  prowareID : viewP,
                  condition_id: viewC,
                  location_id: viewL
              },
              success : function(prowareInformation)
              {
                  $("#propertyInformations").html(prowareInformation);
              }
      });
  });
});

function updateLocation(propertyId, conditionId, oldLocationId) {
	var newLocationId = $("#location" + propertyId + oldLocationId + conditionId).val();

	$.post("build/ajax/updateLocation.php", {id: propertyId, new_location_id: newLocationId, condition_id : conditionId, old_location_id : oldLocationId}, function(data) {
		var result = parseInt(data);

		if (result == 1)
    {
      $.Notify({
      	caption: 'Update Success',
          content: 'Location successfully Updated' ,
          icon: "<span class='mif-pencil icon'></span>",
          type: "success"
      });
		}
    else if(result == 2)
    {
      prowareTable();
    }
    else
    {
			console.log(data);
      $.Notify({
        caption: 'Update Failed',
        content: 'Location Update failed' ,
        icon: "<span class='mif-pencil icon'></span>",
        type: "alert"
        });
		}
	});
}
function updateCondition(propertyId, locationId, oldConditionId) {
	var newConditionId = $("#condition" + propertyId + locationId + oldConditionId).val();

	$.post("build/ajax/updateCondition.php", {id: propertyId, new_condition_id: newConditionId, location_id : locationId, old_condition_id : oldConditionId}, function(data) {
		var result = parseInt(data);

		if (result == 1)
    {
      $.Notify({
      	caption: 'Update Success',
          content: 'Condition successfully Updated' ,
          icon: "<span class='mif-pencil icon'></span>",
          type: "success"
      });
		}
    else if(result == 2)
    {
      prowareTable();
    }
    else
    {
			console.log(data);
      $.Notify({
        caption: 'Update Failed',
        content: 'Condition Update failed' ,
        icon: "<span class='mif-pencil icon'></span>",
        type: "alert"
        });
		}
	});
}

function prowareTable()
{
    $.ajax
    ({
      url : 'accountabilitiesTable.php',
      async : false,
      type : 'POST',
      data :
      {
          showTable : 1
      },
      success : function(proware)
      {
          $("#tableProware").html(proware);
      }
    });
}

function pushMessage(t)
{
  var mes = 'Info|Implement independently';
  $.Notify({
      caption: mes.split("|")[0],
      content: mes.split("|")[1],
      type: t
  });
}
