function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
	let vMaximo = 10; // inicializar es dar un valor a la variable. "a partir de allí empezamos a contar"
	let vMinimo = 1;
	let vNum;

	vNum = Math.round( Math.random()* (vMaximo - vMinimo) + vMinimo);

	alert(vNum);	


}//FIN DE LA FUNCIÓN

    // Math.floor redondea al entero inferior
	// Math.random números al azar del 0 al 1
	// Math.ceil redondea hacia arriba
	// Math.round redondea para abajo
