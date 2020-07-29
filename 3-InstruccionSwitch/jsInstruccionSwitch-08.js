function mostrar() {
	let destinoIngresado;
	destinoIngresado = document.getElementById("txtIdDestino").value;

	switch (destinoIngresado) {
		case "Bariloche":
			alert ("En " + destinoIngresado + " hace frío");
			break;
		case "Cataratas":
			alert ("En " + destinoIngresado + " hace calor");
			break;
		case "Mar del plata":
			alert ("En " + destinoIngresado + " hace frío");
			break;
		case "Ushuaia":
			alert ("En " + destinoIngresado + " hace frío");
			break;
	}
}//FIN DE LA FUNCIÓN