<?php
$user = "root";
$pass = "";
$host = "localhost";
$db = "week7";
$conn = mysqli_connect($host, $user, $pass, $db);
mysqli_set_charset($conn, 'utf8');
if (!$conn) {
  echo 'Not connected';
  exit;
}
// echo 'We are connected to Backend';
// select all data from table
// $myQuery = "SELECT * FROM mainmodel";
// $result = mysqli_query($conn, $myQuery);
// $rows = array();
// while ($row = mysqli_fetch_assoc($result)) {
//   $rows[] = $row;
// };
//! above query updated
// TODO identifier for unique pieces ----------------------
//! http://localhost/authoring_w7/includes/connect.php?carModel=R58
if (isset($_GET["carModel"])) {
  $car = $_GET['carModel'];
  $myQuery = "SELECT * FROM mainmodel WHERE model = '$car'";
  $result = mysqli_query($conn, $myQuery);
  $rows = array();
  while ($row = mysqli_fetch_assoc($result)) {
    $rows[] = $row;
  }
}
// TODO identifier for unique pieces END -----------------------
echo json_encode($rows);
?>