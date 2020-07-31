function mostrar() {
	let estacionIngresada;
	let destinoIngresado;
	estacionIngresada = document.getElementById("txtIdEstacion").value;
	destinoIngresado = document.getElementById("txtIdDestino").value;

	switch (estacionIngresada) {
		case "Invierno":
			switch (destinoIngresado) {
				case "Bariloche":
					alert("Se viaja");
					break;
				default:
					alert("No se viaja");
					break;
			}
			break;
		case "Verano":
			switch (destinoIngresado) {
				case "Mar del plata":
				case "Cataratas":
					alert("Se viaja");
					break;
				default:
					alert("No se viaja");
					break;
			}
			break;
		case "Otoño":
			alert("Se viaja");
			break;
		case "Primavera":
			if (destinoIngresado == "Bariloche") {
				alert("No se viaja");
			}
			else {
				alert("Se viaja");
			}
			break;

	}



}//FIN DE LA FUNCIÓN