var query = location.search.slice(1);
var partes = query.split('&');
var data = {};
partes.forEach(function (parte) {
    var chaveValor = parte.split('=');
    var chave = chaveValor[0];
    var valor = chaveValor[1];
    data[chave] = valor;
});

console.log(data); // Object {lang: "pt", page: "home"}

if (partes.length != 2) {
    window.location.href = "selecao.php";
}