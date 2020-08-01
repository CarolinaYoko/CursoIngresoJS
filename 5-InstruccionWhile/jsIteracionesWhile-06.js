function mostrar()
{
	let numeroIngresado;
	let i=0
	let acumulador=0;
	
	
	while(i<5){
		numeroIngresado = parseInt(prompt("","Ingrese un número"));
		acumulador= numeroIngresado + acumulador;
		i++;

	}

	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = acumulador/5;

}//FIN DE LA FUNCIÓN