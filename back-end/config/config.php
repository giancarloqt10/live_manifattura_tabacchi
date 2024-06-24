<?php
$servername = "localhost";
$username = "root";
$password = ""; // La nuova password impostata
$dbname = "Live_Manifattura_Tabacchi_Database";

// Crea connessione
$conn = new mysqli($servername, $username, $password, $dbname);

// Controlla connessione
if ($conn->connect_error) {
    die("Connessione fallita: " . $conn->connect_error);
}
?>
