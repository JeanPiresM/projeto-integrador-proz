const carrinhoSalvo = localStorage.getItem("carrinho");
produtos =[]

if (carrinhoSalvo) {
  produtos = JSON.parse(carrinhoSalvo); // Converte a string JSON de volta para um array
}


// Exibição dos produtos no carrinho
const cartItemsContainer = document.getElementById("cart-items");

produtos.forEach(produto => {
  const cart_item = document.createElement("div");
  cart_item.classList.add("cart-item");

  // Calcular preço total inicial
  const totalProduto = produto.preco_produto;

  cart_item.innerHTML = `
  <img src="${produto.img_produto}" alt="teste" class="item-image" />
  <span>${
    produto.nome_produto
  } - R$ <span class="product-price">${totalProduto.toFixed(2)}</span></span>
  <div class="quantity-selector">
    <button class="decrease">-</button>
    <input type="text" class="quantity" value="1" readonly />
    <button class="increase">+</button>
  </div>`;

  cartItemsContainer.appendChild(cart_item);
}) 

// Calcular valor total do carrinho e atualizar
function updateTotal() {
  const preco_total_carrinho = document.querySelector(".cart-total");
  let total = 0;

  const cartItems = document.querySelectorAll(".cart-item");
  console.log(cartItems);
  cartItems.forEach((item) => {
    const preco = parseFloat(item.querySelector(".product-price").textContent);
    total += preco; // Somando o valor de cada produto (já calculado)
  });

  preco_total_carrinho.textContent = `VALOR TOTAL: R$ ${total.toFixed(2)}`; // Atualiza o valor total
}

document.addEventListener("click", (event) => {
  const target = event.target;

  if (target.classList.contains("increase")) {
    const cart_item = target.closest(".cart-item");
    
    const inputQuantidade = cart_item.querySelector('.quantity'); // Input de quantidade
    let quantidadeAtual = parseInt(inputQuantidade.value); // Quantidade atual
    let precoUnitario = parseFloat(cart_item.querySelector('.product-price').textContent) / quantidadeAtual; // Preço unitário
    console.log(precoUnitario)

    // Aumenta a quantidade
    quantidadeAtual += 1;

    // Atualiza o valor da quantidade na tela
    inputQuantidade.value = quantidadeAtual;

    // Calcula o novo preço total corretamente
    const precoTotal = precoUnitario * quantidadeAtual;
    
    // Atualiza o preço total na tela
    cart_item.querySelector('.product-price').textContent = precoTotal.toFixed(2);
    
    updateTotal(); // Atualiza o total do carrinho
  }
  else{
    const cart_item = target.closest(".cart-item");

    const inputQuantidade = cart_item.querySelector('.quantity'); // Input de quantidade
    let quantidadeAtual = parseInt(inputQuantidade.value); // Quantidade atual
    let precoUnitario = parseFloat(cart_item.querySelector('.product-price').textContent)
    console.log(precoUnitario)

    if(quantidadeAtual > 1){
      precoUnitario = precoUnitario / quantidadeAtual

      quantidadeAtual -= 1; // Diminui a quantidade

      // Atualiza o preço com a quantidade correta
      cart_item.querySelector('.product-price').textContent = (precoUnitario * quantidadeAtual).toFixed(2);

      inputQuantidade.value = quantidadeAtual; // Atualiza o valor da quantidade na tela
      updateTotal()
    }
  }
});

updateTotal();

// Validação dos campos do form


// Capturando os elementos

// Email
const email_label = document.querySelector('label[for="email"]');
const email_input = document.getElementById("email");
const email_helper = document.getElementById("email-helper");

// Nome
const nome_label = document.querySelector('label[for="firstName"]');
const nome_input = document.getElementById("firstName");
const nome_helper = document.getElementById("firstName-helper");

// Sobrenome
const sobreNome_label = document.querySelector('label[for="lastName"]');
const sobreNome_input = document.getElementById("lastName");

