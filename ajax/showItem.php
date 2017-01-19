<?php
  $properties = $_SESSION['properties'];

  //make the table
  for ($i = 0; $i < count($properties); $i ++) {
    echo "<tr>";
    echo "<td>" . $properties[$i]['property']['pcode'] . "</td>";
    echo "<td><a href='javascript: removeItem(\"" . $properties[$i]['property']['pcode'] . "\")'>Remove</a></td>";
    echo "</tr>";
  }
?>
