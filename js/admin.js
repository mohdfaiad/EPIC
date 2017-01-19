showSelect();



function addProperty(){
  var pcode = $("#pcode").val();
  var sno = $("#sno").val();
  var propertyDescription = $("#propertyDescription").val();
  var qty = $("#qty").val();
  var brand = $("#brand").val();
  var model = $("#model").val();
  var cost = $("#cost").val();
  var uom = $("#uom").val();
  var orno = $("#orno").val();
  var locations = $("#locations").val();
  var conditions = $("#conditions").val();
  var minorCategory = $("#minorCategory").val();
  var accountCategory = $("#accountCategory").val();
  $.post("build/ajax/addProperty.php", {pcode:pcode, sno:sno, propertyDescription:propertyDescription, qty:qty, locations:locations, minorCategory:minorCategory, accountCategory:accountCategory, conditions:conditions, brand:brand, model:model, cost:cost, uom:uom, orno:orno} ,function(data)
  {
    var result = parseInt(data);

    if (result == 1) {
      $.Notify({
      	caption: 'Insert Success',
          content: 'Property Added' ,
          icon: "<span class='mif-floppy-disk icon'></span>",
          type: "success"

      });
      hideMetroDialog('#addProperty');
    } else if (result == -1) {
      $.Notify({
        caption: 'Insert Failed',
          content: 'Serial number already Exists' ,
          icon: "<span class='mif-floppy-disk icon'></span>",
          type: "alert"
      });
      //serial number already exists
    } else {
      console.log(data);
      $.Notify({
        caption: 'Insert Failed',
          content: 'Theres a problem with the server' ,
          icon: "<span class='mif-floppy-disk icon'></span>",
          type: "warning"
      });
      //problem with the server
    }
  });
}
function addNewUser(){
  var emp_id = $("#emp_id").val();
  var first_Name = $("#first_name").val();
  var middle_name = $("#middle_name").val();
  var last_name = $("#last_name").val();
  var department = $("#department").val();
  var password = $("#password").val();

    $.post("build/ajax/addNewUser.php",{emp_id:emp_id, first_Name:first_Name, middle_name:middle_name, last_name:last_name, department:department, password:password},function(data)
    {
      var res = parseInt(data);
      if(res == -1){
        $.Notify({
          caption: 'Insert Failed',
            content: 'Department already Exists' ,
            icon: "<span class='mif-floppy-disk icon'></span>",
            type: "warning"
        });
      }
      else if(res == 1){
        $.Notify({
          caption: 'Insert Success',
            content: 'Department Successfully Added' ,
            icon: "<span class='mif-floppy-disk icon'></span>",
            type: "success"
        });
        hideMetroDialog('#addNewUser');

      }
    });
}
function addNewLocation(){
    var newLoc = $("#newLoc").val();
    $.post("build/ajax/addNewLocation.php",{ newLoc : newLoc },function(data)
    {
      var res = parseInt(data);
      if(res == -1){
        $.Notify({
          caption: 'Insert Failed',
            content: 'Location already Exists' ,
            icon: "<span class='mif-floppy-disk icon'></span>",
            type: "warning"
        });
      }
      else if(res == 1){
        $.Notify({
          caption: 'Insert Success',
            content: 'Location Successfully Added' ,
            icon: "<span class='mif-floppy-disk icon'></span>",
            type: "success"
        });
        hideMetroDialog('#addNewLocation');

    } else {
      console.log(data);
    }
  });
}
function addNewMajor()
{
  var newMajor = $("#newMaj").val();
  var depYear = $("#depYear").val();
  $.post("build/ajax/addNewMajorCategory.php",{ newMajor : newMajor , depYear : depYear },function(data)
  {
      var res = parseInt(data);
      if(res == -1){
        $.Notify({
          caption: 'Insert Failed',
            content: 'Major Category already Exists' ,
            icon: "<span class='mif-floppy-disk icon'></span>",
            type: "warning"
        });
      }
      else if(res == 1){
        $.Notify({
          caption: 'Insert Success',
            content: 'Major Category Successfully Added' ,
            icon: "<span class='mif-floppy-disk icon'></span>",
            type: "success"
        });
        showSelect();
        hideMetroDialog('#addNewMajorCategory');

    } else {
      console.log(data);
    }
  });
}
function addNewMinor()
{
  var newMinor = $("#newMinor").val();
  var majorCat = $("#majorCat").val();
  $.post("build/ajax/addNewMinorCategory.php",{ newMinor : newMinor , majorCat : majorCat },function(data)
  {
      var res = parseInt(data);
      if(res == -1){
        $.Notify({
          caption: 'Insert Failed',
            content: 'Minor Category already Exists' ,
            icon: "<span class='mif-floppy-disk icon'></span>",
            type: "warning"
        });
      }
      else if(res == 1){
        $.Notify({
          caption: 'Insert Success',
            content: 'Minor Category Successfully Added' ,
            icon: "<span class='mif-floppy-disk icon'></span>",
            type: "success"
        });
        hideMetroDialog('#addNewMinorCategory');

    } else {
      console.log(data);
    }
  });
}
function showSelect()
{
  $.post("build/ajax/showSelectMinor.php",function(data)
  {
    $("#showSelectMinor").html(data);
  });

}
