let faturamentoTotal = parseFloat(prompt("Qual o faturamento total?"));
let percentVendasOnline = parseFloat(prompt("Qual o percentual de vendas online?"));
let percentVendasFisicas = parseFloat(prompt("Qual o percentual de vendas físicas?"));

let calculoVendasOnline = (faturamentoTotal * percentVendasOnline)/100;
let calculoVendasFisicas = (faturamentoTotal * percentVendasFisicas)/100;
let difValores = calculoVendasOnline - calculoVendasFisicas;

alert("O valor das vendas online é:" + calculoVendasOnline.toFixed(2));
alert("O valor das vendas físicas é:" + calculoVendasFisicas.toFixed(2));
alert("A diferença entre os valores é: " + difValores.toFixed(2));