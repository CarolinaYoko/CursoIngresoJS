function mostrar() {
	let destinoIngresado;
	destinoIngresado = document.getElementById("txtIdDestino").value;

	if (destinoIngresado == "Bariloche") {
		alert(destinoIngresado + " queda en el Oeste de nuestro país");
	}
	else if (destinoIngresado == "Cataratas") {
		alert(destinoIngresado + " queda en el Norte de nuestro país");
	}
	else if (destinoIngresado == "Mar del plata") {
		alert(destinoIngresado + " queda en el Este de nuestro país");
	}
	else if (destinoIngresado == "Ushuaia") {
		alert(destinoIngresado + " queda en el Sur de nuestro país");
	}
	else {
		alert("Esta provincia no esta contemplada")
	}

	/*
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
			default:
				alert("Esta provincia no esta contemplada")
		}
	*/

}//FIN DE LA FUNCIÓN