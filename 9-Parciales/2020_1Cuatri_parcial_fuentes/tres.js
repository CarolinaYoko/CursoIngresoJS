function mostrar() {


	let nombre;
	let edad;
	let sexo;
	let estadocivil;
	let temp;
	let respuesta;
	let contadorMV = 0;
	let contadorHSV = 0;
	let contadorTE38 = 0;
	let contadorHS = 0;
	let acumuladorSEdad = 0;
	let acumuladorHSEdad=0;
	let tempmax;
	let nombreTmax;
	let flagtemp = 0;
	let promedio;

	do {

		nombre = prompt("Ingrese un nombre: ");

		do {
			edad = parseInt(prompt("ingrese edad: "));
		} while (isNaN(edad));
		do {
			temp = parseInt(prompt("ingrese su tempertatura corporal: "));
		} while (isNaN(temp));
		do {
			sexo = prompt("ingrese su sexo (f o m): ");
		} while (sexo != "f" && sexo != "m");
		do {
			estadocivil = prompt("ingrese su estado civil (soltero, casado o viudo): ");
		} while (!(estadocivil == "soltero" || estadocivil == "casado" || estadocivil == "viudo"));

		if (flagtemp == 0 || temp > tempmax) {
			flagtemp = 1;
			nombreTmax = nombre;
			tempmax = temp;
		}

		if (edad >= 18 && estadocivil == "viudo") {
			contadorMV++;
		}
		if (sexo == "m" && (estadocivil == "soltero" || estadocivil == "viudo")) {
			contadorHSV++;
		}
		if (edad > 60 && temp > 38) {
			contadorTE38++;
		}
		if (sexo == "m" && estadocivil == "soltero") {
			acumuladorHSEdad += edad;
			//acumuladorHSEdad = acumuladorHSEdad +edad;
			contadorHS++;
		}

		respuesta = prompt("¿desea seguir ingresando pasajeros?");
	} while (respuesta == "s")

	promedio = acumuladorHSEdad / contadorHS;

	console.log("El nombre de la persona con mas temperatura es: " + nombreTmax);
	console.log("La cantidad de mayores de edad que estan viudos es: " + contadorMV);
	console.log("La cantidad de hombres que hay solteros o viudos es: " + contadorHSV);
	console.log("La cantidad de personas de la tercera edad(mas de 60 años) que tienen mas de 38 de temperatura es: " + contadorTE38);
	
	if (contadorHS ==0){
		console.log("Error en promedio de edad porque no se ingresó ningún hombre soltero");
	}
	else {
		console.log("El promedio de edad entre los hombres soltero: " + promedio);
	}



}

/*
Enunciado:
Bienvenidos.
En el ingreso a un viaje en avion nos solicitan nombre, edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
	a) El nombre de la persona con mas temperatura.
		b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
	d) cuantas personas de la tercera edad(mas de 60 años), tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.*/