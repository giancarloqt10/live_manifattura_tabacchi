<?php
// Intestazioni CORS
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
header("Access-Control-Allow-Credentials: true");

// Gestisci la richiesta OPTIONS preflight
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(204);
    exit;
}

include '../config/config.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = isset($_POST['name']) ? $conn->real_escape_string($_POST['name']) : '';
    $last_name = isset($_POST['last-name']) ? $conn->real_escape_string($_POST['last-name']) : '';
    $email = isset($_POST['email']) ? $conn->real_escape_string($_POST['email']) : '';
    $phone = isset($_POST['phone']) ? $conn->real_escape_string($_POST['phone']) : '';
    $tipologies = isset($_POST['tipologies']) ? $conn->real_escape_string($_POST['tipologies']) : '';
    $message = isset($_POST['message']) ? $conn->real_escape_string($_POST['message']) : '';
    $accetta_informativa = isset($_POST['accetta-informativa']) ? 1 : 0;
    $accetta_servizi = isset($_POST['accetta-servizi']) ? 1 : 0;
    $accetta_marketing = isset($_POST['accetta-marketing']) ? 1 : 0;

    $sql = "INSERT INTO form_data (name, last_name, email, phone, tipologies, message, accetta_informativa, accetta_servizi, accetta_marketing)
    VALUES ('$name', '$last_name', '$email', '$phone', '$tipologies', '$message', '$accetta_informativa', '$accetta_servizi', '$accetta_marketing')";

    // Debug: stampa la query SQL
    error_log("SQL Query: " . $sql);

    if ($conn->query($sql) === TRUE) {
        echo json_encode(["status" => "success", "message" => "Dati salvati correttamente."]);
    } else {
        // Debug: stampa l'errore SQL
        error_log("SQL Error: " . $conn->error);
        echo json_encode(["status" => "error", "message" => "Errore: " . $sql . "<br>" . $conn->error]);
    }

    $conn->close();
} else {
    echo json_encode(["status" => "error", "message" => "Metodo di richiesta non supportato."]);
}
?>
