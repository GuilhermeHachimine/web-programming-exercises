/*  PARTE A  */
//let botoes = document.querySelectorAll('#botoes .delete');
//
//botoes.forEach(function(botao) {
//	botao.addEventListener('click', function(e) {
//		let li = e.target.parentElement;
//		li.parentElement.removeChild(li);
//	});
//});

/*  PARTE B  */

let lista = document.querySelector('#botoes');

lista.addEventListener('click', function(e) {
	if (e.target.className === 'delete') {
		let li = e.target.parentElement;
        //console.log(this);
		//this.removeChild(li);
		//lista.removeChild(li);  // tudo tá global
        li.parentElement.removeChild(li);
	}
});

