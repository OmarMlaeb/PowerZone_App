<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');

include("db_info.php");

$id = $_GET["trainerID"];

$query = $mysqli->prepare("SELECT * FROM fees WHERE trainerID = ? ORDER BY Date DESC");
$query->bind_param("i", $id);
$query->execute();

$array = $query->get_result();

$response = [];

while($fee = $array->fetch_assoc()) {
    $response[] = $fee;
}

$query = $mysqli->prepare("SELECT SUM(amount) FROM fees WHERE TrainerID = ?");
$query->bind_param("i", $id);
$query->execute();

$array = $query->get_result();

while($fee = $array->fetch_assoc()) {
    $response[] = $fee;
}

echo json_encode($response);

?>