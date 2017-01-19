<?php
  require "../db.php";

  session_start();

  $pcode = $_GET['pcode'];

  $properties = $_SESSION['properties'];

  for ($i = 0; $i < count($properties); $i ++) {
    if ($properties[$i]["property"]["pcode"] == $pcode) {
      array_splice($properties, $i, 1); //remove array
      break;
    }
  }

  $_SESSION['properties'] = $properties;
  include "showItem.php";
?>
