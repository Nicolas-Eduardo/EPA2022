//  Porcentagem do width baseado na vida dos jogadores

var porcentagem;

// Numero randomico da chance de jogada

var z;

// Div do select

const select = document.getElementById('select');

// Caixa de mensagens;

const alerta = document.querySelector('.alerta');
const message = document.getElementById('message');

// Barra de Vida

const bar1 = document.querySelector('.bar1');
const bar2 = document.querySelector('.bar2');

// Qtd de Vida

const life1 = document.getElementById('life1');
const life2 = document.getElementById('life2');

// Qtd de Poder

const power1 = document.querySelector('.power1');
const power2 = document.querySelector('.power2');

// Nome dos Golpes

const g1 = document.getElementById('g1');
const g2 = document.getElementById('g2');
const g3 = document.getElementById('g3');
const g4 = document.getElementById('g4');

// Qtd de Dano

const d1 = document.getElementById('d1');
const d2 = document.getElementById('d2');
const d3 = document.getElementById('d3');
const d4 = document.getElementById('d4');

// Cronometro

const cronometro = document.getElementById('cronometro');
var contCronometro = 0

// Dano aumentado

var danoCritico;

// funções

// Funções do cronometro 
// Mestre cronometro
function cronometragem() {
    start = setInterval(() => { subirTempo(); }, 1000);
}

// Rodar o tempo
function subirTempo() {
    contCronometro++;
    cronometro.innerHTML = `TIME: ${contCronometro}s`
}

// Parar o tempo
function pararTempo() {
    clearInterval(start)
}

// Funções que filtra a vida dos jogares

// jogador 1

function filtra1() {
    if (vida1 <= 0) {
        vida1 = 0;
    }
}

// jogador 2

function filtra2() {
    if (vida2 <= 0) {
        vida2 = 0;
    }
}

// Função para gerar a ult

function ultimate(dano, jogador) {
    if (jogador == 1) {
        somaUlt2 += dano / divisor;
    }
    else {
        somaUlt1 += dano / divisor;
    }
}

// Função para filtrar a ultimate

function filtrarUlt(jogador) {
    if (jogador == 1) {
        if (somaUlt1 >= ultTotal1) {
            somaUlt1 = ultTotal1;
        }
    }
    else {
        if (somaUlt2 >= ultTotal1_2) {
            somaUlt2 = ultTotal1_2;
        }
    }
}

// Função que escolhe o poder do inimigo

function golpeInimigo() {
    verificaJogador = true;
    if (somaUlt2 == ultTotal1_2) {
        ult(0);
    }
    else {
        let golpeInimigo = Math.floor(Math.random() * 4)
        switch (golpeInimigo) {
            case 0:
                golpear1(random(), 0)
                break;

            case 1:
                golpear2(random(), 0)
                break;

            case 2:
                golpear3(random(), 0)
                break;

            case 3:
                golpear4(random(), 0)
                break;
        }
    }
}

// Função que aumentará o dano

function danoCritico(dano) {
    let critico = Math.floor(Math.random() * 20 + 40);
    let danoCritico = dano + critico;
    return danoCritico;
}

// Função que atualiza o power

function atualizarPower() {
    power1.style.width = (porcentagemVida(ultTotal1, somaUlt1) + "%")
    power2.style.width = (porcentagemVida(ultTotal1_2, somaUlt2) + "%")
}

// função que atualiza as vidas

function atualizarVida() {
    life1.innerHTML = `${vida1}HP`;
    life2.innerHTML = `${vida2}HP`;
    bar1.style.width = (porcentagemVida(vidatotal1, vida1) + "%")
    bar2.style.width = (porcentagemVida(vidatotal2, vida2) + "%")

    if (vida1 <= vida25_1) {
        bar1.classList.remove('w3-green');
        bar1.classList.add('w3-red');
    }

    if (vida2 <= vida25_2) {
        bar2.classList.remove('w3-green');
        bar2.classList.add('w3-red');
    }
}

// Função para retornar porcentagem de vida dentro de 100% da atual

function porcentagemVida(x, y) {
    // x = valor total
    // y = valor atual

    porcentagem = y * 100 / x;
    return porcentagem.toFixed(0);
}

// Função para verificar se a partida acabou

function verificarPartida() {
    if (vida1 <= 0 || vida2 <= 0) {
        pararTempo();
    }
}

// função para fazer aparecer e desaparecer a caixa superior de texto em 3 segundos

function classEdit() {
    verificarPartida();
    alerta.style.opacity = "1";
    alerta.classList.remove('fade-out-top');
    alerta.classList.add('fade-in-top');

    setTimeout(function () {
        alerta.classList.remove('fade-in-top');
        alerta.classList.add('fade-out-top');

        setTimeout(function () {
            game();
        }, 1000)
    }, 2000)
}


// função para retornar um número entre 0 e 10

function random() {
    // z = número sorteado
    z = Math.floor(Math.random() * 10);
    return z;
}

// função que irá fazer o que cada golpe deve fazer (e também o começo de cada partida)

function escolher(op) {
    inative();

    switch (op) {
        case 1:
            golpear1(random(), 1);
            break;

        case 2:
            golpear2(random(), 1);
            break;

        case 3:
            golpear3(random(), 1);
            break;

        case 4:
            golpear4(random(), 1);
            break;
    }
}

// função que deixa a caixa de golpes como inativa, sem chance de escolher

function inative() {
    select.style.gridTemplateAreas = '"inative"';
    select.style.gridTemplateRows = '1fr';
    select.style.gridTemplateColumns = '1fr';
    select.innerHTML = `
    <div class="inative">
        <p">AGUARDE...</p>
    </div>`;
}

// função que deixa a caixa de golpes ativa, podendo escolher os golpes

function ative() {
    verificaJogador = false;
    atualizarVida();
    atualizarPower();
    select.style.gridTemplateAreas = '"op1 op2""op3 op4"';
    select.style.gridTemplateRows = '1fr 1fr';
    select.style.gridTemplateColumns = '1fr 1fr';
    select.innerHTML = `
        <div class="op1" onclick="escolher(1)">
            <div class="attack"><span id="g1"><span>${golpe1}</span></div>
            <div class="damage"><span id="d1"><span class='dadosGolpes'>${dano1}DMG</span><span class='taxa dadosGolpes'>${taxa1} de acerto</span></div>
        </div>
        <div class="op2" onclick="escolher(2)">
            <div class="attack"><span id="g2"><span>${golpe2}</span></div>
            <div class="damage"><span id="d2"><span class='dadosGolpes'>${dano2}DMG</span><span class='taxa dadosGolpes'>${taxa2} de acerto</span></div>
        </div>
        <div class="op3" onclick="escolher(3)">
            <div class="attack"><span id="g3"><span>${golpe3}</span></div>
            <div class="damage"><span id="d3"><span class='dadosGolpes'>${dano3}DMG</span><span class='taxa dadosGolpes'>${taxa3} de acerto</span></div>
        </div>
        <div class="op4" onclick="escolher(4)">
            <div class="attack"><span id="g4"><span>${golpe4}</span></div>
            <div class="damage"><span id="d4"><span class='dadosGolpes'>${dano4}DMG</span><span class='taxa dadosGolpes'>${taxa4} de acerto</span></div>
        </div>
    `;

    if (somaUlt1 == ultTotal1) {
        btn1.removeAttribute("disabled");
    };
}

// Função para começar partida

function play() {
    audio.play();

    ative();


    cronometragem();
}