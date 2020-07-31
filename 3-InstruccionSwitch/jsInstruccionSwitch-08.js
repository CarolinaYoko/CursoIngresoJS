function mostrar() {
	let destinoIngresado;
	destinoIngresado = document.getElementById("txtIdDestino").value;

	switch (destinoIngresado) {
		case "Bariloche":
		case "Ushuaia":
			alert("En " + destinoIngresado + " hace frío");
			break;
		case "Cataratas":
		case "Mar del plata":
			alert("En " + destinoIngresado + " hace calor");
			break;
		default:
			alert(destinoIngresado + " no esta contemplado");
			break;

	}
}//FIN DE LA FUNCIÓN