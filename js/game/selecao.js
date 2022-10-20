// Botao de Poder

const btn1 = document.querySelector('.btn1');

// body

const body = document.querySelector('body');

// Imagens grandes dos jogadores

const imgPer1 = document.getElementById('imgPer1');
const imgPer2 = document.getElementById('imgPer2');

// Imagens pequenas dos jogadores

const reacaoPer1 = document.getElementById('reacaoPer1');
const reacaoPer2 = document.getElementById('reacaoPer2');

// Verificadores

var verificaPer;
var verificaJogador;

// Audio
const audio = document.getElementById('audio');

// Emojis

var emoji;

// Dados Ultimate

const divisor = 3;
var somaUlt1 = 0;
var somaUlt2 = 0;

let start;


// Caso Selecione o personagem 1

if (data.per == "per1") {
    imgPer1.setAttribute("src", "css/image/dragao.gif")
    imgPer2.setAttribute("src", "css/image/pato.gif")

    imgPer2.style.width="275px"
    imgPer2.style.height="450px"

    reacaoPer1.setAttribute("src", "css/image/rostoDragao.gif")
    reacaoPer2.setAttribute("src", "css/image/rostoPato.gif")

    verificaPer = true;
    emoji = "🔥"
    btn1.innerHTML = emoji;

    // Seus dados

    var nomeYou = magnusDraco.nome;
    var vida1 = magnusDraco.vida;
    var vidatotal1 = magnusDraco.vida;
    var vida25_1 = 489;

    var golpe1 = magnusDraco.golpe1.ataque;
    var golpe2 = magnusDraco.golpe2.ataque;
    var golpe3 = magnusDraco.golpe3.ataque;
    var golpe4 = magnusDraco.golpe4.ataque;

    var dano1 = magnusDraco.golpe1.damage;
    var dano2 = magnusDraco.golpe2.damage;
    var dano3 = magnusDraco.golpe3.damage;
    var dano4 = magnusDraco.golpe4.damage;

    var taxa1 = magnusDraco.golpe1.taxa;
    var taxa2 = magnusDraco.golpe2.taxa;
    var taxa3 = magnusDraco.golpe3.taxa;
    var taxa4 = magnusDraco.golpe4.taxa;

    var ultNome1 = magnusDraco.ult.ataque;
    var ultDano1 = magnusDraco.ult.damage;
    var ultTotal1 = magnusDraco.ult.total;

    // Dados dele

    var nomeHe = mrMartino.nome;
    var vida2 = mrMartino.vida;
    var vidatotal2 = mrMartino.vida;
    var vida25_2 = 336;

    var dano1_2 = mrMartino.golpe1.damage;
    var dano2_2 = mrMartino.golpe2.damage;
    var dano3_2 = mrMartino.golpe3.damage;
    var dano4_2 = mrMartino.golpe4.damage;

    var ultDano1_2 = mrMartino.ult.damage;
    var ultTotal1_2 = mrMartino.ult.total;

    
}

// Caso Selecione o personagem 2

else {
    imgPer1.setAttribute("src", "css/image/pato.gif")
    imgPer2.setAttribute("src", "css/image/dragao.gif")
    imgPer1.style.width="275px"
    imgPer1.style.height="450px"
    reacaoPer2.setAttribute("src", "css/image/rostoDragao.gif")
    reacaoPer1.setAttribute("src", "css/image/rostoPato.gif")

    verificaPer = false;
    emoji = "🔫"
    btn1.innerHTML = emoji;

     // Seus dados

    var nomeYou = mrMartino.nome;
    var vida1 = mrMartino.vida;
    var vidatotal1 = mrMartino.vida;
    var vida25_1 = 336;

    var golpe1 = mrMartino.golpe1.ataque;
    var golpe2 = mrMartino.golpe2.ataque;
    var golpe3 = mrMartino.golpe3.ataque;
    var golpe4 = mrMartino.golpe4.ataque;

    var dano1 = mrMartino.golpe1.damage;
    var dano2 = mrMartino.golpe2.damage;
    var dano3 = mrMartino.golpe3.damage;
    var dano4 = mrMartino.golpe4.damage;

    var taxa1 = mrMartino.golpe1.taxa;
    var taxa2 = mrMartino.golpe2.taxa;
    var taxa3 = mrMartino.golpe3.taxa;
    var taxa4 = mrMartino.golpe4.taxa;

    var ultNome1 = mrMartino.ult.ataque;
    var ultDano1 = mrMartino.ult.damage;
    var ultTotal1 = mrMartino.ult.total;

     // Dados dele

    var nomeHe = magnusDraco.nome;
    var vida2 = magnusDraco.vida;
    var vidatotal2 = magnusDraco.vida;
    var vida25_2 = 489;
    

    var dano1_2 = magnusDraco.golpe1.damage;
    var dano2_2 = magnusDraco.golpe2.damage;
    var dano3_2 = magnusDraco.golpe3.damage;
    var dano4_2 = magnusDraco.golpe4.damage;

    var ultDano1_2 = magnusDraco.ult.damage;
    var ultTotal1_2 = magnusDraco.ult.total;

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

    setInterval(function () {
        body.style.backgroundImage = "url('css/image/cenario4_2.gif')";

        setTimeout(function () {
            body.style.backgroundImage = "url('css/image/cenario4_1.gif')";
        }, 15000)
    }, 30000)
};

// Objeto de falas

const falas = {
    magnusDraco: {
        desviou: `Magnus Draco desviou`,

        golpes1: {
            fala1: `Magnus Draco usou Machadada Letal`,
            fala2: `Magnus Draco usou Machadada Letal critico!!!`
        },

        golpes2: {
            fala1: `Magnus Draco usou Corte aéreo`,
            fala2: `Magnus Draco usou Corte aéreo critico!!!`
            
        },

        golpes3: {
            fala1: `Magnus Draco usou Cabeçada`,
            fala2: `Magnus Draco usou Cabeçada critico!!!`
        },

        golpes4: {
            fala1: `Magnus Draco usou Mordida`,
            fala2: `Magnus Draco usou Mordida critico!!!`
        },

        ult: {
            fala1: `Magnus Draco ultou`,
            fala2: `TA PEGANDO FOGO BICHO!!!`
        }
    },

    mrMartino: {
        desviou: `Mr. Martino desviou`,

        golpes1: {
            fala1: `Mr. Martino usou Chuva de tiros`,
            fala2: `Mr. Martino usou Chuva de tiros critico!!!`
        },

        golpes2: {
            fala1: `Mr. Martino usou Neuralaser`,
            fala2: `Mr. Martino usou Neuralaser critico!!!`
        },

        golpes3: {
            fala1: `Mr. Martino usou Cartola Giratoria`,
            fala2: `Mr. Martino usou Cartola Giratoria critico!!!`
        },

        golpes4: {
            fala1: `Mr. Martino usou Mr. Time`,
            fala2: `Mr. Martino usou Mr. Time critico!!!`
        },

        ult: {
            fala1: `Mr. Martino ultou`,
            fala2: `HASTA LA VISTA, BABY`
        }
    }
}




