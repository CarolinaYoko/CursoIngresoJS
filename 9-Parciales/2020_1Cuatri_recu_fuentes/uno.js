
function mostrar() {
	let tipo;
	let precio;
	let unidades;
	let marca;
	let fabricante;
	let acumuladorBarbijos = 0;
	let acumuladorAlcohol = 0;
	let acumuladorJabones = 0;
	let acumuladorBarbijosPrecio = 0;
	let acumuladorJabonesPrecio = 0;
	let acumuladorAlcoholPrecio = 0;
	let precioJabonMax;
	let banderaJabon = 0;
	let unidadesJabonMax;
	let fabricanteJabonMax;
	let cantidadT;
	let precioT;
	let promedio;

	for (i = 0; i < 5; i++) {

		do {
			tipo = prompt('Ingrese un tipo de producto : "barbijo" , "jabón" o "alcohol"');
		} while (!(tipo == "barbijo" || tipo == "jabón" || tipo == "alcohol"));
		do {
			precio = parseInt(prompt('Ingrese el precio (entre $100 y $300)'));
		} while (precio < 100 || precio > 300);
		do {
			unidades = parseInt(prompt('Ingrese la cantidad de unidades (entre 0 y 1000)'));
		} while (unidades < 0 || unidades >=1000);
		marca = prompt("Ingrese la marca");
		fabricante = prompt("ingrese el nombre de la fábrica");

		switch (tipo) {
			case "barbijo":
				acumuladorBarbijos += unidades;
				acumuladorBarbijosPrecio += precio;
				break;

			case "jabón":
				acumuladorJabones += unidades;
				acumuladorJabonesPrecio += precio;
				if (banderaJabon == 0 || precio > precioJabonMax) {
					banderaJabon = 1;
					precioJabonMax = precio;
					unidadesJabonMax = unidades;
					fabricanteJabonMax = fabricante;
				}
				break;
			case "alcohol":
				acumuladorAlcohol += unidades;
				acumuladorAlcoholPrecio += precio;
				break;
		}

	}

	if (acumuladorAlcohol > acumuladorBarbijos && acumuladorAlcohol > acumuladorJabones) {
		productoMaspedido = "alcohol";
		cantidadT = acumuladorAlcohol;
		precioT = acumuladorAlcoholPrecio;

	}
	else if (acumuladorBarbijos > acumuladorJabones) {
		productoMaspedido = "barbijo";
		cantidadT = acumuladorBarbijos;
		precioT = acumuladorBarbijosPrecio;

	}
	else {
		productoMaspedido = "jabón";
		cantidadT = acumuladorJabones;
		precioT = acumuladorJabonesPrecio;

	}

	promedio = (precioT / cantidadT).toFixed(2);

	console.log("Del más caro de los jabones, la cantidad de unidades es: " + unidadesJabonMax + " y el fabricante: " + fabricanteJabonMax);
	console.log("Del tipo de producto con más unidades en total de la compra, el promedio por compra es: " + promedio);
	console.log("La cantidad de unidades de Barbijos se compraron en total es: " + acumuladorBarbijos);

}
/*
Debemos realizar la carga de una compra de 5(cinco) productos de prevención de contagio,
	de cada una debo obtener los siguientes datos:
el tipo de producto(validar "barbijo", "jabón" o "alcohol"),
	el precio(validar entre 100 y 300),
		la cantidad de unidades(no puede ser 0 o negativo y no debe superar las 1000 unidades),
			la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más caro de los jabones, la cantidad de unidades y el fabricante
b) Del tipo de producto con más unidades en total de la compra, el promedio por compra
c) Cuántas unidades de Barbijos se compraron en total*/