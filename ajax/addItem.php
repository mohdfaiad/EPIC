<?php
  require "../db.php";

  session_start();

  $pcode = $_GET['pcode'];

  if (!$db->has("property", ["pcode" => $pcode])) { //check if item exists
    $properties = $_SESSION['properties'];
  } else {
    $property = $db->get("property", "*", ["pcode" => $pcode]);

    $properties = array();
    if (!isset($_SESSION['properties'])) { //if theres no session
      $properties = array();

      array_push($properties, array(
        "property" => $property,
        "qty" => 1
      ));

    } else if (count($_SESSION['properties']) <= 0) { //if session is empty
      $properties = array();

      array_push($properties, array(
        "property" => $property,
        "qty" => 1
      ));
    } else { //if theres something in session
      $properties = $_SESSION['properties'];

      $hasItem = false;
      for ($i = 0; $i < count($properties); $i ++) {
        if ($properties[$i]["property"]["pcode"] == $property['pcode']) {
          $hasItem = true;
          break;
        }
      }

      if (!$hasItem) { //check if the array already has the item
        array_push($properties, array(
          "property" => $property,
          "qty" => 1
        ));
      }
    }
  }

  $_SESSION['properties'] = $properties; //save the new property list
  include "showItem.php";
?>
