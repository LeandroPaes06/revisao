<?php
    require '../model/usuario.php';
    $dados = json_decode(file_get_contents('php://input'));
    //echo $dados->nome;

        $usuarios = file_get_contents('../view/users.txt');
            $usuariosArray = json_decode($usuarios, true);
            $id = count($usuariosArray);
            
                $email = $dados->email;
                $senha = $dados->senha;

            $usuariosArray[] = array (
                'id' => $id,
                'nome' => $dados->nome,
                'email' => $email,
                'senha' => $senha
            );
        
           //$usuariosArray = new User($id, $dados->nome, $dados->email, $dados->senha);
        
           $usuariosJson = json_encode($usuariosArray, JSON_PRETTY_PRINT) . PHP_EOL;
           file_put_contents("../view/users.txt", $usuariosJson);

           echo $usuariosJson;
?>