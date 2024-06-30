<?php
require '../vendor/autoload.php';

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$servername = "localhost";
$username = "root";
$password = "193540"; // la tua password di MySQL
$dbname = "Live_Manifattura_Tabacchi_Database";
$socket = "/Applications/XAMPP/xamppfiles/var/mysql/mysql.sock"; // Path al socket di MySQL

// Creazione connessione
$conn = new mysqli($servername, $username, $password, $dbname, null, $socket);

// Controllo connessione
if ($conn->connect_error) {
    die("Connessione fallita: " . $conn->connect_error);
}
?>
