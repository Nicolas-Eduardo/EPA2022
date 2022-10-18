// Fim simulação
    


var lsRanking = [];
var nome;
var tempo;

if (index == true) {
    if (localStorage.lsRanking) {
        lsRanking = JSON.parse(localStorage.getItem('lsRanking'));

        lsRanking.sort(function (x, y) {
            return x.tempo - y.tempo
        })

        if (lsRanking.length == 11) {
            lsRanking.splice(10, 1);
        }

        lsRanking.forEach(function (ranking, x) {
            table.innerHTML += `
            <tr class="th${x+1}">
                <th>${x+1}.</th>
                <th>${ranking.nome}</th>
                <th>${ranking.tempo}s</th>
            </tr>
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