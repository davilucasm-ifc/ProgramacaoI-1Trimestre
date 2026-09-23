let pesoAtual = parseFloat(prompt("Qual seu peso atual?"));

const engordar = 15;
const emagrecer = 20;

let pesoEngordar = ((pesoAtual / 100) * engordar) + pesoAtual;
let pesoEmagrecer = pesoAtual - ((pesoAtual / 100) * emagrecer);

alert("Se você engordar 15% ficará com " + pesoEngordar.toFixed(2) + " Kg");

alert("Se você emagrecer 20% ficará com " + pesoEmagrecer.toFixed(2) + " Kg");