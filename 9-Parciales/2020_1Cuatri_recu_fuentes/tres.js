function mostrar() {

	/*Enunciado:
		Bienvenidos.
		En el ingreso a un viaje en avión nos solicitan nombre, nacionalidad , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
		a) la Nacionalidad de la persona con mas temperatura.
		b) Cuantos mayores de edad( más de 17) estan solteros
		c) La cantidad de Mujeres que hay solteras o viudas.
		d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
		e) El promedio de edad entre las mujeres casadas.*/


	let nombre;
	let nacionalidad;
	let edad;
	let sexo;
	let estadocivil;
	let temperatura;
	let respuesta;
	let tempmax;
	let nacionalidadTmax;
	let banderanacionalidad =0;
	let contadorMS = 0;
	let contadorFSV = 0;
	let contadorMT = 0;
	let contadorFC = 0;
	let acumuladorEdad = 0;

	do {
		do {
			nombre = prompt("Ingrese nombre");
		} while (!(isNaN(nombre)));
		do {
			nacionalidad = prompt("Ingrese su nacionalidad");
		} while (!(isNaN(nacionalidad)));
		do {
			edad = parseInt(prompt("ingrese edad"));
		} while (isNaN(edad));
		do {
			sexo = prompt("ingrese su sexo: f o m");
		} while (!(sexo == "m" || sexo == "f"));
		do {
			estadocivil = prompt('Ingrese su estado civil:"soltero", "casado" o "viudo"');
		} while (!(estadocivil == "soltero" || estadocivil == "casado" || estadocivil == "viudo"));
		do {
			temperatura = parseInt(prompt("Ingrese su temperatura corporal"))
		} while (isNaN(temperatura));

		//la Nacionalidad de la persona con mas temperatura.
		if (banderanacionalidad == 0 || tempmax < temperatura) {
			banderanacionalidad = 1;
			tempmax = temperatura;
			nacionalidadTmax = nacionalidad;
		}

		//Cuantos mayores de edad( más de 17) estan solteros

		if (edad > 17 && estadocivil == "soltero") {
			contadorMS++;
		}
		//La cantidad de Mujeres que hay solteras o viudas.
		if (sexo == "f" && (estadocivil == "soltero" || estadocivil == "viudo")) {
			contadorFSV++;
		}

		//cuantas personas de la tercera edad(mas de 60 años), tienen mas de 38 de temperatura

		if (edad > 60 && temperatura > 38) {
			contadorMT++;
		}

		// El promedio de edad entre las mujeres casadas
		if (sexo == "f" && estadocivil == "casado") {
			contadorFC++;
			acumuladorEdad += edad;
			promedio = (acumuladorEdad / contadorFC).toFixed(2);
		}

		respuesta = prompt("¿desea continuar ingresando datos?: s/n ")

	} while (respuesta == "s")

	console.log("la Nacionalidad de la persona con mas temperatura es: " + nacionalidadTmax);
	console.log("la cantidad de mayores de edad( más de 17) que estan solteros son: " + contadorMS);
	console.log("La cantidad de Mujeres que hay solteras o viudas son: " + contadorFSV);
	console.log("la cantidad de personas de la tercera edad( mas de 60 años) quetienen mas de 38 de temperatura es: " + contadorMT);
	if(contadorFC ==0){
		console.log("error. No se han ingresado mujeres casadas");
	}
	else{
		console.log("El promedio de edad entre las mujeres casadas es: " + promedio);
	}

}
