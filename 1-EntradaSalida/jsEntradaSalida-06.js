/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
//Defino variables
	var Num1
	var Num2
	var Res1
	var Res2
	
//Asigno
	Num1 = document.getElementById("txtIdNumeroUno").value;
	Num2 = document.getElementById("txtIdNumeroDos").value;
	Res1 = parseInt(Num1);
	Res2 = parseInt(Num2);

//Resultado
	alert(Res1 + Res2);

}

