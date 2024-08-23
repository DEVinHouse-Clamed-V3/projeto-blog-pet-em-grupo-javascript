console.log("entra no script");
const userCreate = (event) => {
  console.log("Entrou na função");
  // Previne que a página seja recarregada
  event.preventDefault();

  // Armazena em variáveis a os valores dos elementos informados no HTML
  const userName = document.getElementById("user-name").value;
  const userPhoto = document.getElementById("user-photo").value;
  const userEmail = document.getElementById("user-email").value;
  const userPassword = document.getElementById("user-password").value;
  const userPasswordConfirmation = document.getElementById(
    "user-password-confirmation"
  ).value;
  const userDescription = document.getElementById("user-description").value;

  //Verifica se os campos estão preenchidos, se não estiverem informa o usuário com uma mensagem no campo que não foi preenchido
  if (!userName) {
    document.getElementById("user-name-error").innerText =
      "Nome é obrigatório!";
  } else {
    document.getElementById("user-name-error").innerText = "";
  }
  if (!userPhoto) {
    document.getElementById("user-photo-error").innerText =
      "Uma foto é obrigatória!";
  } else {
    document.getElementById("user-photo-error").innerText = "";
  }
  if (!userEmail) {
    document.getElementById("user-email-error").innerText =
      "O e-mail é obrigatório!";
  } else {
    document.getElementById("user-email-error").innerText = "";
  }
  if (userPassword.length < 8 || userPassword.length > 16) {
    document.getElementById("user-password-error").innerText =
      "A senha é obrigatória e deve conter entre 8 e 16 caracteres!";
  } else {
    document.getElementById("user-password-error").innerText = "";
  }
  if (userPasswordConfirmation !== userPassword) {
    document.getElementById("user-password-confirmation-error").innerText =
      "As senhas digitas são diferentes!";
  } else {
    document.getElementById("user-password-confirmation-error").innerText = "";
  }
  if (!userDescription || userDescription.length > 300) {
    document.getElementById("user-description-error").innerText =
      "A descrição é obrigatória e pode ter no máximo 300 caracteres!";
  } else {
    document.getElementById("user-description-error").innerText = "";
  }

  // Verifica se todos os campos estão preenchidos e após a validação adiciona eles a um objeto user
  if (
    userName &&
    userPhoto &&
    userEmail &&
    userPassword &&
    userPasswordConfirmation &&
    userDescription
  ) {
    const user = {
      id: crypto.randomUUID(),
      nome: userName,
      foto: userPhoto,
      email: userEmail,
      senha: userPassword,
      biografia: userDescription,
    };

    // Pega os itens dos usuários no local storage, transforma de String para array e insere na localStorageList
    // Fazemos isso para recuperar o que já tem no localStorage, para não ficarmos zerando a lista
    const localStorageList = JSON.parse(localStorage.getItem("users")) || [];

    // Envia um objeto do tipo user que é o que estamos informando no momnento na tela, será enviado para o localStorageList
    localStorageList.push(user);

    // Salva no localStorage
    // JSON.stringify serve para transformar o objeto em String pois o local Storage só trabalha com String - NECESSÁRIO
    localStorage.setItem("users", JSON.stringify(localStorageList));

    // Reseta os campos do formulário após terem sido enviados
    document.getElementById("user-create-form").reset();

    document.getElementById("user-image").setAttribute("src", "");
  }
};

// Pega o evento de submissão do formulário e chama a função userCreate
document
  .getElementById("user-create-form")
  .addEventListener("submit", userCreate);

// Adiciona preview da imagem referente a url adicionada no campo do formulário correspondente e informa o usuário antes da submissão do formulário
document.getElementById("user-photo").addEventListener("input", function () {
  document.getElementById("user-image").setAttribute("src", this.value);
});

// Verifica se a senha digitada tem entre 8 e 16 caracteres
document
  .getElementById("user-password")
  .addEventListener("focusout", function () {
    const userPassword = document.getElementById("user-password").value;
    const validPassword =
      userPassword.length >= 8 && userPassword.length <= 16
        ? (document.getElementById("user-password-error").innerText = "")
        : (document.getElementById("user-password-error").innerText =
            "A senha deve conter entre 8 e 16 caracteres.");
  });

// Verifica se a senha digitada na confirmação é igual a senha digitada no campo senha e informa o usuário antes da submissão do formulário
document
  .getElementById("user-password-confirmation")
  .addEventListener("focusout", function () {
    const samePassword =
      document.getElementById("user-password").value ===
      document.getElementById("user-password-confirmation").value
        ? (document.getElementById(
            "user-password-confirmation-error"
          ).innerText = "")
        : (document.getElementById(
            "user-password-confirmation-error"
          ).innerText = "As senhas digitas são diferentes.");
  });

//Verifica se o campo de descrição possui no máximo 300 caracteres informa o usuário antes da submissão do formulário
document
  .getElementById("user-description")
  .addEventListener("focusout", function () {
    const descriptionLength =
      document.getElementById("user-description").value.length;
    const validDescription =
      descriptionLength <= 300
        ? (document.getElementById("user-description-error").innerText = "")
        : (document.getElementById(
            "user-description-error"
          ).innerText = `A descrição pode ter no máximo 300 caracteres. Caracteres digitados: ${descriptionLength}`);
  });
