function mostrar() {
	let estacionIngresada;
	let destino;
	let tFinal;
	const tarifa = 15000;
	estacionIngresada = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;

	switch (estacionIngresada) {
		case "Invierno":
			switch (destino) {
				case "Bariloche":
					tFinal = tarifa * 1.20;
					alert("El importe final es: $" + tFinal);
					break;
				case "Mar del plata":
					tFinal = tarifa * 0.80;
					alert("El importe final es: $" + tFinal);
					break;
				default:
					tFinal = tarifa * 0.90;
					alert("El importe final es: $" + tFinal);
					break;
			}
			break;
		case "Verano":
			switch (destino) {
				case "Bariloche":
					tFinal = tarifa * 0.80;
					alert("El importe final es: $" + tFinal);
					break;
				case "Mar del plata":
					tFinal = tarifa * 1.20;
					alert("El importe final es: $" + tFinal);
					break;
				default:
					tFinal = tarifa * 1.10;
					alert("El importe final es: $" + tFinal);
					break; 
			}
			break;

		default:
			switch (destino) {
				case "Cordoba":
					tFinal = tarifa;
					alert("El importe final es: $" + tFinal);
					break;

				default:
					tFinal = tarifa * 1.10
					alert("El importe final es: $" + tFinal)
					break;
			}
			break;


	}


}//FIN DE LA FUNCIÓN