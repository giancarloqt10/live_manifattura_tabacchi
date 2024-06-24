<?php
require '../../vendor/autoload.php';
$config = require '../config/config.php';

use App\Database;

$db = new Database($config['database']);
$result = $db->query("SELECT * FROM users");

$users = $result->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($users);
