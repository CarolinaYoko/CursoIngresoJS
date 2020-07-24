function mostrar()
{
	let vEdad;
	let vEst;
	
	vEdad = parseInt (document.getElementById("txtIdEdad").value);
	vEst = document.getElementById("estadoCivil").value;

	if (!(vEdad<=17) && vEst == "Soltero")
	 {
		alert("Es soltero y no es menor");
	 }

	 /* Otra forma con ||

	 if (!((edad < 18) || (estadoCivil != "Soltero")))
	 
	 */
	


}//FIN DE LA FUNCIÓN