var duracionDeLlamada = prompt("Ingresa duración de la llamada");
   	duracionDeLlamada = parseFloat(duracionDeLlamada);
var costoPorMinuto= prompt("Ingresa costo por minuto");
   	costoPorMinuto = parseFloat(costoPorMinuto);
var costoDeLlamada = duracionDeLlamada*costoPorMinuto;
document.write("El costo total de su llamada es:");
document.write(costoDeLlamada);

/*
<--Otra forma-->

var num1 = prompt ("Duración de la llamada");
var num2 = prompt ("Costo por minuto");
document.write("El costo de la llamada es: ");
document.write(parseInt(num1)*parseInt(num2));
*/