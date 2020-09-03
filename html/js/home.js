//Mudar Layout
function layout() {
    let obj = document.querySelector('body');
    let hex = '0123456789ABCDEF';
    let cor = '#';

    for (let i = 0; i < 6; i++) {
        cor += hex[Math.floor(Math.random() * 16)]
    }

    obj.style.backgroundColor = cor;
}

//Aumentar e diminuir o tamanho das letras
var bt1 = document.getElementById('b2');
var bt2 = document.getElementById('b3');
var p = document.getElementById('p');
var p1 = document.getElementById('p1');

var fontSize = 100;
var alterar = 10;

function maior() {
    bt1.addEventListener('click', function() {
        fontSize += alterar;
        p.style.fontSize = fontSize + '%';
        p1.style.fontSize = fontSize + '%';
    });
}

function menor() {
    bt2.addEventListener('click', function() {
        fontSize -= alterar;
        p.style.fontSize = fontSize + '%';
        p1.style.fontSize = fontSize + '%';
    });
}
bt1.click = maior();
bt2.click = menor();

//Criando link para pagina dos jogos
var jg1 = document.getElementById('jogo1');
var jg2 = document.getElementById('jogo2');
var jg3 = document.getElementById('jogo3');

jg1.addEventListener('click', function() {
    return location.href = 'jogo1.html'
});
jg2.addEventListener('click', function() {
    return location.href = 'jogo2.html'
});
jg3.addEventListener('click', function() {
    return location.href = 'jogo3.html'
});

var imgs = [];
var slider;
var imgAtual;
var maxImg;
var tmp;
var trocaSlide;
var vTempo;
var vBarra;

function preCarregamento() {
    var s = 1;
    let i;
    for (i = 0; i < 5; i++) {
        imgs[i] = new Image();
        imgs[i].src = "js/imgs2/j" + s + ".jpg";
        s++
    }
}

function carregaImg(img) {
    slider.style.backgroundImage = "url('" + imgs[img].src + "')";
}

function inicia() {
    preCarregamento();
    imgAtual = 0;
    vBarra = document.getElementById('dvBarra');
    maxImg = imgs.length - 1;
    trocaSlide = 0;
    slider = document.getElementById('slider');
    carregaImg(imgAtual);
    anima();
}

function troca(dir) {
    trocaSlide = 0;
    imgAtual += dir;
    if (imgAtual > maxImg) {
        imgAtual = 0;
    } else if (imgAtual < 0) {
        imgAtual = maxImg;
    }
    carregaImg(imgAtual);
}

function anima() {
    trocaSlide++;
    if (trocaSlide >= 500) {
        trocaSlide = 0;
        troca(1);
    }
    vTempo = trocaSlide / 5;
    vBarra.style.width = vTempo + "%";
    window.requestAnimationFrame(anima);
}
window.addEventListener('load', inicia);