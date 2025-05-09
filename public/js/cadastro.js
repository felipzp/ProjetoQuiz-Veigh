function cadastrar() {
    var nomeVar = document.getElementById("nome").value.trim();
    var emailVar = document.getElementById("email").value.trim();
    var senhaVar = document.getElementById("senha").value;
    var senhaBVar = document.getElementById("senhaB").value;

    if (nomeVar.length < 3) {
        alert("O nome deve ter pelo menos 3 caracteres.");
        return;
    }

    if (emailVar == "" || !emailVar.includes("@") || !emailVar.includes(".")) {
        alert("Por favor, insira um email válido.");
        return;
    }

    if (senhaVar.length < 6) {
        alert("A senha deve ter no mínimo 6 caracteres.");
        return;
    }

    if (senhaVar !== senhaBVar) {
        alert("As senhas não coincidem.");
        return;
    }

    // Envio se passou por tudo
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
    .catch(function (erro) {
        console.log("#ERRO: ", erro);
    });
}
