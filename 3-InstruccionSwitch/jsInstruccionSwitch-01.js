function mostrar() {
	let vMes
	vMes = document.getElementById("txtIdMes").value;

	/*
	if (vMes == "Enero") {
		alert("Que comiences bien el año");
	}
	else if (vMes == "Marzo") {
		alert("A clases")
	}
	else if (vMes == "Julio") {
		alert("Se vienen las vacaciones");
	}
	else if (vMes == "Diciembre") {
		alert("Felices Fiestas");
	}
	*/

	switch (vMes) 
	{
		case "Enero":
			alert("Que comiences bien el año");
			break; // si me olvido de poner el break 
		case "Marzo":
			alert("A clases");
			break;
		case "Julio":
			alert("Se vienen las vacaciones");
			break;
		case "Diciembre":
			alert("Felices Fiestas");

	}

}//FIN DE LA FUNCIÓN