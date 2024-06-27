<?php
$servername = "localhost";
$username = "root";
$password = ""; // la tua password di MySQL
$dbname = "Live_Manifattura_Tabacchi_Database";

// Creazione connessione
$conn = new mysqli($servername, $username, $password, $dbname);

// Controllo connessione
if ($conn->connect_error) {
    die("Connessione fallita: " . $conn->connect_error);
}
?>
