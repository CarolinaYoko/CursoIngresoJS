function mostrar()
{
	let vEdad;
	vEdad = parseInt(document.getElementById("txtIdEdad").value)

	
	if((vEdad >=13) && (vEdad<=17)) //no va el ; punto y coma luego del if, sino lo que esta adentro de la llave se va a ejecutar

	{
		alert("Adolescente");
	}

	
/*
	if (13<= vEdad <=17)   Esto no funciona porque el procesador no lee así

	{
		alert("Adolescente");
	}
	

	/*
	if(vEdad <=17)
	if(vEdad >= 13)
	{
		alert("Adolescente");
	}
	*/

}

//FIN DE LA FUNCIÓN