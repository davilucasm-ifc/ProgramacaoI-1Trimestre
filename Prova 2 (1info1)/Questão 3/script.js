let numeroDiasUsoMes = parseFloat(prompt("Qual o número de dias de uso no mễs?"));
let horasUsoMes = parseFloat(prompt("Qual o número de horas de uso por dia?"));
let consumoEquipamento = parseFloat(prompt("Qual o consumo do equipamento por hora? (kWh)"));
let custokWh = parseFloat(prompt("Qual o custo do kWh?"));
let taxaFixa = parseFloat(prompt("Qual a taxa fixa mensal de manutenção?"));

let calculoHorasUsoMes = numeroDiasUsoMes * horasUsoMes;
let consumoTotalEnergia = consumoEquipamento * horasUsoMes;
let custoEnergia = consumoTotalEnergia * custokWh;
let custoTotal = custoEnergia + taxaFixa;

alert ("O total de horas foi de:" + calculoHorasUsoMes.toFixed(2));
alert ("O consumo de energia foi de:" + consumoTotalEnergia.toFixed(2));
alert ("O custo de energia foi de:" + custoEnergia.toFixed(2));
