//Entrada de dados
let carrosVendidos = parseFloat(prompt("Digite o número de carros vendidos:"));
let valorVendas = parseFloat(prompt("Digite o valor total de vendas (R$):"));
let salarioFixo = parseFloat(prompt("Digite o salário fixo (R$):"));

//Comissão por carro vendido
let comissaoPorCarro = carrosVendidos * 225.00;

//Comissão de 5% sobre o valor das vendas
let comissaoVendas = valorVendas * 0.05;

//Cálculo do salário final
let salarioFinal = salarioFixo + comissaoPorCarro + comissaoVendas;

//Exibição do resultado
alert("Salário final do salário do vendedor: R$ " + salarioFinal.toFixed(2));