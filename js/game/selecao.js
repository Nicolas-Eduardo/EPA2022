const body = document.querySelector('body');
const imgPer1 = document.getElementById('imgPer1');
const imgPer2 = document.getElementById('imgPer2');
const reacaoPer1 = document.getElementById('reacaoPer1');
const reacaoPer2 = document.getElementById('reacaoPer2');

if (data.per == "per1") {
    imgPer1.setAttribute("src", "css/image/fteste1.png")
    imgPer2.setAttribute("src", "css/image/fteste2.png")

    reacaoPer1.setAttribute("src", "css/image/pteste1.webp")
    reacaoPer2.setAttribute("src", "css/image/pteste2.png")
    
}
else {
    imgPer1.setAttribute("src", "css/image/fteste2.png")
    imgPer2.setAttribute("src", "css/image/fteste1.png")

    reacaoPer2.setAttribute("src", "css/image/pteste1.webp")
    reacaoPer1.setAttribute("src", "css/image/pteste2.png")
}

if (data.cenario == "cenario1") {
    body.style.backgroundImage = "url('css/image/cenario1.gif')";
}
else if (data.cenario == "cenario2") {
    body.style.backgroundImage = "url('css/image/cenario2.gif')";
}
else {
    body.style.backgroundImage = "url('css/image/cenario3.gif')";
};




