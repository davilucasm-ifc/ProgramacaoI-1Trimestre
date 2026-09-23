let preco = parseFloat(prompt("Qual valor do seu produto?"));

const desconto = 5;

let valorDesconto = (preco / 100) * desconto;
let valorFinal = preco - valorDesconto;

alert("O valor total a pagar será de R$ " + valorFinal.toFixed(2));