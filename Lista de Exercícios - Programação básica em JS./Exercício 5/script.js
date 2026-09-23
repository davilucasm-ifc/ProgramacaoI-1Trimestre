let pedreiro = 20.0;
let pintor = 16.0;

let horasdoPedreiro = parseFloat(prompt("Quantas horas o pedreiro levou?"));
let horasdoPintor = parseFloat(prompt("Quantas horas o pintor levou?"));

let totalPedreiro = (pedreiro * horasdoPedreiro);
let totalPintor = (pintor * horasdoPintor);
let totalGasto = (totalPedreiro + totalPintor);

alert("O valor do total do pedreiro é" + totalPedreiro.toFixed(2));
alert("O valor do total do pintor é" + totalPintor.toFixed(2));
alert("O valor total gasto foi" + totalGasto.toFixed(2));