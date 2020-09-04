var deslocamentoX;
var deslocamentoY;
var px;
var py;
var velocidade;
var objeto;
var time;

function inicia() {
    deslocamentoX = 0;
    deslocamentoY = 0;
    px = 0;
    py = 0;
    velocidade = 5;
    objeto = document.getElementById('cabeca');
    document.addEventListener('keydown', teclaPressionada);
    document.addEventListener('keyup', teclaSolta);
    time = setInterval(enterFrame, 20);
    criarComida();
}

function teclaPressionada() {
    var tecla = event.keyCode;
    if (tecla == 37) {
        deslocamentoX = -1;
        objeto.style.transform = "rotate(-180deg)";
    } else if (tecla == 38) {
        deslocamentoY = -1
        objeto.style.transform = "rotate(-90deg)";
    } else if (tecla == 39) {
        deslocamentoX = +1;
        objeto.style.transform = "rotate(360deg)";
    } else if (tecla == 40) {
        deslocamentoY = +1;
        objeto.style.transform = "rotate(90deg)";
    }
}

function teclaSolta() {
    let tecla = event.keyCode;
    if (tecla == 37) {
        deslocamentoX = 0;
    } else if (tecla == 38) {
        deslocamentoY = 0;
    } else if (tecla == 39) {
        deslocamentoX = 0;
    } else if (tecla == 40) {
        deslocamentoY = 0;
    }
}

function enterFrame() {
    px += deslocamentoX * velocidade;
    py += deslocamentoY * velocidade;

    objeto.style.left = px + "px";
    objeto.style.top = py + "px";
}

var comida1 = document.getElementById('comida');
var cabeca = document.getElementById('cabeca');

function criarComida() {
    var comida = document.createElement('div');
    comida.style.position = "absolute";
    comida.style.left = Math.random() * 1300 + "px";
    comida.style.top = Math.random() * 600 + "px";
    comida.style.backgroundImage = "url(css/imgs/comida.png)";
    comida.style.width = "50px";
    comida.style.height = "50px";
    comida1.appendChild(comida);
    // comida.addEventListener('click', function() {
    //     comida1.removeChild(comida);
    //     setTimeout(criarComida, 1000);
    // });

    var a = 1;
    var v;
    comida.addEventListener("click", function() {
        if (a >= 0) {
            comida1.removeChild(comida);
            setTimeout(criarComida, 1000);
            v = v + 1;
            score(v);
        }



    });
}


function score(c) {
    var score = document.getElementById('score');
    texto = document.createTextNode(c);
    score.appendChild(texto);
    c++;
}


window.addEventListener('load', inicia);