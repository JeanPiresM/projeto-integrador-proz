let produtos = JSON.parse(localStorage.getItem("carrinho")) || [];

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
    console.log(localStorage.carrinho);
  });
});

console.log(localStorage.carrinho);
