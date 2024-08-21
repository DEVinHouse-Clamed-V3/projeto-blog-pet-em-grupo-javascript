    
        localStorage.setItem('email', '');
        localStorage.setItem('password', '');

       
        document.getElementById('loginForm').addEventListener('submit', function(event) {
            event.preventDefault(); 

     
            const emailInput = document.getElementById('email').value;
            const passwordInput = document.getElementById('password').value;

            const storedEmail = localStorage.getItem('email');
            const storedPassword = localStorage.getItem('password');

        
            if(emailInput === storedEmail && passwordInput === storedPassword) {
                alert('Login realizado com sucesso!');
             
                window.location.href = 'index.html';
            } else {
                alert('E-mail ou senha incorretos.');
        }})