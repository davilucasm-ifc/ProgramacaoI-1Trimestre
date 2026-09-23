let quantKits = parseFloat(prompt("Qual a quantidade de kits que serão montados"));
let quantCanetas = parseFloat(prompt("Qual a quantidade de canetas por kit?"));
let quantCadernos = parseFloat(prompt("Qual a quantidade de cadernos por kit?"));
let quantAdesivos = parseFloat(prompt("Qual a quantidade de adesivos por kit?"));
let precoCaneta = parseFloat("Qual o preço unitário da caneta?");
let precoCaderno = parseFloat(prompt("Qual o preço unitário do caderno?"));
let precoAdesivo = parseFloat(prompt("Qual o preço unitário do adesivo?"));

let quantTotalCanetas = quantKits * quantCanetas;
let quantTotalCadernos = quantKits * quantCadernos;
let quantTotalAdesivos = quantKits * quantAdesivos;
let custoCanetas = quantTotalCanetas * precoCaneta;
let custoCaderno = quantTotalCadernos * precoCaderno;
let custoAdesivos = quantTotalAdesivos *precoAdesivo;
let custoGeral = custoCanetas + custoCaderno + custoAdesivos;

alert("A quantidade total de canetas é de: " + quantTotalCadernos.toFixed(2));
alert("A quantidade total de cadernos é de: " + quantTotalCadernos.toFixed(2));
alert("A quantidade de adesivos é de: " + quantTotalAdesivos.toFixed(2));
alert("O custo total com canetas foi de: " + custoCanetas.toFixed(2));
alert("O custo total com cadernos foi de: " + custoCaderno.toFixed(2));
alert("O custo total com adesivos foi de: " + custoAdesivos.toFixed(2));
alert("O custo geral dos kits foi de: " + custoGeral.toFixed(2)); 