window.addEventListener('load', function() {
    let caixa = document.querySelector('#checkbox');
    let lista = document.querySelector('ul');

    caixa.addEventListener('change', function(e) {
        if(caixa.checked) {
            lista.style.display = 'none';	
        } else {
            lista.style.display = 'block';
        }
    });
});

