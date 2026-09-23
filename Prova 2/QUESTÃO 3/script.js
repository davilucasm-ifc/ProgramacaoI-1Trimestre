let numeroEntregas = parseFloat(prompt("Qual o número de entregas realizadas?"));
let tempoMedio = parseFloat(prompt("Qual o tempo médio por entrega? (em minutos)"));
let consumoMedio = parseFloat(prompt("Qual o consumo médio por entrega? (em litros)"));
let precoCombustivel = parseFloat(prompt("Qual o preço do combustível?"));

let calculoTempoTotal = (numeroEntregas * tempoMedio) / 60;
let consumoTotal = numeroEntregas * consumoMedio;
let custoTotal = consumoTotal * precoCombustivel;
let custoMedio = custoTotal / numeroEntregas;

alert("O tempo total em horas foi de: " + calculoTempoTotal.toFixed(2));
alert("O consumo total foi de: " + consumoTotal.toFixed(2));
alert("O custo total foi de: " + custoTotal.toFixed(2));
alert("O consumo médio por entrega foi de:" + custoMedio.toFixed(2));