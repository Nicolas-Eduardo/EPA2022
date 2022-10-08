const body = document.querySelector('body');
const imgPer1 = document.getElementById('imgPer1');
const imgPer2 = document.getElementById('imgPer2');
const reacaoPer1 = document.getElementById('reacaoPer1');
const reacaoPer2 = document.getElementById('reacaoPer2');
var x = 1;
const audio = document.getElementById('audio');

if (data.per == "per1") {
    imgPer1.setAttribute("src", "css/image/patoFrente.gif")
    imgPer2.setAttribute("src", "css/image/patoCosta.gif")

    reacaoPer1.setAttribute("src", "css/image/patoFrente.gif")
    reacaoPer2.setAttribute("src", "css/image/patoCosta.gif")

    var vida = magnusDraco[0];
    
    var golpe1 = magnusDraco[1].ataque;
    var golpe2 = magnusDraco[2].ataque;
    var golpe3= magnusDraco[3].ataque;
    var golpe4 = magnusDraco[4].ataque;
    var ult1 = magnusDraco[5].ataque;

    var dano1 = magnusDraco[1].damage;
    var dano2 = magnusDraco[2].damage;
    var dano3= magnusDraco[3].damage;
    var dano4 = magnusDraco[4].damage;
    var ult2 = magnusDraco[5].damage;
    console.log(golpe1)
}
else {
    imgPer1.setAttribute("src", "css/image/patoCosta.gif")
    imgPer2.setAttribute("src", "css/image/patoFrente.gif")
    reacaoPer2.setAttribute("src", "css/image/patoFrente.gif")
    reacaoPer1.setAttribute("src", "css/image/patoCosta.gif")
    var vida = mrMartino[0];
    
    var golpe1 = mrMartino[1].ataque;
    var golpe2 = mrMartino[2].ataque;
    var golpe3= mrMartino[3].ataque;
    var golpe4 = mrMartino[4].ataque;
    var ult1 = mrMartino[5].ataque;

    var dano1 = mrMartino[1].damage;
    var dano2 = mrMartino[2].damage;
    var dano3= mrMartino[3].damage;
    var dano4 = mrMartino[4].damage;
    var ult2 = mrMartino[5].damage;
}

if (data.cenario == "cenario1") {
    body.style.backgroundImage = "url('css/image/cenario1.gif')";
    audio.setAttribute('src', 'files/Desert.mp3');
}
else if (data.cenario == "cenario2") {
    body.style.backgroundImage = "url('css/image/cenario2.gif')";
    audio.setAttribute('src', 'files/Airport.mp3');
}
else {
    body.style.backgroundImage = "url('css/image/cenario4_1.gif')";
    audio.setAttribute('src', 'files/Space Ship.mp3');

    setInterval(function(){
        body.style.backgroundImage = "url('css/image/cenario4_2.gif')";

        setTimeout(function(){
            body.style.backgroundImage = "url('css/image/cenario4_1.gif')";
        }, 30000)
    }, 30000)
};




