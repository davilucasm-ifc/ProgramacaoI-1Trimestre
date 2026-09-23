let precoOriginal = parseFloat(prompt ("Qual o preço original do produto? (R$):"));
let precoCobrado = parseFloat(prompt ("Qual o preço cobrado após o desconto do produto (R$):"));

let desconto = precoOriginal - precoCobrado;
let porcentagem = (desconto / precoOriginal) * 100;

alert("Desconto aplicado: " + porcentagem.toFixed(2) + "%");