/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	let Num1
	let Num2

	Num1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	Num2 = parseInt(document.getElementById("txtIdNumeroDos").value);

	alert("La suma es: " + (Num1 + Num2));	

}

function restar()
{
	let Num1
	let Num2

	Num1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	Num2 = parseInt(document.getElementById("txtIdNumeroDos").value);

	alert("La resta es: " + (Num1 - Num2));
	
}

function multiplicar()
{ 
	let Num1
	let Num2

	Num1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	Num2 = parseInt(document.getElementById("txtIdNumeroDos").value);

	alert("La multiplicación es: " + (Num1 * Num2));
}

function dividir()
{
	let Num1
	let Num2

	Num1 = parseFloat(document.getElementById("txtIdNumeroUno").value);
	Num2 = parseFloat(document.getElementById("txtIdNumeroDos").value);

	alert("La división es: " + (Num1 / Num2).toFixed(2));
	
}

/*

A partir de acá, siempre vamos a usar "let"
para declarar variables pues son locales

Jerarquía de operadores
()
* / %
+-

*/
