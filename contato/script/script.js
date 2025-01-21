// ---------- VALIDAÇÃO E-MAIL & SENHA ---------- //
let nomeInput = document.getElementById("nome");
let nomeLabel = document.querySelector('label[for="nome"]');
let nomeHelper = document.getElementById("nome-helper");
let telefoneInput = document.getElementById("telefone");
let telefoneLabel = document.querySelector('label[for="telefone"]');
let telefoneHelper = document.getElementById("telefone-helper");
let assuntoInput = document.getElementById("assunto");
let assuntoLabel = document.querySelector('label[for="assunto"]');
let assuntoHelper = document.getElementById("assunto-helper");
let mensagemInput = document.getElementById("mensagem");
let mensagemLabel = document.querySelector('label[for="mensagem"]');
let mensagemHelper = document.getElementById("mensagem-helper");

let emailInput = document.getElementById("email");
let emailLabel = document.querySelector('label[for="email"]');
let emailHelper = document.getElementById("email-helper");

function mostrarPopup(input, label) {
  // Mostrar popup de campo obrigatório
  input.addEventListener("focus", () => {
    label.classList.add("required-popup");
  });

  // Ocultar popup de campo obrigatório
  input.addEventListener("blur", () => {
    label.classList.remove("required-popup");
  });
}

function estilizarInputCorreto(input, helper) {
  helper.classList.remove("visible");
  input.classList.remove("error");
  input.classList.add("correct");
}

function estilizarInputInCorreto(input, helper) {
  helper.classList.add("visible");
  input.classList.add("error");
  input.classList.remove("correct");
}

mostrarPopup(nomeInput, nomeLabel);
// Validar valor do input (username)

nomeInput.addEventListener("change", (e) => {
  let valor = e.target.value;

  if (valor.length < 10) {
    // Adicionar estilos dinâmicos se o valor tiver menos de 3 caracteres
    nomeHelper.innerText = "Por favor, insira seu nome completo.";
    estilizarInputInCorreto(nomeInput, nomeHelper);
    inputsCorretos.nome = false;
  } else {
    // Adicionar estilos dinâmicos se o valor estiver correto
    estilizarInputCorreto(nomeInput, nomeHelper);
    inputsCorretos.nome = true;
  }
});

mostrarPopup(telefoneInput, telefoneLabel);

// Validar valor do input (Telefone)

telefoneInput.addEventListener("change", (e) => {
  let valor = e.target.value;

  if (valor.length <= 14) {
    // Adicionar estilos dinâmicos se o valor tiver menos de 3 caracteres
    telefoneHelper.innerText = "Por favor, insira um número válido.";
    estilizarInputInCorreto(telefoneInput, telefoneHelper);
    inputsCorretos.telefone = false;
  } else {
    // Adicionar estilos dinâmicos se o valor estiver correto
    estilizarInputCorreto(telefoneInput, telefoneHelper);
    inputsCorretos.telefone = true;
  }
});

const handlePhone = (event) => {
  let input = event.target;
  input.value = phoneMask(input.value);
};

const phoneMask = (value) => {
  if (!value) return " ";
  value = value.replace(/\D/g, "");
  value = value.replace(/(\d{2})(\d)/, "($1) $2");
  value = value.replace(/(\d)(\d{4})$/, "$1-$2");
  return value;
};

mostrarPopup(emailInput, emailLabel);

// Validar valor do input (email)

emailInput.addEventListener("change", (e) => {
  let valor = e.target.value;

  if (valor.includes("@") && valor.includes(".com")) {
    // Adicionar estilos dinâmicos se o valor estiver correto
    estilizarInputCorreto(emailInput, emailHelper);
    inputsCorretos.email = true;
  } else {
    // adicionar estilos dinâmicos se o valor tiver menos de 3 caracteres
    emailHelper.innerText = "Precisa inserir um e-mail válido";
    estilizarInputInCorreto(emailInput, emailHelper);
    inputsCorretos.email = false;
  }
});

mostrarPopup(assuntoInput, assuntoLabel);
// Validar valor do input (Assunto)

assuntoInput.addEventListener("change", (e) => {
  let valor = e.target.value;

  if (valor.length >= 30) {
    // Adicionar estilos dinâmicos se o valor tiver estiver dentro dos 30 caracteres
    assuntoHelper.innerText =
      "Por favor, o assunto deve ter no máximo 30 caracteres.";
    estilizarInputInCorreto(assuntoInput, assuntoHelper);
    inputsCorretos.assunto = false;
  } else if (valor.length < 10) {
    // Adicionar estilos dinâmicos se o valor tiver menos de 3 caracteres
    assuntoHelper.innerText =
      "Por favor, o assunto deve ter no mínimo 10 caracteres.";
    estilizarInputInCorreto(assuntoInput, assuntoHelper);
    inputsCorretos.assunto = false;
  } else {
    // Adicionar estilos dinâmicos se o valor estiver correto
    estilizarInputCorreto(assuntoInput, assuntoHelper);
    inputsCorretos.assunto = true;
  }
});

mostrarPopup(mensagemInput, mensagemLabel);
// Validar valor do input (Mensagem)

mensagemInput.addEventListener("change", (e) => {
  let valor = e.target.value;

  if (valor.length <= 50) {
    // Adicionar estilos dinâmicos se o valor estiver dentro dos 500 caracteres
    mensagemHelper.innerText =
      "Por favor, a mensagem deve ter no minimo 50 caracteres.";
    estilizarInputInCorreto(mensagemInput, mensagemHelper);
    inputsCorretos.mensagem = false;
  } else if (valor.length > 500) {
    // Adicionar estilos dinâmicos se o valor estiver dentro dos 500 caracteres
    mensagemHelper.innerText =
      "Por favor, a mensagem deve ter no máximo 500 caracteres.";
    estilizarInputInCorreto(mensagemInput, mensagemHelper);
    inputsCorretos.mensagem = false;
  } else {
    // Adicionar estilos dinâmicos se o valor estiver correto
    estilizarInputCorreto(mensagemInput, mensagemHelper);
    inputsCorretos.mensagem = true;
  }
});

/*----------- Evitar envio do Formulário-------------- */

let btnSubmit = document.querySelector('button[type="submit"]');
let inputsCorretos = {
  email: false,
  nome: false,
  assunto: false,
};

btnSubmit.addEventListener("click", (e) => {
  if (
    inputsCorretos.email == false ||
    inputsCorretos.nome == false ||
    inputsCorretos.telefone == false ||
    inputsCorretos.assunto == false ||
    inputsCorretos.mensagem == false
  ) {
    e.preventDefault();
    alert(" Por favor, preencha os campos obrigatórios.");
  } else {
    alert("formulário enviado com sucesso!");
  }
});
