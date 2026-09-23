// Entrada de dados
let largura = parseFloat(prompt("Informe a largura da parede (m):"));
let altura = parseFloat(prompt("Informe a altura da parede (m):"));
let rendimento = parseFloat(prompt("Informe o rendimento da tinta (m2 por litro):"));
let tamanhoLata = parseFloat(prompt("Informe o tamanho da lata (litros):"));
let precoLata = parseFloat(prompt("Informe o preço da lata (R$):"));

//Cálculo da área da parede
let area = largura * altura;

//Cálculo da quantidade de tinta necessária (litros)
let litros = area / rendimento;

//Cálculo da quantidade de latas (pode ser fracionado)
let latas = litros / tamanhoLata;

//Cálculo do custo total
let custo = latas * precoLata;

//Exibição dos resultados
alert("Área da parede: " + area.toFixed(2) + " m²");
alert("Quantidade de latas necessárias: " + latas.toFixed(2));
alert("Custo total: R$ " + custo.toFixed(2));