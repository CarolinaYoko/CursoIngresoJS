function mostrar()
{
	let estacionIngresada;
	let destinoIngresado;
	estacionIngresada = document.getElementById("txtIdEstacion").value;
	destinoIngresado = document.getElementById("txtIdDestino").value;

	switch (estacionIngresada){
		case "Invierno":
			switch (destinoIngresado){
				case "Bariloche":
					alert("Se viaja");
					break;
				default:
					alert("No se viaja");
					break;				
			}
			break;
		case "Mar del plata":
		case "Cataratas":
	}

	alert(estacionIngresada);



}//FIN DE LA FUNCIÓN