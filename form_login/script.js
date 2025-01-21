// ---------- VALIDAÇÃO E-MAIL & SENHA ---------- //
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

/* Validação de Senha */
let senhaInput = document.getElementById("senha");
let senhaLabel = document.querySelector('label[for="senha"]');
let senhaHelper = document.getElementById("senha-helper");

mostrarPopup(senhaInput, senhaLabel);

senhaInput.addEventListener("blur", (e) => {
  let valor = e.target.value;
  if (valor == "") {
    senhaHelper.innerText = "O campo senha deve ser preenchido.";
    estilizarInputInCorreto(senhaInput, senhaHelper);
    inputsCorretos.senha = false;
  } else if (valor.length < 6) {
    senhaHelper.innerText =
      "Favor, preencher a senha com o mínimo de 6 caracteres.";
    estilizarInputInCorreto(senhaInput, senhaHelper);
    inputsCorretos.senha = false;
  } else {
    estilizarInputCorreto(senhaInput, senhaHelper);
    inputsCorretos.senha = true;
  }
});

/*----------- Evitar envio do Formulário-------------- */

let btnSubmit = document.querySelector('button[type="submit"]');
let inputsCorretos = {
  email: false,
  senha: false,
};

btnSubmit.addEventListener("click", (e) => {
  if (inputsCorretos.email == false || inputsCorretos.senha == false) {
    e.preventDefault();
    alert(" Por favor, preencha os campos obrigatórios.");
  } else {
    alert("formulário enviado com sucesso!");
  }
});
