<?php
header('Content-Type: application/json');

include '../config/config.php'; // Inclusione del file di configurazione per la connessione al database

$data = json_decode(file_get_contents('php://input'), true);

if (!empty($data)) {
    $nome = $data['nome'];
    $lastName = $data['lastName'];
    $email = $data['email'];
    $phone = $data['phone'];
    $tipologies = $data['tipologies'];
    $messaggio = $data['messaggio'];
    $accettaInformativa = $data['accettaInformativa'] ? 1 : 0;
    $accettaServizi = $data['accettaServizi'] ? 1 : 0;
    $accettaMarketing = $data['accettaMarketing'] ? 1 : 0;

    $sql = "INSERT INTO form_data (nome, last_name, email, phone, tipologies, messaggio, accetta_informativa, accetta_servizi, accetta_marketing)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";

    $stmt = $conn->prepare($sql);
    if ($stmt === false) {
        echo json_encode(['status' => 'error', 'message' => 'Prepare failed: ' . $conn->error]);
        exit;
    }

    $stmt->bind_param("ssssssiii", $nome, $lastName, $email, $phone, $tipologies, $messaggio, $accettaInformativa, $accettaServizi, $accettaMarketing);

    if ($stmt->execute()) {
        echo json_encode(['status' => 'success', 'message' => 'Dati salvati correttamente.']);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Errore nel salvataggio dei dati: ' . $stmt->error]);
    }

    $stmt->close();
} else {
    echo json_encode(['status' => 'error', 'message' => 'Nessun dato ricevuto.']);
}

$conn->close();
?>
