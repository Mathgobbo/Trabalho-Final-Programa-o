<?php  
try {
  include('server.php');
  

  $a = 'dsahdksbksd';
  echo $a;
 
  // $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
   
  // $stmt = $conn->prepare('INSERT INTO minhaTabela (titulo,subtitulo,descricao) VALUES(:titulo,:subtitulo,:descricao)');
  // $stmt->execute(array(
  //   ':titulo' => $_POST['titulo'], ':subtitulo' => $_POST['subtitulo'], ':descricao' => $_POST['descricao']
  // ));
   
 
} catch(PDOException $e) {
  echo 'Error: ' . $e->getMessage();
} 
   ?>