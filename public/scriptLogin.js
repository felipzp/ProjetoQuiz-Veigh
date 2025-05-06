function login() {
    var email = ipt_email.value;
    var senha = ipt_senha.value;

    if (email === "" || senha === "") {
        alert("Por favor, preencha todos os campos.");
    } else {
        alert("Login realizado com sucesso!");
        window.location.href = "index.html  "
    }
}
