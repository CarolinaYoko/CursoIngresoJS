function mostrar() {
	let Num;
	let Div = 0

	do {
		Num = parseInt(prompt("Ingresar número"));
	} while (Num <=1 || isNaN(Num))

	for (let i = 1; i < Num; i++) {
		if (Num % i == 0 && i > Div) {
			Div = i
			//Div++;
		}
	}
	if (Div == 1 ) {
		console.log(Num + " es primo" );
	}
	else {
		console.log(Num + " es compuesto" );
	}

}//FIN DE LA FUNCIÓN