function mostrar()
{
	let destinoIngresado;
	destinoIngresado = document.getElementById("txtIdDestino").value;
	
	switch (destinoIngresado){
		case "Bariloche":
			alert(destinoIngresado + " queda en el Oeste de nuestro país");
			break;
		case "Cataratas":
			alert(destinoIngresado + " queda en el Norte de nuestro país");
			break;
		case "Mar del plata":
			alert(destinoIngresado + " queda en el Este de nuestro país");
			break;
		case "Ushuaia":
			alert(destinoIngresado + " queda en el Sur de nuestro país");
			break;
	}
	

}//FIN DE LA FUNCIÓN