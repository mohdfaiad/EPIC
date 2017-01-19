<?php
  session_start();
  require "db.php";

  //upload the physical count CSV report
  if (isset($_POST['upload_property_list_btn'])) {
    if (is_uploaded_file($_FILES['property_list_csv']['tmp_name'])) {
      $db->delete("property", []);

      //get the csv file
      $file = $_FILES['property_list_csv']['tmp_name'];
      $handle = fopen($file,"r");

      //loop through the csv file and insert into database
  		while ($data = fgetcsv($handle,1000,",","'")) {
  			if ($data[0]) {
  				$db->insert("property", [
  					"pcode" =>  trim($data[0]),
            "description" =>  trim($data[1]),
            "sno" => trim($data[2]),
            "brand" =>  trim($data[3]),
            "model" =>  trim($data[4]),
            "uom" =>  trim($data[5]),
            "cost" =>  trim($data[6]),
            "date_acquired" =>  trim($data[7]),
            "or_number" =>  trim($data[8])
  				]);
  			}
  		}
    }
  }
?>
<html lang='en' onkeydown='setBarcodeFocus()'>
  <head>
    <title>EPIC</title>
    <script src="js/jquery-3.1.1.min.js"></script>
    <link href="css/metro-icons.css" rel="stylesheet">
    <link href="css/metro-responsive.css" rel="stylesheet">
    <script src="js/metro.js"></script>

    <link rel="stylesheet" type="text/css" href="css/jquery.datatables.min.css"/>
		<script type="text/javascript" src="DataTables/datatables.min.js"></script>
    <link href="css/metro.css" rel="stylesheet">
  </head>
  <body style='padding: 10'>
    <div>
      <div class="input-control text">
        <input type='text' id='pcode_input' onkeyup='scanItem()' placeholder='input Property Code'>
      </div>

      <button class='button' id='add_btn' onclick="manualAddItem()">Add Property</button>

      <br />

      <form action='index.php' method='POST' enctype='multipart/form-data'>

        <div class="input-control file" data-role="input">
            <input name='property_list_csv' placeholder='Upload Property List' type="file" required>
            <button class="button"><span class="mif-folder"></span></button>
        </div>

        <button name='upload_property_list_btn' class='button'>Upload CSV</button>
      </form>

      <br />

      <label class="switch">
        <input onclick='barcodeMode()' id='mode_input' type="checkbox" checked>
        <span class="check"></span>
        <span class="caption">&nbsp;Barcode Mode</span>
      </label>

      <br />
    </div>
    <br />
    <div>
      <table class='table hovered'>
        <thead>
          <th>Property Code</th>
          <th>Action</th>
        </thead>
        <tbody id='property_tbody'>
          <?php
            if (isset($_SESSION['properties'])) {
              include "ajax/showItem.php";
            }
          ?>
        </tbody>
    </div>
  </body>
</html>

<script>
  var scanning = false;
  var isBarcode = $("#mode_input").is(":checked");
  var propertyTable;
  $("#add_btn").hide();
  initTable();

  function initTable() {
    propertyTable = $("table").dataTable({
      "bDestroy": true,
      dom: 'Bfrtip',
      buttons: [
          'csv'
      ]
    });
  }

  function setBarcodeFocus() {
    if (isBarcode) {
      $("#pcode_input").focus();
    }
  }

  function barcodeMode() {
    isBarcode = $("#mode_input").is(":checked");

    if (isBarcode) {
      $("#add_btn").hide();
    } else {
      $("#add_btn").show();
    }
  }

  function scanItem(){
    if (!scanning && isBarcode) { //check if it is scanning to avoid multiple calls
      scanning = true;
      setTimeout(function() {
        var code_scan = $("#pcode_input").val(); //get the scanned item
        $("#pcode_input").val(""); //reset
        scanning = false; //ready to scan again

        addItem(code_scan);
      }, 500);
    }
  }

  function manualAddItem() {
    var code_scan = $("#pcode_input").val(); //get the scanned item
    $("#pcode_input").val(""); //reset
    addItem(code_scan);
  }

  function addItem(pcode) {
    $("#property_tbody").html("Refreshing...");
    $.get("ajax/addItem.php", {pcode: pcode}, function(data) {
      propertyTable.dataTable().fnDestroy();
      $("#property_tbody").html(data);
      initTable();
    });
  }

  function removeItem(pcode) {
    $("#property_tbody").html("Refreshing...");
    $.get("ajax/removeItem.php", {pcode: pcode}, function(data) {
      propertyTable.dataTable().fnDestroy();
      $("#property_tbody").html(data);
      initTable();
    });
  }

</script>
