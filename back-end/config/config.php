<?php
require '../vendor/autoload.php';

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$servername = "localhost";
$username = "root";
$password = ""; // la tua password di MySQL
$dbname = "Live_Manifattura_Tabacchi_Database";

// Creazione connessione
$conn = new mysqli($servername, $username, $password, $dbname, null);

// Controllo connessione
if ($conn->connect_error) {
    die("Connessione fallita: " . $conn->connect_error);
}
?>
