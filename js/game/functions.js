// Div do select
const select = document.getElementById('select')

// Element.classList.remove(.classe);
const alert = document.querySelector('.alert');
const message = document.getElementById('message');

// Barra de Vida

const bar1 = document.querySelector('.bar1');
const bar2 = document.querySelector('.bar2');

// Qtd de Vida

const life1 = document.querySelector('.life1');
const life2 = document.querySelector('.life2');

// Qtd de Poder

const power1 = document.querySelector('.power1');
const power2 = document.querySelector('.power2');

// Botao de Poder

const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');

// Div dos golpes

const op1 = document.querySelector('.op1');
const op2 = document.querySelector('.op2');
const op3 = document.querySelector('.op3');
const op4 = document.querySelector('.op4');

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

function inative() {
    select.style.gridTemplateAreas = '"inative"';
    select.style.gridTemplateRows = '1fr';
    select.style.gridTemplateColumns = '1fr';
    select.innerHTML = `
    <div class="inative">
    <p>AGUARDE...</p>
    </div>`;
}

function ative() {
    select.style.gridTemplateAreas = '"op1 op2""op3 op4"';
    select.style.gridTemplateRows = '1fr 1fr';
    select.style.gridTemplateColumns = '1fr 1fr';
    select.innerHTML = `
                <div class="op1">
                    <div class="attack"><span id="g1"><span>${golpe1}</span></div>
                    <div class="damage"><span id="d1"><span>${dano1}DMG</span></div>
                </div>
                <div class="op2">
                    <div class="attack"><span id="g2"><span>${golpe2}</span></div>
                    <div class="damage"><span id="d2"><span>${dano2}DMG</span></div>
                </div>
                <div class="op3">
                    <div class="attack"><span id="g3"><span>${golpe3}</span></div>
                    <div class="damage"><span id="d3"><span>${dano3}DMG</span></div>
                </div>
                <div class="op4">
                    <div class="attack"><span id="g4"><span>${golpe4}</span></div>
                    <div class="damage"><span id="d4"><span>${dano4}DMG</span></div>
                </div>
                `
}

ative();
inative();
