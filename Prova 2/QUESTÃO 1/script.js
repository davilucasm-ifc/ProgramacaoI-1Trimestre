let volumeInicial = parseFloat(prompt("Qual o volume inicial? (em litros)"));
let litrosAdicionados = parseFloat(prompt("Quantos litros são adicionados por hora?"));
let tempoAbastecimento = parseFloat(prompt("Qual é o tempo de abastecimento? (em horas)"));

let Calculo = volumeInicial + (litrosAdicionados * tempoAbastecimento);

alert("O volume final do reservatório é: " + Calculo.toFixed(2));