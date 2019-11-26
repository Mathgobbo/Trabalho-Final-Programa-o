<?php

include('server.php');
$consulta = $conn->query("SELECT * from registro");

while($linha = $consulta->fetch()){
    echo $linha['titulo'];
}

?>