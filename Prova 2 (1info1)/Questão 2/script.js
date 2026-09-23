let numeroPaginas = parseInt(prompt("Qual o número de páginas de um material?"));
let quantidadeCopias = parseInt(prompt("Qual a quantidade de cópias?"));
let custoPagina = parseFloat(prompt("Qual o custo por página impressa?"));
let percentualTaxa = parseFloat(prompt("Qual o percentual de taxa adicional?"));

let calculoPaginas = numeroPaginas * quantidadeCopias;
let custoBase = custoPagina * numeroPaginas
let valorTaxa = (percentualTaxa * custoPagina)/100;
let custoFinal = custoBase + valorTaxa;

alert ("O número de páginas impressas é: " + calculoPaginas);
alert ("O custo base é " + custoBase.toFixed(2));
alert ("O valor da taxa é: " + valorTaxa.toFixed(2));
alert ("O custo final é: " + custoFinal.toFixed(2));