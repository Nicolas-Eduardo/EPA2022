// Simular inserção de dados
localStorage.lsRanking = JSON.stringify([
    {
        nome: 'Lucas',
        tempo: 145
    }, {
        nome: 'Mario',
        tempo: 122
    }, {
        nome: 'Edy',
        tempo: 45
    }, {
        nome: 'Diogo',
        tempo: 73
    }, {
        nome: 'Nick',
        tempo: 45
    }, {
        nome: 'Luigi',
        tempo: 5
    }, {
        nome: 'Eva',
        tempo: 152
    }, {
        nome: 'mr. S',
        tempo: 102
    }, {
        nome: 'Vini',
        tempo: 12
    }, {
        nome: 'Robso',
        tempo: 1253
    }
]);
// Fim simulação

if (index) {
    if (localStorage.lsRanking) {
        var lsRanking = JSON.parse(localStorage.getItem('lsRanking'));

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