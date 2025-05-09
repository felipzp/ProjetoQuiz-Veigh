function cadastrar() {
    var nomeVar = nome.value;
    var emailVar = email.value;
    var senhaVar = senha.value;
    var senhaBVar = senhaB.value;

    fetch("/usuarios/cadastrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            nomeServer: nomeVar,
            emailServer: emailVar,
            senhaServer: senhaVar,
        }),
    })
    .then(function (resposta) {
        console.log("resposta: ", resposta);

        if (resposta.ok) {
            alert("Cadastro realizado com sucesso! Redirecionando para tela de Login...");
            window.location = "login.html";
        } else {
            alert("Houve um erro ao tentar realizar o cadastro!");
        }
    })
    .catch(function (resposta) {
        console.log("#ERRO: ${resposta}");
    });
}