function mostrar() {

	let vHora; 
	vHora = parseInt(document.getElementById("txtIdHora").value);

	if (vHora >= 7 && vHora<=11)
	{
		alert("Es de mañana")
	}
	else if( vHora>=12 && vHora <=19)
	{
		alert("Es de tarde")
	}
	else if((vHora>=0  && vHora<=6) || (vHora>19 && vHora<=24))
	{
		alert(" Es de noche")
	}


	
	
	
	
	
	
	
	
	if (vHora <= 0 && vHora >= 24) {
		alert("La hora no existe");
	}

	else {
		switch (vHora) {
			case 7:
			case 8:
			case 9:
			case 10:
			case 11:
				alert("Es de mañana");
				break;
			case 12:
			case 13:
			case 14:
			case 15:
			case 16:
			case 17:
			case 18:
			case 19:
				alert("Es de tarde");
				break;

			default:
				alert("Es de noche");
				break;
		}
	}
}//FIN DE LA FUNCIÓN