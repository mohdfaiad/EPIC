<?php
  session_start();
  require "../db.php";

  $rec = $_SESSION['properties'];

  $header = "pcode\t";
  $data = "";

  foreach($rec as $row) {
    $line = '';

    foreach($row as $value) {
      if((!isset($value)) || ($value == "")) {
        $value = "\t";
      } else {
        $value = str_replace( '"' , '""' , $value);
        $value = '"' . $value . '"' . "\t";
      }

      $line .= $value;
    }

    $data .= trim( $line ) . "\n";
  }

  $data = str_replace("\r" , "" , $data);

  if ($data == "") {
    $data = "\n No Record Found!\n";
  }

  header("Content-type: application/xls");
  header("Content-Disposition: attachment; filename=per_item_report.xls");
  header("Pragma: no-cache");
  header("Expires: 0");
  print "$header\n$data";
?>
