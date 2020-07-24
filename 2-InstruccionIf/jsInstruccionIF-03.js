function mostrar()
{
	let vEdad;
	vEdad = parseInt(document.getElementById("txtIdEdad").value)

	if(vEdad >=18)  //no va el ; punto y coma luego del if, sino lo que esta adentro de la llave se va a ejecutar

	{
		alert("Mayor de edad");
	}

	//alert("Menor de edad")  no sirve porque se pisa con lo anterior
	
	else //if(vEdad <=17)
	{
		alert("Menor de edad");
	}
	
	

}//FIN DE LA FUNCIÓN