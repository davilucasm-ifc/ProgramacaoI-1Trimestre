let quantidadeDolar = parseFloat (prompt("A quantidade de dólares é: "));
let cotacaoDolar = parseFloat (prompt("A cotação do dólar em reais é: "));

let valoremReais = quantidadeDolar * cotacaoDolar;

alert ("O valor em reais é: R$ " + valoremReais.toFixed(2));