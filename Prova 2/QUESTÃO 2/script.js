let numeroDisciplinas = parseFloat(prompt("Quantas disciplinas você tem?"));
let horasEstudo = parseFloat(prompt("Quantas horas de estudo você tem por disciplina por dia?"));
let diasEstudo = parseFloat(prompt("Quantos dias vocễ tem de estudo?"));

let CalculoHorasEstudo = numeroDisciplinas * horasEstudo;
let CalculoTotalHoras = numeroDisciplinas * horasEstudo * diasEstudo;

alert ("O total de horas estudadas por dia foi de: " + CalculoHorasEstudo.toFixed(2));
alert ("O total de horas no período foi de: " + CalculoTotalHoras.toFixed(2));