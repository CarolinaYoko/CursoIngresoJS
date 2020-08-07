function mostrar() {
	let Num;
	let Div = 0

	Num = parseInt(prompt("Ingrese un número",));

	for (i = 1; i < Num; i++) {

		if (Num % i == 0 && i > Div) {
			Div = i;
		}
	}
	if (Div == 1) {
		console.log(Num + " es primo" + Div);
	}

	else {
		console.log(Num + " es compuesto" + Div);
	}

}//FIN DE LA FUNCIÓN