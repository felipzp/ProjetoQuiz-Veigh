



function cadastro() {
    var nome = ipt_user.value;
    var email = ipt_email.value;
    var senha = ipt_senha.value;
    var senhaB = ipt_senhaB.value;

    if (nome == "") {
        alert("Preencha o campo de usuário.");
    }

    else if (email == "") {
        alert("Preencha o e-mail.");
    }

    
    else if (!email.includes("@") || !email.includes(".") || email.length < 5) {
        alert("Digite um e-mail válido.");
    }

   
    else if (senha == "") {
        alert("Preencha a senha.");
    }

    
    else if (senha.length < 6) {
        alert("A senha deve ter pelo menos 6 caracteres.");
    }

    
    else if (senhaB === "") {
        alert("Confirme a senha.");
    }

    
    else if (senha !== senhaB) {
        alert("As senhas não coincidem.");
    }

    
    else {
        alert("Cadastro realizado com sucesso!");
        window.location.href = "login.html";

    }
}
