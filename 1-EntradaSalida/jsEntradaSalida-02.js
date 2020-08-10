/*
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar() {
	//declarar una constante
	const cNombre = "Pepe"

	//declaración. JS me reserva memoria para mi info
	var VNombre;
	var VApellido;

	//Asignación
	VNombre = prompt("Nombre", "Insertar nombre");
	alert(VNombre);

	VApellido = prompt("Apellido", "Insertar apellido")
	alert(VApellido)

}

/*
Enunciado b)”sin banderas”
Se debe ingresar 10:
nombre
edad(0 y 115)
altura(30 y 230)
sexo
Dinero(puede ser positivo o negativo, pero debe ser un número)
CantidadDeHijos(0 y 10)
despues de validar todos los datos,
se debe informar:

1- nombre de la persona con edad más vieja
2- promedio de altura de las mujeres
3- nombre de la mujer más joven
NOTA:pedir datos por "prompt()" y mostrar por console.log(),
verificar que los datos  exitan antes de mostrarlos*/


let nombre;
let edad;
let altura;
let sexo;
let Dinero;
let CantidadDeHijos = 0;
let NombrePersonaVieja;
let EdadPersonaVieja;
let BanderaPersonaVieja = "es la primera";
let CantidadMujeres = 0;
let SumaMujeresAltura = 0;
let BanderaMujerJoven = "es la primera";
let NombreMujerJoven;
let EdadMujerJoven;

for (i = 0; i < 10; i++) {
	//Validaciones
	nombre = prompt("Ingresar un nombre");
	do {
		edad = parseInt(prompt("Ingrese su edad (entre 0 y 115)"));
	} while (edad < 0 || edad > 115);

	do {
		altura = parseInt(prompt("Ingrese su altura en centímetros entre 30 y 230"));
	} while (altura < 30 || altura > 230);

	sexo = prompt("Ingrese su sexo. M o H");

	do {
		Dinero = parseInt(prompt("Ingrese la cantidad de dinero"));
	} while (isNaN(Dinero)); //puede ser positivo o negativo

	do {
		CantidadDeHijos = parseInt(prompt("Ingrese cantidad de hijos"));
	} while (CantidadDeHijos < 0 || CantidadDeHijos > 10);

	//Nombre de la persona mas vieja
	if (i==0) {
		NombrePersonaVieja = nombre;
		EdadPersonaVieja = edad;
	}
	else if (EdadPersonaVieja < edad) {
		NombrePersonaVieja = nombre;
		EdadPersonaVieja = edad;
	}
	//Promedio de altura de las mujeres
	if (sexo == "M") {
		CantidadMujeres++;
		SumaMujeresAltura = SumaMujeresAltura + altura;
		Promedio = (SumaMujeresAltura / CantidadMujeres).toFixed(2);
		// Nombre de la mujer más joven
		if (CantidadMujeres==1) {
			NombreMujerJoven = nombre;
			EdadMujerJoven = edad;
		}
		else if (EdadMujerJoven > edad) {
			NombreMujerJoven = nombre;
			EdadMujerJoven = edad;
		}
	}
}

console.log("El nombre de la persona mas vieja es: " + NombrePersonaVieja);

console.log("Promedio de altura de las mujeres es: " + Promedio);

console.log("El nombre de la mujer más joven es: " + NombreMujerJoven);




