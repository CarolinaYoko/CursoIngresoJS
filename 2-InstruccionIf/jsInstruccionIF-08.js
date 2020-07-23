function mostrar()
{
	let vEdad
	vEdad = parseInt (document.getElementById("txtIdEdad").value);
	vEst = document.getElementById("estadoCivil").value;

	if (!(vEdad<=17) && vEst == "Soltero")
	 {
		alert("Es soltero y no es menor");
	 }
	


}//FIN DE LA FUNCIÓN