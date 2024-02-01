document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Validar os campos (pode adicionar validações adicionais aqui)
    if (username.trim() === "" || email.trim() === "" || password.trim() === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Aqui você pode adicionar lógica para criar a conta do usuário
    // Por exemplo, enviar os dados para um servidor via AJAX

    // Por enquanto, vamos apenas simular uma conta criada com sucesso
    alert("Conta criada com sucesso!");
});
