// 
var porcentagem;

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

// Botao de Poder

const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');

// Div dos golpes

// const op1 = document.querySelector('.op1');
// const op2 = document.querySelector('.op2');
// const op3 = document.querySelector('.op3');
// const op4 = document.querySelector('.op4');

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

// audio

btn1.addEventListener('click', function(){
    audio.play();
})

// funcoes

// Função para retornar porcentagem de vida dentro de 100% da atual

function porcentagemVida (x, y) {
    // x = vida total
    // y = vida atual

    porcentagem = y * 100 / x;
    return porcentagem;
}

// função para fazer aparecer e desaparecer a caixa superior de texto em 3 segundos

function classEdit() {
    alerta.style.opacity = "1";
    alerta.classList.add('fade-in-top');

    setTimeout(function() {
        alerta.classList.remove('fade-in-top');
        alerta.classList.add('fade-out-top');
    }, 3000)
}

// função caso escolha o golpe 1

function golpear1(x){
    if(x == 0){
        message.innerHTML = falas.fala1;
        classEdit();
    }

    if(x == 1){
        message.innerHTML = falas.fala2;
        classEdit();
        vida2 -= dano1;
    }
    ative();
}

// função para retornar um número entre 0 e 10

function random(){
    // return Math.floor(math.random(0, 10));
    return 1;
}

// função que irá fazer o que cada golpe deve fazer (e também o começo de cada partida)

function escolher(op){
    inative();

    switch (op) {
        case 1:
            golpear1(random());
        break;

        case 2:
            console.log("golpe2")
        break;

        case 3:
            console.log("golpe3")
        break;

        case 4:
            console.log("golpe4")
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
    <p>AGUARDE...</p>
    </div>`;
}

// função que deixa a caixa de golpes ativa, podendo escolher os golpes

function ative() {
    life1.innerHTML = `${vida1}HP`;
    life2.innerHTML = `${vida2}HP`;
    bar1.style.width = (porcentagemVida(vidatotal1, vida1)+"%")
    bar2.style.width = (porcentagemVida(vidatotal2, vida2)+"%")
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
                `
}
