<?php
include 'server.php';

$consulta = $pdo->query("SELECT id, titulo, subtitulo, descricao FROM registro;");

while($linha = $consulta->(PDO::FETCH_ASSOC)){
    echo "Titulo: {$linha['titulo']}<br /> Subtitulo: {$linha['subtitulo']}<br /> Descrição: {$linha['descricao']}<br />  ";
}

?>