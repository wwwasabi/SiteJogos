var imagem = document.getElementById('imagem');
var geraImg = document.getElementById('gerar');
var deletaImg = document.getElementById('deletar');

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    r = Math.floor(Math.random() * (max - min)) + min;
    return r;
}

geraImg.onclick = function() {
    let s = getRandomInt(1, 7);
    imagem.style.backgroundImage = "url(js/imgs2/a" + s + ".png)";
    imagem.style.backgroundSize = "cover";
}

deletaImg.onclick = function() {
    imagem.style.backgroundImage = "url()";
}