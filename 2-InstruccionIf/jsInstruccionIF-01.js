function mostrar()
{
	//tomo la edad  
	let edad

	edad = parseInt(document.getElementById("txtIdEdad").value); //usamos parseInt porque la edad es un numero entero 

	if(edad == 15)
	{
		alert("niña bonita");	
	}

}//FIN DE LA FUNCIÓN

/* let vNombre
vNombre = document.getElementById("txtIdEdad").value;
if (vNombre == "María")
{
	alert("niña bonita")
}
*/

// .value es el valor de adentro de la cajita de texto
// == espera siempre comparar con un texto