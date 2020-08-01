/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	
	let respuesta;
	let SumaP;
	let MultN;
	let num;
	SumaP = 0;
	MultN = 1;
	respuesta = 'si';

	while(respuesta == "si") {
		num = parseInt(prompt("Ingresar número: ",));

		if (num >=0) {
			SumaP = SumaP + num;
		}
		else{
			MultN =  MultN * num;
		}
		
		respuesta = prompt ("¿desea ingresar otro número? si/no");

	}	
	document.getElementById("txtIdSuma").value = SumaP;
	document.getElementById("txtIdProducto").value = MultN;

}//FIN DE LA FUNCIÓN