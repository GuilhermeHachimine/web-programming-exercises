let form = document.querySelector('form');
let nome = document.querySelector('#nome');
let sobrenome = document.querySelector('#sobrenome');
let submit = document.querySelector('#submit');
let mensagem = document.querySelector('#mensagem');

form.addEventListener('submit', function (e) {
    if (nome.value === '' || sobrenome.value === '') {
        e.preventDefault();
        mensagem.textContent = 'Você deve preencher nome e sobrenome!';
    }
});
