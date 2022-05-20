<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');

include "db_info.php";

$data = json_decode(file_get_contents("php://input"));

$first_name = $data->first_name;
$last_name = $data->last_name;
$email_address = $data->email_address;
$phone_number = $data->phone_number;
$password = hash("sha256", $data->password);
$user_type = $data->user_type;

$query = $mysqli->prepare("SELECT email_address FROM users WHERE email_address = ?");
$query->bind_param("s", $email_address);
$query->execute();

$array = $query->get_result();

$email_address_user = $array->fetch_assoc();
    
if(empty($email_address_user)){
    $query2 = $mysqli->prepare("INSERT INTO users (first_name, last_name, email_address, phone_number, password) VALUES (?, ?, ?, ?, ?)");
    $query2->bind_param("sssis", $first_name, $last_name, $email_address, $phone_number, $password);
    $query2->execute();
    echo json_encode($email_address);
}

?>