/*
al presionar el botón mostrar 10 repeticiones 
con números DESCENDENTES, desde el 10 al 1.*/
function mostrar() {
	let i = 10; //variable de control o contador/acumulador y hay que inicializarlo porque puede que 

	while (i > 0) {

		alert("Número descendente " + i);

		i = i - 1; // =	i++;
	}
	alert("fuera while");


}//FIN DE LA FUNCIÓN