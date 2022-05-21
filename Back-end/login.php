<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');

include "db_info.php";

$data = json_decode(file_get_contents("php://input"));

$email_address = $data->email_address;
$password = hash("sha256", $data->password);

$query = $mysqli->prepare("SELECT user_id FROM users WHERE email_address = ? AND password = ?");
$query->bind_param("ss",$email_address, $password);
$query->execute();

$array = $query->get_result();

if($user_id = $array->fetch_assoc()){
    $response = $user_id["user_id"];

    echo json_encode($response);
}

?>