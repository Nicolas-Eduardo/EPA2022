function game() {
    if (vida1 == 0 || vida2 == 0) {
        pararTempo();
        if (vida1 == 0) {
            inative();
            document.querySelector('.inative').innerHTML = `VOCÊ PERDEU`;
            setTimeout(function () {
                window.location.href = "index.html";
            }, 2000)
        }
        else {
            inative();
            document.querySelector('.inative').innerHTML = `VOCÊ VENCEU!!!`;
            setTimeout(function () {
                document.querySelector('.inative').innerHTML = `
                    <p>Digite seu Nick:</p>
                    <input type="text" id="nomeJogador" maxlength="5" autocomplete="off" placeholder="5 dígitos">
                    <button type="button" id="enviarRanking" onclick="adicionarRanking()">Enviar</button>
                `;

                const btnEnviar = document.getElementById('enviarRanking')

                document.addEventListener('keypress', function(e){
                    if (e.key === 'Enter') {
                        btnEnviar.click()
                    }
                })

            }, 3000)

        }
    }
    else if (verificaJogador == true) {
        ative();
    }
    else {
        golpeInimigo();
    }
}


inative();
document.querySelector('.inative').innerHTML = `
    <div class="center">
      <button class="btn" onclick="play()">
        <svg width="180px" height="60px" viewBox="0 0 180 60" class="border">
          <polyline points="179,1 179,59 1,59 1,1 179,1" class="bg-line" />
          <polyline points="179,1 179,59 1,59 1,1 179,1" class="hl-line" />
        </svg>
        <span>FIGHT</span>
      </button>
    </div>`
