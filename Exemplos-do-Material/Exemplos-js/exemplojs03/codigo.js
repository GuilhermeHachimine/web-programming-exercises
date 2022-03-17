function random(number) {
    return Math.floor(Math.random() * number);
}

function gerarCor() {
    var corRand = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    return corRand;
}

let mudaFundo = function (e) {
    e.target.style.backgroundColor = gerarCor();
};

let divs = document.querySelectorAll('div');

for (let i = 0; i < divs.length; i++) {
    divs[i].addEventListener('mouseover', mudaFundo);
}
