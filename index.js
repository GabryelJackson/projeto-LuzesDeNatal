const circulo = document.getElementsByClassName('circulo');
const ligar = document.getElementById('ligar');
const desligar = document.getElementById('desligar');
const botaoEnviar = document.getElementById('enviar');
const titulo = document.getElementById('titulo');
let largura = circulo.length;

const on = function() {
    for(let i = 0; i < largura; i++) {
        circulo[i].removeAttribute("style");
        circulo[i].style.animationPlayState = "running";
        circulo[i].style.WebkitAnimationPlayState = "running";
    }
}

const off = function() {
    titulo.style.animation = "none";

    for(let i = 0; i < largura; i++) {
        circulo[i].style.animation = "none";
        circulo[i].style.background = "#9cc4e44d";
    }
}

function converter() {
    let velocidade = document.getElementById('quantidade').value;
    for(let i = 0; i < largura; i++) {
        circulo[i]. style.animationDuration = velocidade + "s";
    }
}

ligar.addEventListener('click', on);
desligar.addEventListener('click', off);