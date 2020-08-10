
function mostrar() {
	let Tipo;
	let Precio;
	let CantU;
	let Marca;
	let Fabricante;
	let CantMaxA = 0;
	let CantMaxB = 0;
	let CantMaxJ = 0;
	let PrecioMinAl = 0;
	let flagalcohol = 0;
	let FabricanteMinAl;
	let CantMinAl;
	let SumaPrecioA = 0;
	let SumaPrecioJ = 0;
	let SumaPrecioB = 0;

	for (i = 0; i < 5; i++) {
		do {
			Tipo = prompt("Ingresar el tipo: barbijo, jabón o alcohol");
		} while (!(Tipo == "barbijo" || Tipo == "jabón" || Tipo == "alcohol"));
		do {
			Precio = parseInt(prompt("Ingresar el precio entre 100 y 300"));
		} while (!(Precio < 300 && Precio > 100));
		do {
			CantU = parseInt(prompt("Ingresar la cantidad de unidades entre 0 y 1000"));
		} while (!(CantU > 0 && CantU < 1000));

		Marca = prompt("Ingresar la marca");
		Fabricante = prompt("Ingresar el fabricante");

		switch (Tipo) {
			case "alcohol":
				if (flagalcohol == 0) {
					flagalcohol = 1;
					PrecioMinAl = Precio;
					CantMinAl = CantU;
					FabricanteMinAl = Fabricante;
				}
				else if (PrecioMinAl > Precio) {
					PrecioMinAl = Precio;
					CantMinAl = CantU;
					FabricanteMinAl = Fabricante;
				}
				SumaPrecioA = SumaPrecioA + Precio;
				CantMaxA = CantMaxA + CantU;
				break;
			case "jabón":
				SumaPrecioJ = SumaPrecioJ + Precio;
				CantMaxJ = CantMaxJ + CantU;
				break;
			case "barbijo":
				SumaPrecioB = SumaPrecioB + Precio;
				CantMaxB = CantMaxB + CantU;
				break;
		}

	}
	if (CantMaxA > CantMaxB && CantMaxA > CantMaxJ) {
		Promedio = SumaPrecioA / CantMaxA;
	}
	else if (CantMaxB > CantMaxJ) {
		Promedio = SumaPrecioB / CantMaxB;
	}
	else {
		Promedio = SumaPrecioJ / CantMaxJ;
	}

	console.log("Del más barato de los alcohol, la cantidad de unidades es:" + CantMinAl + "y el fabricante es: " + FabricanteMinAl + "<br>");
	console.log("DEl tipo con más unidades, el promedio de compra es: " + Promedio + "<br>");
	console.log("La cantidad de unidades de Jabones es: " + CantMaxJ);

}



