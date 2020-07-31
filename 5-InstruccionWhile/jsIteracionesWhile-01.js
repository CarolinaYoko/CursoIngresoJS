/*
al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 10.*/
function mostrar() {

	let i = 1; //variable de control o contador/acumulador y hay que inicializarlo porque puede que 

	while (i <= 10) {

		alert("Número ascendente " + i);

		i = i + 1; // =	i++;
	}
	alert("fuera while");



}//FIN DE LA FUNCIÓN

/*function mostrar() {

	let i = 0; //variable de control o contador/acumulador y hay que inicializarlo porque puede que

	while (i<3)
	{
		if (i==1)
		{
			alert("iteración while if " + i );
		}
		else{
			alert("iteración while else " + i );
		}
		i=i+1; // =	i++;
	}
	alert("fuera while");


}*/