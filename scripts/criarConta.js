const userCreate = (event) => {
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
    document.getElementById("user-create").reset();

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
    if (!userPassword) {
      document.getElementById("user-password-error").innerText =
        "A senha é obrigatória!";
    } else {
      document.getElementById("user-password-error").innerText = "";
    }
    if (!userPasswordConfirmation) {
      document.getElementById("user-password-confirmation-error").innerText =
        "A confirmação da senha é obrigatória!";
    } else {
      document.getElementById("user-password-confirmation-error").innerText =
        "";
    }
    if (!userDescription) {
      document.getElementById("user-description-error").innerText =
        "A descrição é obrigatória!";
    } else {
      document.getElementById("user-description-error").innerText = "";
    }
  }
};

document
  .getElementById("user-create-form")
  .addEventListener("submit", userCreate);
