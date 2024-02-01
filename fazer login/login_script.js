document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Validar os campos (pode adicionar validações adicionais aqui)
    if (username.trim() === "" || password.trim() === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Aqui você pode adicionar lógica para autenticar o usuário
    // Por exemplo, enviar os dados para um servidor via AJAX

    // Por enquanto, vamos apenas simular um login bem-sucedido
    alert("Login bem-sucedido! Redirecionando...");
    window.location.href = "pagina_principal.html";
});
