function mostrar()
{
	//tomo la edad
	
	let vEdad
	vEdad = parseInt (document.getElementById("txtIdEdad").value);
	vEst = document.getElementById("estadoCivil").value;

	if (vEdad<=17 && !(vEst == "Soltero"))
	 {
		alert("Es muy pequeño para NO ser soltero");
	 }
	


}//FIN DE LA FUNCIÓN