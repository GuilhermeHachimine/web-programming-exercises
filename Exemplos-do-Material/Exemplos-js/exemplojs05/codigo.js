let botao = document.querySelector('button');
let videoBox = document.querySelector('div');
let video = document.querySelector('video');

botao.addEventListener('click', function () {
    videoBox.setAttribute('class', 'showing');
});

videoBox.addEventListener('click', function () {
    videoBox.setAttribute('class', 'hidden');
    video.pause();
});

video.addEventListener('click', function (e) {
    e.stopPropagation();
    video.play();
});
