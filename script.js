const navbar = document.getElementById('navbar');
const header = document.getElementById('btn');
const close = document.getElementById('close');

if(header) {
    header.addEventListener('click', () => {
        navbar.classList.add('active');
    });
};

if(close) {
    close.addEventListener('click', () => {
        navbar.classList.remove('active');
    });
};