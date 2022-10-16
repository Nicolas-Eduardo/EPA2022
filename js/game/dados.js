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
        damage: 1346
    },
    golpe2: {
        ataque: "Mordida",
        damage: 68
    },
    golpe3: {
        ataque: "Corte Aéreo",
        damage: 145
    },
    golpe4: {
        ataque: "Cabeçada",
        damage: 98
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
        ataque: "Neuralaser",
        damage: 197
    },
    golpe2: {
        ataque: "Chuva de Tiros",
        damage: 236
    },
    golpe3: {
        ataque: "Mr.Time",
        damage: 140
    },
    golpe4: {
        ataque: "Cartola Giratoria",
        damage: 172
    },
    ult: {
        ataque: "Hasta la vista, baby",
        damage: 418,
        total: 200
    }
}

