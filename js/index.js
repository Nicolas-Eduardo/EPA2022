const index = true;
const jogo = false;



const table = document.querySelector('table');

const audio = document.getElementById('audio');
const musicButton = document.querySelector('#musicButton');

const audioPlay = new Audio('files/startIndex.wav')

setInterval(function () {
    table.style.outline = "3px dashed #EE0CF2"

    setTimeout(function () {
        table.style.outline = "";
    }, 500)
}, 1000)

function start(){
    audioPlay.play()
    document.querySelector('body').style.backgroundColor = 'black'
    document.querySelector('body').style.backgroundImage = 'url()';
    setTimeout(function(){
        window.location.href = "selecao.html";
    }, 1000)
}

function playMusic() {
    musicButton.setAttribute('src', 'css/image/pause-fill.svg')
    musicButton.setAttribute('onclick', 'pauseMusic()')
    audio.play();
}

function pauseMusic() {
    musicButton.setAttribute('src', 'css/image/play-fill.svg')
    musicButton.setAttribute('onclick', 'playMusic()')
    audio.pause();
}

