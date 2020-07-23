function mostrar()
{
	let vEdad
	vEdad = parseInt(document.getElementById("txtIdEdad").value)

	
	if(!(vEdad >=13 && vEdad<=17)) //no va el ; punto y coma luego del if, sino lo que esta adentro de la llave se va a ejecutar

	{
		alert("No es adolescente");
	}

}//FIN DE LA FUNCIÓN