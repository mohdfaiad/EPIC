<?php
	require  'medoo.php';

 	$db = new medoo([
  	// required
  	'database_type' => 'mysql',
  	'database_name' => 'epic',
  	'server' => 'localhost',
  	'username' => 'root',
  	'password' => '',
  	'charset' => 'utf8',

    'option' => [
		    PDO::ATTR_ERRMODE,
		    PDO::ERRMODE_EXCEPTION
	  ]
  ]);
?>
