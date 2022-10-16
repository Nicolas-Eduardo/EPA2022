// Fim simulação

var lsRanking = [];
var nome;
var tempo;

if (index == true) {
    if (localStorage.lsRanking) {
        lsRanking = JSON.parse(localStorage.getItem('lsRanking'));

        console.log(lsRanking)
        console.log(lsRanking[0].nome)

        lsRanking.forEach(function (xxx, x) {
            ranking.innerHTML += `
            <div class="posicoes">
                <span class="posicao">${x + 1}.</span>
                <span class="nome">${lsRanking[x].nome}</span>
                <span class="tempo">${lsRanking[x].tempo}s</span>
            </div>
            `
        });
    }
}

if (jogo == true) {

    if (localStorage.lsRanking) {
        lsRanking = JSON.parse(localStorage.getItem('lsRanking'));
    }

    function adicionarRanking () {
        if (document.getElementById('nomeJogador').value != "") {

            lsRanking.push({
                nome: document.getElementById('nomeJogador').value.toUpperCase(),
                tempo: contCronometro
            })

            localStorage.clear(lsRanking);

            localStorage.lsRanking = JSON.stringify(lsRanking);

            document.querySelector('.inative').innerHTML = `<p>OBRIGADO POR JOGAR</p>`

            setTimeout(function(){
                window.location.href = "index.html";
            }, 2000)
        }
    }
}