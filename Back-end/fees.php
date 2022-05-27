<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');

include("db_info.php");

$data = json_decode(file_get_contents("php://input"), true);

$trainerID = $data['trainerID'];
$date = $data['date'];
$customer = $data['customer'];
$type = $data['type'];
$amount = $data['amount'];

$query = $mysqli->prepare("INSERT INTO fees (trainerID, customer, date, sessionType, amount) VALUES (?, ?, ?, ?, ?)");
$query->bind_param("issss", $trainerID, $customer, $date, $type, $amount);
$query->execute();

$response = [];
$response["Status:"] = "Congrats!";

echo json_encode($response);

?>