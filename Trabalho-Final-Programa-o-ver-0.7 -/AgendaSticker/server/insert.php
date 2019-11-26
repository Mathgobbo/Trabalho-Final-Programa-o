<?php  
try {
  $pdo = new PDO('mysql:host=localhost;dbname=meuBancoDeDados', $username, $password);
  $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
   
  $stmt = $pdo->prepare('INSERT INTO minhaTabela (titulo,subtitulo,descricao) VALUES(:titulo,:subtitulo,:descricao)');
  $stmt->execute(array(
    ':titulo' => $_POST['titulo'], ':subtitulo' => $_POST['subtitulo'], ':descricao' => $_POST
  ));
   
  echo $stmt->rowCount(); 
} catch(PDOException $e) {
  echo 'Error: ' . $e->getMessage();
  
   ?>