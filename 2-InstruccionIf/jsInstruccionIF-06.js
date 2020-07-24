function mostrar()
{
	let vEdad;
	vEdad = parseInt(document.getElementById("txtIdEdad").value);

	if(vEdad<=12) 
	{
		alert("Es niño");
	}

	else if(vEdad>=13 && vEdad<=17) 
	{
		alert("Es adolescente");
	}

	else
	{
		alert("Es mayor de edad");
	}
		
}

/* Esta forma esta bien, pero la mas racional es la que quedó
{
	let vEdad
	vEdad = parseInt(document.getElementById("txtIdEdad").value)

	if(vEdad<=12) 
	{
		alert("Es niño");
	}

	else
	{
		if(vEdad>=13 && vEdad<=17) 
		{
			alert("Es adolescente");
		}

		else
		{
			alert("Es mayor de edad");
		}
		
}*/
	
	
	/* la maquina tiene que procesar mas... entonces no conviene hacerlo así.
	   porque tiene que processar todos los IF sin parar.
	   
	if(vEdad<=12) 
	{
		alert("Es niño");
	}

	if(vEdad>=13 && vEdad<=17) 
	{
		alert("Es adolescente");
	}
		
	if(vEdad>=18) 
	{
		alert("Es mayor de edad");
	}
*/
	

//FIN DE LA FUNCIÓN