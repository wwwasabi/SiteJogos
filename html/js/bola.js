var bola = document.getElementById("bola");
var count = 0;

function inicia() {
    criaBola();
    fim(count);
}

function criaBola() {
    var bolinha = document.createElement('div');
    bolinha.style.position = 'absolute';
    bolinha.style.left = Math.random() * 1250 + "px";
    bolinha.style.top = Math.random() * 550 + "px";
    bolinha.style.width = 100;
    bolinha.style.height = 100;
    bolinha.style.backgroundColor = 'e7f07f';
    bolinha.style.borderRadius = '50px';

    bolinha.addEventListener('click', function() {
        bola.removeChild(bolinha);
        inicia();
        count++;
        score(count);
    });

    setTimeout(() => {
        bola.removeChild(bolinha);
        criaBola();
    }, 1000);

    bola.appendChild(bolinha);
}

function score(a) {
    var score = document.getElementById('score');
    texto = document.createTextNode(a);
    score.appendChild(texto);
}

function fim(a) {
    if (a >= 10) {
        alert("Fim do jogo!");
    }
}

window.addEventListener('load', inicia);