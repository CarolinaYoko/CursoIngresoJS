function mostrar()
{
	var contador;
	var acumulador;
	var numeroIngresado;

	contador=0;
	acumulador=0;
	i=1
	
	
	while(i<6){
		numeroIngresado = parseInt(prompt("","Ingrese un número"));
		i++;

		acumulador= numeroIngresado + acumulador;
	}

	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = acumulador/5;

}//FIN DE LA FUNCIÓN