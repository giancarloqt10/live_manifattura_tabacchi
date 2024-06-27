<?php
include '../config/config.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $last_name = $_POST['last-name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $tipologies = $_POST['tipologies'];
    $message = $_POST['message'];
    $accetta_informativa = isset($_POST['accetta-informativa']) ? 1 : 0;
    $accetta_servizi = isset($_POST['accetta-servizi']) ? 1 : 0;
    $accetta_marketing = isset($_POST['accetta-marketing']) ? 1 : 0;

    $sql = "INSERT INTO form_data (name, last_name, email, phone, tipologies, message, accetta_informativa, accetta_servizi, accetta_marketing)
    VALUES ('$name', '$last_name', '$email', '$phone', '$tipologies', '$message', '$accetta_informativa', '$accetta_servizi', '$accetta_marketing')";

    if ($conn->query($sql) === TRUE) {
        echo json_encode(["status" => "success", "message" => "Dati salvati correttamente."]);
    } else {
        echo json_encode(["status" => "error", "message" => "Errore: " . $sql . "<br>" . $conn->error]);
    }

    $conn->close();
}
?>
