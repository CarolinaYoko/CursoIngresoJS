function mostrar() {
	
	let Num;
	let Cant;
	
	for (i = 1; i < Num; i++) {
	
		if (Num % i == 0) {
			alert("El número " + i + " es divisor de " + Num);
			Cant ++;
		}
	}
	alert("La cantidad de divisores es " + Cant);

}
	
	//FIN DE LA FUNCIÓN