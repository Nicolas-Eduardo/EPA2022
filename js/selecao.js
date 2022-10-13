const per1 = document.querySelector('.per1');
const per2 = document.querySelector('.per2');
const select = document.querySelector('.select');
const enemy = document.querySelector('.enemy');
const carrossel = document.querySelector('.carrossel');
const controles = document.querySelector('.controles');
const btnComecar = document.querySelector('button');
const footer = document.querySelector('footer');
const audio = document.querySelector('#audio');
let verificador = false;

per1.addEventListener("click", function(){
    verificador = true;
    select.innerHTML = '<img src="css/image/patoFrente.gif" alt="Não foi possivel carregar a imagem ;-;" width="100%" height="50%"></img>';
    enemy.innerHTML = '<img src="css/image/patoCosta.gif" alt="Não foi possivel carregar a imagem ;-;" width="100%" height="50%"></img>';
    per1.style.border = '5px groove #5555FF';
    per2.style.border = '';
    audio.play();
})

per2.addEventListener("click", function(){
    verificador = true;
    enemy.innerHTML = '<img src="css/image/patoCosta.gif" alt="Não foi possivel carregar a imagem ;-;" width="100%" height="50%"></img>';
    select.innerHTML = '<img src="css/image/patoFrente.gif" alt="Não foi possivel carregar a imagem ;-;" width="100%" height="50%"></img>';
    per2.style.border = '5px groove #5555FF'
    per1.style.border = ''
})

carrossel.addEventListener("click", function(){
    controles.innerHTML = "";
    $('.carousel').carousel({
        interval: 0
    });
})

// Parte improvisada do botão // 
btnComecar.addEventListener("mouseenter", function(){
    footer.style.backgroundColor = "transparent";
})

btnComecar.addEventListener("mouseleave", function(){
    footer.style.backgroundColor = "#5555FF";
})