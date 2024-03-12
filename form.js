document.addEventListener('DOMContentLoaded', () => {

    const form = document.getElementById('form-auth');
    
    form.addEventListener('submit', (event) => {
        
        event.preventDefault();
        
        const us = document.getElementById('us').value;
        const pw = document.getElementById('pw').value;
        if (!us || !pw) {
            alertify.error('Es requerido los datos de usuario y clave');
            return
        }

        const headers = new Headers();
        headers.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "us": us,
            "pw": pw
        });

        const requestOptions = {
            method: "POST",
            headers: headers,
            body: raw,
            redirect: "follow"
        };

        fetch("http://msvc-auth:8002/auth-prinx/auth", requestOptions)
            .then((response) => response.text())
            .then((result) => {

                if (result) {

                    const user = JSON.parse(result)

                    if (Object.entries(user).some(([key, value]) => key === 'ERROR')) {
                        alertify.error(user.ERROR)
                        return
                    }

                    if (user.auth === 'ok') {
                        localStorage.setItem('auth', "ok")
                        window.location.href = 'chatbot.html';
                    }

                }
            }).catch((error) => alertify.error('Usuario o clave invalida'));
    });
});
