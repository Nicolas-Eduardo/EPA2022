

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



// Dados jogador 1

dados1 = {
    nome: "Magnus Draco",
    vida: 1956
}

golpe1_1 = {
    ataque: "Machadada Letal",
    damage: 178
}

golpe1_2 = {
    ataque: "Mordida",
    damage: 68
}

golpe1_3 = {
    ataque: "Corte Aéreo",
    damage: 145
}

golpe1_4 = {
    ataque: "Cabeçada",
    damage: 98
}

ult1 = {
    ataque: "Ta pegando fogo bicho",
    damage: 254
}

// Dados jogador 2

dados2 = {
    nome: "Mr. Martino",
    vida: 1346
}

golpe2_1 = {
    ataque: "Neuralaser",
    damage: 197
}

golpe2_2 = {
    ataque: "Chuva de Tiros",
    damage: 236
}

golpe2_3 = {
    ataque: "Mr.Time",
    damage: 140
}

golpe2_4 = {
    ataque: "Cartola Giratoria",
    damage: 172
}

ult2 = {
    ataque: "Hasta la vista, baby",
    damage: 418
}

// Array de objetos dos golpe do jogador 1

const magnusDraco = [dados1, golpe1_1, golpe1_2, golpe1_3, golpe1_4, ult1];

// Array de objetos dos golpe do jogador 2

const mrMartino = [dados2, golpe2_1, golpe2_2, golpe2_3, golpe2_4, ult2];

