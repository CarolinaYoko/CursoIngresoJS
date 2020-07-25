function mostrar() {

	let vHora; //¿cómo restrijo?
	vHora = parseInt(document.getElementById("txtIdHora").value);

	if (vHora >= 24) {
		alert("No es un horario válido")
	}

	switch (vHora) {
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			alert("Es de mañana");
			break;
	}

	/*
	if (vHora >= 7 && vHora <= 11) 
	{
		alert("Es de mañana");
	}

	if (vHora>=24)
	{
		alert("No es una horario válido")
	}
	*/

}//FIN DE LA FUNCIÓN