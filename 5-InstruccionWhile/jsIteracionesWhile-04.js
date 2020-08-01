/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let nIngresado;
	nIngresado = parseInt(prompt("ingrese un número entre 0 y 9."));

	while (nIngresado>9 || nIngresado<0 || isNaN (nIngresado)){
		nIngresado = parseInt(prompt("ingrese un número entre 0 y 9."));
	}
	
	document.getElementById("txtIdNumero").value = nIngresado;
	
	
}//FIN DE LA FUNCIÓN
