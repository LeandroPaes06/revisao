let btn = document.querySelector("button")
let form = document.querySelector("form")

btn.addEventListener('click', enviarDados)

function enviarDados(event){
    event.preventDefault();
    // selecionando objetos html
    let inputNome = form.nome
    let inputEmail = form.email
    let inputSenha = form.senha
    
    // obtendo o conteúdo de texto
    let nome = inputNome.value
    let email = inputEmail.value
    let senha = inputSenha.value
    let user = {
        nome: nome,
        email: email,
        senha: senha
    }
    form.reset()
    console.log(user);
    incluirDados(user)
}

function incluirDados(user){
    let url = "http://erykycriador.atwebpages.com/site1/test_post/controller/POST_incluirUsuario.php"
    fetch(url,{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user)
    })
    // lidar com a resposta
    .then(function (response) {
        console.log(response)
        alert(response.nome);
    })
    .then(function (response) { 
        alert("Seu cadastro foi efetuado");
    })
}
