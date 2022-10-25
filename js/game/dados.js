const index = false;
const jogo = true;

var query = location.search.slice(1);
var partes = query.split('&');
var data = {};
partes.forEach(function (parte) {
    var chaveValor = parte.split('=');
    var chave = chaveValor[0];
    var valor = chaveValor[1];
    data[chave] = valor;
});

if (partes.length != 2) {
    window.location.href = "selecao.html";
}

// Dados Magnus Draco

const magnusDraco = {
    nome: "Magnus Draco",
    vida: 1956,
    golpe1: {
        ataque: "Machadada Letal",
        damage: 178,
        taxa:'30%'
    },
    golpe2: {
        ataque: "Corte Aéreo",
        damage: 145,
        taxa: '50%'
    },
    golpe3: {
        ataque: "Cabeçada",
        damage: 98,
        taxa: '70%'
    },
    golpe4: {
        ataque: "Mordida",
        // damage: 68,
        damage: 1346,
        taxa:  '80%'
    },
    ult: {
        ataque: "Ta pegando fogo bicho",
        damage: 254,
        total: 300
    }
}

// Dados Mr. Martino

const mrMartino = {
    nome: "Mr. Martino",
    vida: 1346,
    golpe1: {
        ataque: "Chuva de Tiros",
        damage: 236,
        taxa:'30%'
        
    },
    golpe2: {
        ataque: "Neuralaser",
        damage: 197,
        taxa: '50%'
    },
    golpe3: {
        ataque: "Cartola Giratoria",
        damage: 172,
        taxa: '70%'
        
    },
    golpe4: {
        ataque: "Mr.Time",
        damage: 140,
        taxa: '80%'
    },
    ult: {
        ataque: "Hasta la vista, baby",
        damage: 418,
        total: 200
    }
}

