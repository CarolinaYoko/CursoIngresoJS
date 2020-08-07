function mostrar() {
	
	let Num;
	Num = parseInt(prompt("Ingresar número"));
	for (i = 1; i < Num; i++) {
	
		if (Num % i == 0) {
			alert("El número " + i + " es divisor de " + Num);
		}
	}
}
	
	//FIN DE LA FUNCIÓN