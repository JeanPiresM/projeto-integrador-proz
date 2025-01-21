const carrinhoSalvo = localStorage.getItem("carrinho");
produtos = [];

if (carrinhoSalvo) {
  produtos = JSON.parse(carrinhoSalvo); // Converte a string JSON de volta para um array
}

function exibirCarrinho() {
  // Exibição dos produtos no carrinho
  const cartItemsContainer = document.getElementById("cart-items");

  cartItemsContainer.innerHTML = "";
  produtos.forEach((produto, index) => {
    const cart_item = document.createElement("div");
    cart_item.classList.add("cart-item");

    cart_item.innerHTML = `
  <img src="${produto.img_produto}" alt="teste" class="item-image" />
  <span>${
    produto.nome_produto
  } - R$ <span class="product-price">${produto.preco_produto.toFixed(
      2
    )}</span></span>
  <div class="quantity-selector">
  <button class="decrease">-</button>
    <input type="text" class="quantity" value="1" readonly />
    <button class="increase">+</button>
    </div>
    <button class="botao-remover" data-index=${index}>🗑️</button>
    `;

    cartItemsContainer.appendChild(cart_item);
  });

  const botaoRemover = document.querySelectorAll(".botao-remover");

  botaoRemover.forEach((botao, index) => {
    botao.addEventListener("click", () => {
      console.log(index);
      removerDoCarrinho(index);
    });
  });
}

exibirCarrinho();
// Calcular valor total do carrinho e atualizar
function updateTotal() {
  const preco_total_carrinho = document.querySelector(".cart-total");
  let total = 0;

  const cartItems = document.querySelectorAll(".cart-item");
  cartItems.forEach((item) => {
    const preco = parseFloat(item.querySelector(".product-price").textContent);
    total += preco;
  });

  preco_total_carrinho.textContent = `VALOR TOTAL: R$ ${total.toFixed(2)}`;
}

document.addEventListener("click", (event) => {
  const target = event.target;

  if (target.classList.contains("increase")) {
    const cart_item = target.closest(".cart-item");

    const inputQuantidade = cart_item.querySelector(".quantity");

    let quantidadeAtual = parseInt(inputQuantidade.value);
    let precoUnitario =
      parseFloat(cart_item.querySelector(".product-price").textContent) /
      quantidadeAtual;
    console.log(precoUnitario);

    quantidadeAtual += 1;

    inputQuantidade.value = quantidadeAtual;

    const precoTotal = precoUnitario * quantidadeAtual;

    console.log(target.dataset.index);

    cart_item.querySelector(".product-price").textContent =
      precoTotal.toFixed(2);
    updateTotal();
  } else {
    const cart_item = target.closest(".cart-item");

    const inputQuantidade = cart_item.querySelector(".quantity");
    let quantidadeAtual = parseInt(inputQuantidade.value);
    let precoUnitario = parseFloat(
      cart_item.querySelector(".product-price").textContent
    );
    console.log(precoUnitario);

    if (quantidadeAtual > 1) {
      // Volta o preço do produto para o preço original
      precoUnitario = precoUnitario / quantidadeAtual;

      quantidadeAtual -= 1;

      cart_item.querySelector(".product-price").textContent = (
        precoUnitario * quantidadeAtual
      ).toFixed(2);

      inputQuantidade.value = quantidadeAtual;
      updateTotal();
    }
  }
});

function removerDoCarrinho(index) {
  produtos.splice(index, 1);

  localStorage.setItem("carrinho", JSON.stringify(produtos));

  updateTotal();
  exibirCarrinho();
}

updateTotal();

// Botão de finalizar compra

// Capturando o elemento do botão

const botaoForm = document.querySelector(".btn-form");

//Função para verificar se todos os campos estão válidos
function validarFormulario() {
  const camposValidos = [
    emailInput.classList.contains("correct"),
    nomeInput.classList.contains("correct"),
    sobreNomeInput.classList.contains("correct"),
    cpfInput.classList.contains("correct"),
    telefoneInput.classList.contains("correct"),
    confirmarSenhaInput.classList.contains("correct"),
  ];
  // Retorna true se todos os campos forem válidos
  return camposValidos.every((campo) => campo === true);
}

