let precoQuilo = 28.00;
let peso = parseFloat(prompt("Digite o peso do prato (em kg):"));
let valor = peso * precoQuilo;
alert("O valor a pagar é: R$ " +valor.toFixed(2));