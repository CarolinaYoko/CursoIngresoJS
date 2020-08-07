let eleccionMaquina;
let vMax = 3;
let vMin = 1;
let ContadorDeEmpates = 0;
let ContadorDeGanadas = 0;
let ContadorDePerdidas = 0;

function comenzar() { //Genero el número RANDOM entre 1 y 3
	eleccionMaquina = Math.round(Math.random() * (vMax - vMin) + vMin);

}//FIN DE LA FUNCIÓN
function piedra() {
	switch (eleccionMaquina) {
		case 1:
			alert("Empataste");
			ContadorDeEmpates++;
			//document.getElementById("txtIdEmpatadas").value = ContadorDeEmpates;			
			break;
		case 2:
			alert("Perdiste");
			ContadorDePerdidas++;
			//document.getElementById("txtIdPerdidas").value = ContadorDePerdidas;
			break;
		case 3:
			alert("Ganaste");
			ContadorDeGanadas++;
			//document.getElementById("txtIdGanadas").value = ContadorDeGanadas;
			break;
	}
	eleccionMaquina = Math.round(Math.random() * (vMax - vMin) + vMin);
	document.getElementById("txtIdEmpatadas").value = ContadorDeEmpates;
	document.getElementById("txtIdPerdidas").value = ContadorDePerdidas;
	document.getElementById("txtIdGanadas").value = ContadorDeGanadas;


}//FIN DE LA FUNCIÓN
function papel() {
	switch (eleccionMaquina) {
		case 1:
			alert("Ganaste");
			ContadorDeGanadas++;
			//document.getElementById("txtIdGanadas").value = ContadorDeGanadas;
			break;
		case 2:
			alert("Empataste");
			ContadorDeEmpates++;
			//document.getElementById("txtIdEmpatadas").value = ContadorDeEmpates;
			break;
		case 3:
			alert("Perdiste");
			ContadorDePerdidas++;
			//document.getElementById("txtIdPerdidas").value = ContadorDePerdidas;
			break;
	}
	eleccionMaquina = Math.round(Math.random() * (vMax - vMin) + vMin);
	document.getElementById("txtIdEmpatadas").value = ContadorDeEmpates;
	document.getElementById("txtIdPerdidas").value = ContadorDePerdidas;
	document.getElementById("txtIdGanadas").value = ContadorDeGanadas;

}//FIN DE LA FUNCIÓN

function tijera() {
	switch (eleccionMaquina) {
		case 1:
			alert("Perdiste");
			ContadorDePerdidas++;
			//document.getElementById("txtIdPerdidas").value = ContadorDePerdidas;
			break;
		case 2:
			alert("Ganaste");
			ContadorDeGanadas++;
			//document.getElementById("txtIdGanadas").value = ContadorDeGanadas;
			break;
		case 3:
			alert("Empataste");
			ContadorDeEmpates++;
			//document.getElementById("txtIdEmpatadas").value = ContadorDeEmpates;
			break;
	}
	eleccionMaquina = Math.round(Math.random() * (vMax - vMin) + vMin);
	document.getElementById("txtIdEmpatadas").value = ContadorDeEmpates;
	document.getElementById("txtIdPerdidas").value = ContadorDePerdidas;
	document.getElementById("txtIdGanadas").value = ContadorDeGanadas;


}//FIN DE LA FUNCIÓN

/*function mostrarResultado() {
	document.getElementById("Juegos ganados").value = ContadorDeGanadas;
	document.getElementById("Juegos perdidos").value = ContadorDePerdidas;
	document.getElementById("Juegos empatados").value = ContadorDeEmpates;

}//Fin de la funcion*/
