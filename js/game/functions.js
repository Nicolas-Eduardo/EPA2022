// 
var porcentagem;
var z;

// Div do select
const select = document.getElementById('select')

// Element.classList.remove(.classe);
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

// Dano aumentado

var danoCritico;

// audio

btn1.addEventListener('click', function () {
    audio.play();
})

// funções

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

// Função que escolhe o poder do inimigo

function golpeInimigo() {
    verificaJogador = true;
    let golpeInimigo = Math.floor(Math.random()*5)
    switch(golpeInimigo) {
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
        
        case 4:
            ult(0);
        break;
    }
}

// Função que aumentará o dano

function danoCritico(dano) {
    let critico = Math.floor(Math.random() * 20 + 40);
    let danoCritico = dano + critico;
    return danoCritico;
}

// função que atualiza as vidas

function atualizarVida() {
    life1.innerHTML = `${vida1}HP`;
    life2.innerHTML = `${vida2}HP`;
    bar1.style.width = (porcentagemVida(vidatotal1, vida1) + "%")
    bar2.style.width = (porcentagemVida(vidatotal2, vida2) + "%")
}

// Função para retornar porcentagem de vida dentro de 100% da atual

function porcentagemVida(x, y) {
    // x = vida total
    // y = vida atual

    porcentagem = y * 100 / x;
    return porcentagem;
}

// função para fazer aparecer e desaparecer a caixa superior de texto em 3 segundos

function classEdit() {
    alerta.style.opacity = "1";
    alerta.classList.remove('fade-out-top');
    alerta.classList.add('fade-in-top');

    setTimeout(function () {
        alerta.classList.remove('fade-in-top');
        alerta.classList.add('fade-out-top');

        setTimeout(function(){
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
    select.style.gridTemplateAreas = '"op1 op2""op3 op4"';
    select.style.gridTemplateRows = '1fr 1fr';
    select.style.gridTemplateColumns = '1fr 1fr';
    select.innerHTML = `
        <div class="op1" onclick="escolher(1)">
            <div class="attack"><span id="g1"><span>${golpe1}</span></div>
            <div class="damage"><span id="d1"><span>${dano1}DMG</span></div>
        </div>
        <div class="op2" onclick="escolher(2)">
            <div class="attack"><span id="g2"><span>${golpe2}</span></div>
            <div class="damage"><span id="d2"><span>${dano2}DMG</span></div>
        </div>
        <div class="op3" onclick="escolher(3)">
            <div class="attack"><span id="g3"><span>${golpe3}</span></div>
            <div class="damage"><span id="d3"><span>${dano3}DMG</span></div>
        </div>
        <div class="op4" onclick="escolher(4)">
            <div class="attack"><span id="g4"><span>${golpe4}</span></div>
            <div class="damage"><span id="d4"><span>${dano4}DMG</span></div>
        </div>
    `;
    if (verificaPoder == true) {
        btn1.removeAttribute("disabled");
    };
}