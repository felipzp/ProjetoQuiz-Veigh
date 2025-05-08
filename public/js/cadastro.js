function cadastro() {
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;
    var senhaB = document.getElementById('senhaB').value;

    if (nome == "") {
        alert("Preencha o campo de usuário.");
    } else if (email == "") {
        alert("Preencha o e-mail.");
    } else if (!email.includes("@") || !email.includes(".") || email.length < 5) {
        alert("Digite um e-mail válido.");
    } else if (senha == "") {
        alert("Preencha a senha.");
    } else if (senha.length < 6) {
        alert("A senha deve ter pelo menos 6 caracteres.");
    } else if (senhaB === "") {
        alert("Confirme a senha.");
    } else if (senha !== senhaB) {
        alert("As senhas não coincidem.");
    } else {
        alert("Cadastro realizado com sucesso!");
        localStorage.setItem('nomeUsuario', nome);
        window.location.href = "login.html";
    }
}
