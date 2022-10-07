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

    const vida = magnusDraco[0];
    
    const golpe1 = magnusDraco[1].ataque;
    const golpe2 = magnusDraco[2].ataque;
    const golpe3= magnusDraco[3].ataque;
    const golpe4 = magnusDraco[4].ataque;
    const ult1 = magnusDraco[5].ataque;

    const dano1 = magnusDraco[1].damage;
    const dano2 = magnusDraco[2].damage;
    const dano3= magnusDraco[3].damage;
    const dano4 = magnusDraco[4].damage;
    const ult2 = magnusDraco[5].damage;
}
else {
    imgPer1.setAttribute("src", "css/image/fteste2.png")
    imgPer2.setAttribute("src", "css/image/fteste1.png")
    reacaoPer2.setAttribute("src", "css/image/pteste1.webp")
    reacaoPer1.setAttribute("src", "css/image/pteste2.png")

    const vida = mrMartino[0];
    
    const golpe1 = mrMartino[1].ataque;
    const golpe2 = mrMartino[2].ataque;
    const golpe3= mrMartino[3].ataque;
    const golpe4 = mrMartino[4].ataque;
    const ult1 = mrMartino[5].ataque;

    const dano1 = mrMartino[1].damage;
    const dano2 = mrMartino[2].damage;
    const dano3= mrMartino[3].damage;
    const dano4 = mrMartino[4].damage;
    const ult2 = mrMartino[5].damage;
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




