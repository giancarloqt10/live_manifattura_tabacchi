<?php
namespace App;

class Database {
    private $pdo;

    public function __construct($config) {
        $this->pdo = new \PDO(
            $config['connection'] . ';dbname=' . $config['database'],
            $config['username'],
            $config['password'],
            $config['options']
        );
    }

    public function query($sql) {
        $statement = $this->pdo->prepare($sql);
        $statement->execute();
        return $statement;
    }
}
