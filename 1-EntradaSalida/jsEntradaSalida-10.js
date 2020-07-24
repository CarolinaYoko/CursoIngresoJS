/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let Sueldo;

	Sueldo = parseFloat(document.getElementById("txtIdImporte").value);

	//document.getElementById("txtIdResultado").value = (Sueldo * 1.1).toFixed(2);

	document.getElementById("txtIdResultado").value = Sueldo * 0.75;

}
