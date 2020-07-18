/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	let Num1
	let Num2

	Num1 = parseInt(document.getElementById("txtIdNumeroDividendo").value);
	Num2 = parseInt(document.getElementById("txtIdNumeroDivisor").value);

	
	alert("El resultado es " + (Num1 % Num2));
	
}
