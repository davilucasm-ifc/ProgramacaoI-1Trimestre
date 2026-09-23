let cabecasGado = parseFloat(prompt("Qual a quantidade de cabeças de gado?"));
let herdeirosCabecasGado = parseFloat(prompt("Qual a quantidade de herdeiros?"));

// tira 15% para caridade
let cabecasdeGadoCaridade = cabecasGado - (cabecasGado * 0.15);

// arredonda
cabecasdeGadoCaridade = Math.floor(cabecasdeGadoCaridade);

// divide entre herdeiros
let porHerdeiro = Math.floor(cabecasdeGadoCaridade / herdeirosCabecasGado);

// resto
let sobra = cabecasdeGadoCaridade % herdeirosCabecasGado;

alert("Gado após doação: " + cabecasdeGadoCaridade);
alert("Cada herdeiro recebe: " + porHerdeiro);
alert("Sobra: " + sobra);