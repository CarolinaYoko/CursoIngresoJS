/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar() {
	var vNombre;

	vNombre = document.getElementById("txtIdNombre").value;
	alert(vNombre)

	/*var nombreIngresado;
	nombreIngresado=txtIdNombre.value; <-- puede que haya navegadores que no lo interpretan
	nos conviene usar cosas estandart. Eso (txtIdNombre.value) es algo que ofrece el navegador pero no es estandart... 
	alert("ok");*/

}

/*Enunciado c)”mixing bandera”
de una cantidad de animales indeterminada del 
zoológico debemos tomar lo siguiente:
raza
peso
temperatura media del lugar donde habita
edad
si está en peligro de extinción( si o no)
se debe informar:

1-el promedio de edad total
2-la raza del más pesado
3-la temperatura máxima ingresada de los animales en extinción
NOTA:pedir datos por "prompt()" y mostrar por console.log()*/

let raza;
let peso = 0;
let temperaturamedia = 0;
let edad = 0;
let peligro;
let contadoranimales=0
let respuesta;
let sumaedad = 0;
let razaPmax;
let pesomax;
let banderapesado = "es el primero";
let banderatemp= "es el primero";
let tempmax;


do {
	raza = prompt("Ingrese la raza");
	peso = parseInt(prompt("Ingrese el peso"));
	temperaturamedia = parseInt(prompt("Ingrese la temperatura"));
	edad = parseInt(prompt("Ingrese la edad"));
	peligro = prompt("Está en peligro de extinción: si o no");

	//el promedio de edad total
	sumaedad = sumaedad + edad;
	contadoranimales++;
	
	//la raza del más pesado
	if (banderapesado == "es el primero") {
		banderapesado = "ya paso";
		razaPmax = raza;
		pesomax = peso;
	}
	else if (peso > pesomax) {
		razaPmax = raza;
		pesomax = peso;
	}

	//la temperatura máxima ingresada de los animales en extinción

	if (peligro == "si") {
		if (banderatemp == "es el primero") {
			banderatemp = "ya paso";
			tempmax = temperaturamedia;
		}
		else if (tempmax < temperaturamedia) {
			tempmax = temperaturamedia;
		}
	}

	respuesta = prompt("¿desea continuar ingresando: s/n?");

} while (respuesta == "s");
promedio = (sumaedad / contadoranimales).toFixed(2);
console.log("el promedio de edad total es: "+promedio);
console.log("la raza del más pesado es: "+razaPmax);
console.log("a temperatura máxima ingresada de los animales en extinción es: "+tempmax);