// Cpf
const cpf_label = document.querySelector('label[for="cpf"]');
const cpf_input = document.getElementById("cpf");
const cpf_helper = document.getElementById("cpf-helper")


// Telefone
const telefone_label = document.querySelector('label[for="phone"]');
const telefone_input = document.getElementById("phone");

// Senha
const senha_input = document.getElementById("password");


// Confirmação da senha
const confirmarSenha_input = document.getElementById("confirmPassword");
const confirmarSenha_helper = document.getElementById("confirmPassword-helper");

console.log(email_label);
console.log(email_input);

// Função de mostrar e ocultar popup de campo obrigatório

function mostrarPopup(input, label) {
  // Mostra o popup
  input.addEventListener("focus", () => {
    label.classList.add("required-popup");
  });

  // Ocultar popup de campo obrigatório
  input.addEventListener("blur", () => {
    label.classList.remove("required-popup");
  });
}

mostrarPopup(email_input, email_label);
mostrarPopup(nome_input, nome_label);
mostrarPopup(sobreNome_input, sobreNome_label);
mostrarPopup(cpf_input, cpf_label);
mostrarPopup(telefone_input, telefone_label);

// Validar valor do input (email)
email_input.addEventListener("change", (event) => {
  let valor = event.target.value;
  //console.log(event.target.value);

  if (valor.includes("@") && valor.includes(".com")) {
    email_input.classList.add("correct");
    email_input.classList.remove("error");
    email_helper.classList.remove("visible");
    //} else if (valor.includes(".com")) {
    //  email_input.classList.add("correct");
    //  usernameInput.classList.remove("error");
    //  usernameHelper.classList.remove("visible");
  } else {
    email_input.classList.add("error");
    email_input.classList.remove("correct");
    email_helper.classList.add("visible");
    email_helper.innerText = "E-mail inválido";
  }
});

// Validar valor do input (nome)
nome_input.addEventListener("change", (event) => {
  let valor = event.target.value;
  //console.log(event.target.value);

  if (valor.length > 3) {
    nome_input.classList.add("correct");
    nome_input.classList.remove("error");
    nome_helper.classList.remove("visible");
  } else if (parseInt(valor) / 1) {
    nome_input.classList.add("error");
    nome_input.classList.remove("correct");
    nome_helper.classList.add("visible");
    nome_helper.innerText = "Coloque seu primeiro nome";
  } else {
    nome_input.classList.add("error");
    nome_input.classList.remove("correct");
    nome_helper.classList.add("visible");
    nome_helper.innerText = "Seu username deve ter 3 ou mais caracteres";
  }
});

//Validar o confirmar senha

confirmarSenha_input.addEventListener("change", (event) => {
  let valor = event.target.value;
  console.log(valor);
  if (senha_input.value != valor) {
    confirmarSenha_input.classList.add("error");
    confirmarSenha_input.classList.remove("correct");
    confirmarSenha_helper.classList.add("visible");
    confirmarSenha_helper.innerText = "As duas senhas tem que ser iguais";
  } else {
    confirmarSenha_input.classList.add("correct");
    confirmarSenha_input.classList.remove("error");
    confirmarSenha_helper.classList.remove("visible");
  }
});

// Validar cpf

cpf_input.addEventListener("change", (event) => {
  const valor = event.target.value;
  
  
  if(valor.length === 0){
    cpf_input.classList.remove("error")
    cpf_input.classList.remove("correct")
    cpf_helper.classList.remove("visible")
 }
  else if (valor.length < 11 || valor.length > 11) {
    cpf_input.classList.add("error");
    cpf_input.classList.remove("correct");
    cpf_helper.classList.add("visible");
    cpf_helper.innerText = "O cpf informado é inválido";
  }
  else {
    cpf_input.classList.add("correct");
    cpf_input.classList.remove("error");
    cpf_helper.classList.remove("visible");
  }
});
