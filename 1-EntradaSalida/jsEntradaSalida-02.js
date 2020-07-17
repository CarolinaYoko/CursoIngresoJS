/*
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{ 
	//declarar una constante
	const cNombre = "Pepe"

	//declaración. JS me reserva memoria para mi info
	var VNombre;
	var VApellido; 

    //Asignación
	VNombre = prompt("Nombre","Insertar nombre" ); 
	alert(VNombre);

	VApellido = prompt("Apellido","Insertar apellido")
	alert(VApellido)

}

