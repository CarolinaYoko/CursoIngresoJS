function mostrar() {
	//tomo el mes

	let vMes;
	vMes = document.getElementById("txtIdMes").value;

	switch (vMes) {
		case "Febrero":
			alert("Puede tener 28 o 29 días");
			break;

		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			alert("Tiene 30 días");
			break;

		default:
			alert("Tiene 31 días");
			break
	}


}//FIN DE LA FUNCIÓN