// Evento no botão do formulario
botaoForm.addEventListener("click", () => {
  if (validarFormulario()) {
    console.log(validarFormulario());
    alert("Formulario enviado!");
  } else {
    alert("Preencha o formulário corretamente");
  }
});

// Validação dos campos do form

// Capturando os elementos para validações

// Email
const emailLabel = document.querySelector('label[for="email"]');
const emailInput = document.getElementById("email");
const emailHelper = document.getElementById("email-helper");

// Nome
const nomeLabel = document.querySelector('label[for="firstName"]');
const nomeInput = document.getElementById("firstName");
const nomeHelper = document.getElementById("firstName-helper");

// Sobrenome
const sobreNomeLabel = document.querySelector('label[for="lastName"]');
const sobreNomeInput = document.getElementById("lastName");
const sobreNomeHelper = document.getElementById("lastName-helper");

// Cpf
const cpfLabel = document.querySelector('label[for="cpf"]');
const cpfInput = document.getElementById("cpf");
const cpfHelper = document.getElementById("cpf-helper");

// Telefone
const telefoneLabel = document.querySelector('label[for="phone"]');
const telefoneInput = document.getElementById("phone");
const telefoneHelper = document.getElementById("phone-helper");

// Senha
const senhaLabel = document.querySelector('label[for="password"]');
const senhaInput = document.getElementById("password");

// Confirmação da senha
const confirmarSenhaLabel = document.querySelector(
  'label[for="confirmPassword"]'
);
const confirmarSenhaInput = document.getElementById("confirmPassword");
const confirmarSenhaHelper = document.getElementById("confirmPassword-helper");

console.log(emailLabel);
console.log(emailInput);

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

mostrarPopup(emailInput, emailLabel);
mostrarPopup(nomeInput, nomeLabel);
mostrarPopup(sobreNomeInput, sobreNomeLabel);
mostrarPopup(cpfInput, cpfLabel);
mostrarPopup(telefoneInput, telefoneLabel);
mostrarPopup(senhaInput, senhaLabel);
mostrarPopup(confirmarSenhaInput, confirmarSenhaLabel);

// Validar valor do input (email)
emailInput.addEventListener("change", (event) => {
  let valor = event.target.value;
  //console.log(event.target.value);

  if (valor == "") {
    emailInput.classList.remove("correct");
    emailInput.classList.remove("error");
    emailHelper.classList.remove("visible");
    return;
  }

  if (valor.includes("@") && valor.includes(".com")) {
    emailInput.classList.add("correct");
    emailInput.classList.remove("error");
    emailHelper.classList.remove("visible");
    //} else if (valor.includes(".com")) {
    //  emailInput.classList.add("correct");
    //  usernameInput.classList.remove("error");
    //  usernameHelper.classList.remove("visible");
  } else {
    emailInput.classList.add("error");
    emailInput.classList.remove("correct");
    emailHelper.classList.add("visible");
    emailHelper.innerText = "E-mail inválido";
  }
});

// Validar valor do input (nome)
nomeInput.addEventListener("change", (event) => {
  let valor = event.target.value;
  //console.log(event.target.value);

  if (valor == "") {
    nomeInput.classList.remove("correct");
    nomeInput.classList.remove("error");
    nomeHelper.classList.remove("visible");
    return;
  }

  if (valor.length > 3 && isNaN(valor)) {
    nomeInput.classList.add("correct");
    nomeInput.classList.remove("error");
    nomeHelper.classList.remove("visible");
  } else if (!isNaN(valor)) {
    nomeInput.classList.add("error");
    nomeInput.classList.remove("correct");
    nomeHelper.classList.add("visible");
    nomeHelper.innerText = "Coloque seu primeiro nome";
  } else {
    nomeInput.classList.add("error");
    nomeInput.classList.remove("correct");
    nomeHelper.classList.add("visible");
    nomeHelper.innerText = "Seu username deve ter 3 ou mais caracteres";
  }
});

