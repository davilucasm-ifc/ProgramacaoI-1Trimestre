let tempoGasto = parseFloat(prompt("Qual o tempo gasto na viagem em horas?"));
let velocidadeMedia = parseFloat(prompt("Qual a velocidade média durante a viagem em quilômetros por hora?"));
let consumoMedio = parseFloat(prompt("Qual o consumo médio do automóvel utilizado na viagem em quilômetros por litro?"));
let precoCombustivel = parseFloat(prompt("Qual o preço do combustível utilizado durante a viagem em R$ por litro?"));

let distancia = tempoGasto * velocidadeMedia;
let combustivelGasto = distancia / consumoMedio;
let totalGasto = combustivelGasto * precoCombustivel;

alert ("A distancia percorrida foi de:" + distancia.toFixed(2));
alert ("O custo total da viagem foi de:" + totalGasto.toFixed(2));