document.addEventListener('DOMContentLoaded', () => {

    const form = document.getElementById('form-auth');
    
    form.addEventListener('submit', (event) => {
        
        event.preventDefault();
        
        const us = document.getElementById('us').value;
        const pw = document.getElementById('pw').value;
        
        if (us === 'smartcalidad' && pw === 'temporal') {
            localStorage.setItem('auth', "ok");
            window.location.href = 'chatbot.html';
        } else {
            alertify.error('Usuario o contraseña incorrectos');
        }
    });
});
