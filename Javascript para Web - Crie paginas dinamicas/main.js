const teclas = document.querySelectorAll('.tecla')

teclas.forEach (element => {
    element.onclick = function () {
        tocar('#som_' + element.classList[1]);
    }

    element.onkeydown = function (evento) {
        if (evento.code == 'Enter' || evento.code == 'Space') {
            element.classList.add('ativa');
        }
    }

    element.onkeyup = function () {
        element.classList.remove('ativa');
    }
});

function tocar (idElemento) {
    const elemento = document.querySelector(idElemento);
    if (elemento && elemento.localName == 'audio'){
        elemento.currentTime = 0;
        elemento.play();
    }
    else {
        console.log ("Elemento de áudio não encontrado.");
    }
};