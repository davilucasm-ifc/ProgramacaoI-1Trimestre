let nota1 = parseFloat (prompt("A primeira nota foi: "));
let nota2 = parseFloat (prompt("A segunda nota foi: "));
let nota3 = parseFloat (prompt("A terceira nota foi: "));

let peso1 = 2;
let peso2 = 3;
let peso3 = 5;

let media = (nota1*2 + nota2 * 3 + nota3 * 5)/ (peso1+peso2+peso3);

alert("Média final ponderada: " +media.toFixed(2));