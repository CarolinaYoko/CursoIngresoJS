function mostrar() {
	//tomo el mes
	let vMes;
	vMes = document.getElementById("txtIdMes").value;

	switch (vMes) {
		case "Febrero":
			alert("Este mes NO tiene mas de 29 días");
			break;

		default:
			alert("Este mes tiene 30 días o mas");
			break; // es recomendable poner siempre al final aunque sea el último caso
			//no se puede agregar nada después del defaul... queda desprolijo...
	}


}//FIN DE LA FUNCIÓN