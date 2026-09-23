// dimensões do tijolo
let alturaTijolo = parseFloat(prompt("Altura do tijolo (em metros):"));
let larguraTijolo = parseFloat(prompt("Largura do tijolo (em metros):"));

// dimensões da parede
let alturaParede = parseFloat(prompt("Altura da parede (em metros):"));
let larguraParede = parseFloat(prompt("Largura da parede (em metros):"));

// áreas
let areaTijolo = alturaTijolo * larguraTijolo;
let areaParede = alturaParede * larguraParede;

// quantidade de tijolos
let quantTijolos = areaParede / areaTijolo;

// arredonda pra cima (não dá pra usar meio tijolo)
quantTijolos = Math.ceil(quantTijolos);

alert("A quantidade de tijolos necessária é: " + quantTijolos);