let botao = document.querySelector('button');

function random(numero) {
    return Math.floor(Math.random() * (numero + 1));
}

/*botao.onclick = function () {
    let corRand = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    document.body.style.backgroundColor = corRand;
};*/


/* Ou de outra forma */
function mudarFundo() {
    let corRand = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
	document.body.style.backgroundColor = corRand;
}

botao.addEventListener('click', mudarFundo);
