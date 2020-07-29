function mostrar() {
	let estacionIngresada;
	let destino;
	let tarifa;
	estacionIngresada = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;

	switch (estacionIngresada) {
		case "Invierno":
			switch (destino) {
				case "Bariloche":
					tarifa = 15000 * 1.20;
					alert("El importe final es: $" + tarifa);
					break;
				case "Mar del plata":
					tarifa = 15000 * 0.80;
					alert("El importe final es: $" + tarifa);
					break;
				default:
					tarifa = 15000 * 1.10;
					alert("El importe final es: $" + tarifa);
					break;
			}
			break;
		case "Verano":
			switch (destino) {
				case "Bariloche":
					tarifa = 15000 * 0.80;
					alert("El importe final es: $" + tarifa);
					break;
				case "Mar del plata":
					tarifa = 15000 * 1.20;
					alert("El importe final es: $" + tarifa);
					break;
				default:
					tarifa = 15000 * 1.10;
					alert("El importe final es: $" + tarifa);
					break;
			}
			break;

		default:
			switch (destino) {
				case "Cordoba":
					tarifa = 15000;
					alert("El importe final es: $" + tarifa);
					break;

				default:
					tarifa = 15000 * 1.10
					alert("El importe final es: $" + tarifa)
					break;
			}
			break;


	}


}//FIN DE LA FUNCIÓN