sobreNomeInput.addEventListener("change", (event) => {
  let valor = event.target.value;
  //console.log(event.target.value);

  if (valor == "") {
    sobreNomeInput.classList.remove("correct");
    sobreNomeInput.classList.remove("error");
    sobreNomeHelper.classList.remove("visible");
    return;
  }

  if (valor.length > 2 && isNaN(valor)) {
    sobreNomeInput.classList.add("correct");
    sobreNomeInput.classList.remove("error");
    sobreNomeHelper.classList.remove("visible");
  } else if (!isNaN(valor)) {
    sobreNomeInput.classList.add("error");
    sobreNomeInput.classList.remove("correct");
    sobreNomeHelper.classList.add("visible");
    sobreNomeHelper.innerText = "Coloque seu sobrenome";
  } else {
    sobreNomeInput.classList.add("error");
    sobreNomeInput.classList.remove("correct");
    sobreNomeHelper.classList.add("visible");
    sobreNomeHelper.innerText = "Seu username deve ter 2 ou mais caracteres";
  }
});

//Validar o confirmar senha

confirmarSenhaInput.addEventListener("change", (event) => {
  let valor = event.target.value;
  console.log(valor);
  if (valor == "") {
    confirmarSenhaInput.classList.remove("correct");
    confirmarSenhaInput.classList.remove("error");
    confirmarSenhaHelper.classList.remove("visible");
    return;
  }
  if (senhaInput.value != valor) {
    confirmarSenhaInput.classList.add("error");
    confirmarSenhaInput.classList.remove("correct");
    confirmarSenhaHelper.classList.add("visible");
    confirmarSenhaHelper.innerText = "As duas senhas tem que ser iguais";
  } else {
    confirmarSenhaInput.classList.add("correct");
    confirmarSenhaInput.classList.remove("error");
    confirmarSenhaHelper.classList.remove("visible");
  }
});

// Validar cpf

cpfInput.addEventListener("change", (event) => {
  const valor = event.target.value;

  const valorSemMascara = valor.replace(/\D/g, "");

  console.log("Valor original:", valor);
  console.log("Valor sem máscara:", valorSemMascara);
  if (
    valorSemMascara == "" ||
    valorSemMascara.length < 11 ||
    valorSemMascara.length > 11
  ) {
    cpfInput.classList.add("error");
    cpfInput.classList.remove("correct");
    cpfHelper.classList.add("visible");
    cpfHelper.innerText = "O cpf informado é inválido";
    handleCpf(event);
  } else {
    cpfInput.classList.add("correct");
    cpfInput.classList.remove("error");
    cpfHelper.classList.remove("visible");
    handleCpf(event);
  }
});

const handleCpf = (event) => {
  let input = event.target;
  console.log(input);
  input.value = cpfMask(input.value);
};

const cpfMask = (value) => {
  if (!value) return ""; // Se não houver valor, retorna vazio
  value = value.replace(/\D/g, ""); // Remove caracteres não numéricos
  value = value.replace(/(\d{3})(\d)/, "$1.$2");
  value = value.replace(/(\d{3})(\d)/, "$1.$2");
  value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  return value;
};

// Validar valor do input (Telefone)

const handlePhone = (event) => {
  let input = event.target;
  input.value = phoneMask(input.value);
};

telefoneInput.addEventListener("change", (event) => {
  const valor = event.target.value;

  const valorSemMascara = valor.replace(/\D/g, "");
  console.log(valorSemMascara.length);

  if (valorSemMascara === "" || valorSemMascara.length < 10) {
    telefoneInput.classList.add("error");
    telefoneInput.classList.remove("correct");
    telefoneHelper.classList.add("visible");
    telefoneHelper.innerText = "O telefone informado é inválido";
    handlePhone(event);
  } else {
    telefoneInput.classList.add("correct");
    telefoneInput.classList.remove("error");
    telefoneHelper.classList.remove("visible");
  }
  handlePhone(event);
});

const phoneMask = (value) => {
  if (!value) return ""; // Se não houver valor, retorna vazio
  value = value.replace(/\D/g, ""); // Remove caracteres não numéricos
  value = value.replace(/(\d{2})(\d)/, "($1) $2"); // Adiciona parênteses no DDD
  value = value.replace(/(\d)(\d{4})$/, "$1-$2"); // Adiciona o hífen no número
  return value;
};
