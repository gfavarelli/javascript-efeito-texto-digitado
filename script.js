const textoElemento = document.getElementById('texto');
const texto = '"A camara secreta foi aberta..."';
let idx = 1;
let idxDragao = 1;
let velocidade = 300 / 1;

escreverTexto();
apresentarDragao();

function escreverTexto() {
    textoElemento.innerText = texto.slice(0, idx);
    idx++;

    if(idx > texto.length) {
        idx = 1;
    }

    setTimeout(escreverTexto, velocidade);
}

function apresentarDragao() {
    const divDragao = document.querySelector('.dragao');
    const img = divDragao.querySelector('img');
    idxDragao++;

    if (idxDragao < 10) {
        img.style.opacity = idxDragao / 10;
    } 

    if(idxDragao === 10) {
        img.style.opacity = 0;
        idxDragao = 0;
    }
    setTimeout(apresentarDragao, velocidade);
}