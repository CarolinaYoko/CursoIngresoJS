/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar() {	// declarar variables
	let i = 0; //Bandera del primero
	let nIngresado;
	let nMaximo;
	let nMinimo;
	let respuesta;
	respuesta = "si";

	do {
		nIngresado = parseInt(prompt("Ingresar un número: "));

		if (i == 0) {
			nMaximo = nIngresado;
			nMinimo = nIngresado;
		}

		if (nIngresado >= nMaximo) {
			nMaximo = nIngresado;
		}

		else if (nIngresado <= nMinimo) {
			nMinimo = nIngresado;
		}
		i++;
		respuesta = prompt("desea continuar?");

	} while (respuesta == "si");

	document.getElementById("txtIdMaximo").value = nMaximo;
	document.getElementById("txtIdMinimo").value = nMinimo;

}


function mostrar() {	// declarar variables
	let i = 0; //Bandera del primero
	let nIngresado;
	let nMaximo;
	let nMinimo;
	let respuesta;
	respuesta = "si";

	do {
		nIngresado = parseInt(prompt("Ingresar un número: "));

		if (i == 0) {
			nMaximo = nIngresado;
			nMinimo = nIngresado;
		}

		if (nIngresado >= nMaximo) {
			nMaximo = nIngresado;
		}

		else if (nIngresado <= nMinimo) {
			nMinimo = nIngresado;
		}
		i++;
		respuesta = prompt("desea continuar?");

	} while (respuesta == "si");

	document.getElementById("txtIdMaximo").value = nMaximo;
	document.getElementById("txtIdMinimo").value = nMinimo;

}
/*

function mostrar() {	// declarar variables
	let i = 0; //Bandera del primero
	let nIngresado;
	let nMaximo;
	let nMinimo;
	let respuesta;
	let bandera = 0;
	respuesta = "si";

	  do {
		nIngresado = parseInt(prompt("Ingresar un número: "));

		if (nIngresado >= nMaximo || bandera ==0) {
			nMaximo = nIngresado;
		}

		else if (nIngresado <= nMinimo || bandera ==0) {
			nMinimo = nIngresado;
			bandera = 1
		}

		respuesta = prompt("¿desea continuar?");

	} while (respuesta == "si");

	document.getElementById("txtIdMaximo").value = nMaximo;
	document.getElementById("txtIdMinimo").value = nMinimo;

}

*/






//FIN DE LA FUNCIÓN