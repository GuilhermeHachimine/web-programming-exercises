window.addEventListener('load', function() {
//    let d = new Date();
//    let valor = d.getTime();
//    
//    function atualiza() {
//        let span = document.getElementsByTagName('span')[0];
//        console.log("aqui", span);
//        valor++;
//        span.textContent = valor;
//    }
//    
//    let relogio = setInterval(atualiza, 1000);
    
    function checkTime(i) {
        return (i < 10) ? "0" + i : i;
    }
    
    function startTime() {
        var today = new Date(),
            h = checkTime(today.getHours()),
            m = checkTime(today.getMinutes()),
            s = checkTime(today.getSeconds());
        document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
        t = setTimeout(function () {
            startTime()
        }, 500);
    }
    
    startTime();
});