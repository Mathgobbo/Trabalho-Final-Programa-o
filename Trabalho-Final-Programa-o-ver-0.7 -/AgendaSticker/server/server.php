<?php
try {
    $conn = new PDO('mysql:host=localhost;dbname=agendasticker', 'root', '');
    if($conn){
        echo 'Conectado//';
    }
} catch (PDOException $e) {
    echo 'error:' . $e->getMessage();
}



?>