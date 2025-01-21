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
    window.location.href =
      "https://snov.io/blog/wp-content/uploads/2023/01/image2-1.png"; // Redirecione se o usuário não tiver idade suficiente.
  }
}

// Verifica a idade ao carregar a página
window.onload = checkAgeVerification;

// Exibe ou oculta o menu de opções ao clicar no botão "Entrar"
document.getElementById("entrarBtn").addEventListener("click", function () {
  const menu = document.getElementById("opcoesMenu");
  menu.style.display =
    menu.style.display === "none" || menu.style.display === ""
      ? "block"
      : "none";
});

if (localStorage.length == 0) {
  localStorage.setItem("carrinho", JSON.stringify([]));
  console.log(localStorage);
}

// Seleciona todos os links no menu
/* const menuLinks = document.querySelectorAll(".Menu a");
const conteudoDiv = document.getElementById("conteudo");
/*  */
// Função para carregar conteúdo dinamicamente usando Fetch
menuLinks.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault(); // Impede o recarregamento da página

    // Obtém a seção a partir do atributo data-section
    const section = link.getAttribute("data-section");
    carregarConteudo(section);
  });
});

// Função para carregar o conteúdo da seção selecionada
function carregarConteudo(section) {
  fetch(`${section}.html`) // Tenta carregar o arquivo HTML correspondente à seção
    .then((response) => {
      if (!response.ok) {
        throw new Error("Erro ao carregar o conteúdo.");
      }
      return response.text(); // Retorna o conteúdo da resposta como texto
    })
    .then((data) => {
      conteudoDiv.innerHTML = data; // Atualiza o conteúdo da div com o novo conteúdo
    })
    .catch((error) => {
      conteudoDiv.innerHTML =
        "<p>Erro ao carregar o conteúdo. Tente novamente mais tarde.</p>";
      console.error(error);
    });
}

/* // Função carrossel:
let indexImagem = 0;
const imagens = document.querySelectorAll('.carrossel-imagens img');
const totalImagens = imagens.length;

function mostrarImagem(index) {
    const carrosselImagens = document.querySelector('.carrossel-imagens');
    const deslocamento = -index *  50// Ajusta a posição do carrossel
    carrosselImagens.style.transform = `translateX(${deslocamento}%)`;
}

function mudarImagem(direcao) {
    indexImagem += direcao;
    
    if (indexImagem >= totalImagens) {
        indexImagem = 0; // Retorna para a primeira imagem
    } else if (indexImagem < 0) {
        indexImagem = totalImagens - 1; // Vai para a última imagem
    }

    mostrarImagem(indexImagem);
}

document.addEventListener('DOMContentLoaded', () => {
    mostrarImagem(indexImagem); // Inicia com a primeira imagem
}); */ 