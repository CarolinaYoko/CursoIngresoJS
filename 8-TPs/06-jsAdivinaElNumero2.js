/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

let nSecreto;
let nIngresado;
let contador = 0;
let vMax = 100
let vMin = 0

function comenzar() {
	//Genero el número RANDOM entre 1 y 100
	nSecreto = Math.round(Math.random() * (vMax - vMin) + vMin);
	contador = 0
	document.getElementById("txtIdNumero").value = "";
	document.getElementById("txtIdIntentos").value = "";
}

function verificar() {
	nIngresado = parseInt(document.getElementById("txtIdNumero").value);
	contador++;

	if (nIngresado >= 0 && nIngresado <= 100) {

		if (nIngresado == nSecreto) {
			switch (contador) {
				case 1:
					alert("Usted es un Psíquico");
					break;
				case 2:
					alert("Excelente percepción");
					break;
				case 3:
					alert("Esto es suerte");
					break;
				case 4:
					alert("Excelente técnica");
					break;
				case 5:
					alert("Usted está en la media");
					break;
				case 6:
					alert("Falta técnica");
					break;
				case 7:
					alert("Falta técnica");
					break;
				case 8:
					alert("Falta técnica");
					break;
				case 9:
					alert("Falta técnica");
					break;
				case 10:
					alert("Falta técnica");
					break;
				default:
					alert("Afortunado en el amor!!");
					break;
			}
		}
		else if (nIngresado <= nSecreto) {
			alert("Falta para el número")
		}
		else if (nIngresado >= nSecreto) {
			alert("Te pasaste del número")
		}

		document.getElementById("txtIdIntentos").value = contador
	}
	else {
		alert("No es un número válido");
	}

}