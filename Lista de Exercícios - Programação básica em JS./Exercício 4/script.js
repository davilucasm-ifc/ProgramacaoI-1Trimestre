let precoPago = parseFloat (prompt('O valor total do almoço'));
let valorQuilo = parseFloat (prompt('O preço do quilo'));

let valorConsuimido = (precoPago / valorQuilo);

alert ('o preço consumido foi' + valorConsuimido.toFixed(2));