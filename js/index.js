const index = true;
const jogo = false;

const table = document.querySelector('table');

setInterval(function(){
    table.style.outline = "3px dashed #EE0CF2"

    setTimeout(function(){
        table.style.outline = "";
    }, 500)
}, 1000)

