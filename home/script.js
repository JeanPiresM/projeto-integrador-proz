// Função para verificar se o pop-up deve ser exibido
function checkAgeVerification() {
    const choice = localStorage.getItem("ageVerified");
    if (!choice) {
        document.getElementById("popup").style.display = "block";
    }
}

// Função para confirmar a idade e salvar a escolha se a flag estiver marcada
function confirmAge(isOfAge) {
    const rememberChoice = document.getElementById("rememberChoice").checked;
    if (rememberChoice) {
        localStorage.setItem("ageVerified", isOfAge ? "yes" : "no");
    }
    document.getElementById("popup").style.display = "none";

    if (!isOfAge) {
        alert("Você deve ter mais de 18 anos para acessar este conteúdo.");
        // Aqui você pode redirecionar para outra página ou fechar o site.
        window.location.href = "https://snov.io/blog/wp-content/uploads/2023/01/image2-1.png"; // Redirecione se o usuário não tiver idade suficiente.
    }
}

// Verifica a idade ao carregar a página
window.onload = checkAgeVerification;