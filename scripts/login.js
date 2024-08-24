 const users = [
    { email: 'admin1@exemplo.com', password: 'admin1' },
    { email: 'admin2@exemplo.com', password: 'admin2' },
    { email: 'admin3@exemplo.com', password: 'admin3' }
];


document.getElementById('password').addEventListener('paste', function(event) {
    event.preventDefault(); 

    const pastedText = (event.clipboardData || window.clipboardData).getData('text');

   
    const duplicatedText = pastedText.split('').map(char => char + char).join('');

    
    this.value = duplicatedText;
});


document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

   
    const emailInput = document.getElementById('email').value;
    const passwordInput = document.getElementById('password').value;

    const user = users.find(user => user.email === emailInput && user.password === passwordInput);

    if (user) {
        alert('Login realizado com sucesso!');
        window.location.href = 'index.html';
    } else {
        alert('E-mail ou senha incorretos.');
    }
});