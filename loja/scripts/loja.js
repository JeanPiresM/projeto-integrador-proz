let produtos = [];

const carrinhoSalvo = localStorage.getItem("carrinho");

if (carrinhoSalvo) {
  try {
    produtos = JSON.parse(carrinhoSalvo) || [];
  } catch (e) {
    console.error("Erro ao carregar o carrinho:", e);
    produtos = [];
  }
} else {
  produtos = [];
}

const botaoAdd = document.querySelectorAll(".add-produto");

botaoAdd.forEach((button) => {
  button.addEventListener("click", (event) => {
    const produto = event.target.closest(".produto");

    const nome = produto.querySelector(".infoNome").textContent;
    const preco = parseFloat(
      produto.querySelector(".infoPreco").textContent.replace(",", ".")
    );
    const img = produto.querySelector(".divina_home");
    const imgURL = img.src;

    produtos.push({
      nome_produto: nome,
      preco_produto: preco,
      img_produto: imgURL,
    });

    localStorage.setItem("carrinho", JSON.stringify(produtos));
    alert("Produto adicionado ao carrinho.")
    console.log(localStorage.carrinho);
  });
});

console.log(localStorage.carrinho);
