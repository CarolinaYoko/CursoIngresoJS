function mostrar()
{
	let vEdad
	vEdad = parseInt(document.getElementById("txtIdEdad").value)

	
	if(vEdad<=12) 
	{
		alert("Es niño");
	}

	if(vEdad>=13 && vEdad<=17) 
	{
		alert("Es adolescente");
	}
		
	else(vEdad>=18) 
	{
		alert("Es mayor de edad");
	}

}

//FIN DE LA FUNCIÓN