const per1 = document.querySelector('.per1');
const per2 = document.querySelector('.per2');
const select = document.querySelector('.select');
const enemy = document.querySelector('.enemy');
const carrossel = document.querySelector('.carrossel');
const controles = document.querySelector('.controles');
let verificador = false;

per1.addEventListener("click", function(){
    verificador = true;
    select.innerHTML = '<img src="css/image/pteste1.png" alt="Não foi possivel carregar a imagem ;-;" width="100%" height="100%"></img>';
    enemy.innerHTML = '<img src="css/image/pteste2.webp" alt="Não foi possivel carregar a imagem ;-;" width="100%" height="100%"></img>';
    per1.style.border = '5px inset red'
    per2.style.border = ''
})

per2.addEventListener("click", function(){
    verificador = true;
    enemy.innerHTML = '<img src="css/image/pteste1.png" alt="Não foi possivel carregar a imagem ;-;" width="100%" height="100%"></img>';
    select.innerHTML = '<img src="css/image/pteste2.webp" alt="Não foi possivel carregar a imagem ;-;" width="100%" height="100%"></img>';
    per2.style.border = '5px outset  red'
    per1.style.border = ''
})

carrossel.addEventListener("click", function(){
    controles.innerHTML = "";
    $('.carousel').carousel({
        interval: 0
    });
})