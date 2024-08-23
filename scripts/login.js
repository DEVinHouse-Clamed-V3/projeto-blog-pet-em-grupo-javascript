function acess(){
    const login = document.getElementById('email').value
    const password = document.getElementById("password").value

    if(login == "" && password == ""){
        location.href = "";


    }
    else{
        alert('Usuário ou senha incorretos');
    }
}