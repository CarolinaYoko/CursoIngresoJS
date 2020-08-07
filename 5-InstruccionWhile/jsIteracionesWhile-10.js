/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	let respuesta;
	let nIngresado;
	let sumaNegativos=0;
	let sumaPositivos=0;
	let cantNegativos=0;
	let cantPositivos=0;
	let cantCeros=0;
	let cantPares=0;
	let promPositivos=0;
	let promNegativos=0;
	let diferencia=0;

	respuesta="si";

	while(respuesta=="si")
	{
		nIngresado = parseInt(prompt("Ingrese un número: "));

		if(nIngresado>0){
			sumaPositivos=nIngresado+sumaPositivos;	
			cantPositivos++
			promPositivos = sumaPositivos/cantPositivos;
		}
		else if (nIngresado<0){
			sumaNegativos=nIngresado+sumaNegativos;
			cantNegativos++;
			promNegativos = sumaNegativos / cantNegativos;
		}
		else if (nIngresado ==0){
			cantCeros++;
		}
		if (nIngresado % 2 == 0){
			cantPares++;
		}
		diferencia = sumaPositivos - sumaNegativos
		
		respuesta=prompt("desea continuar?");
	}//fin del while

	document.write("La suma de negativos es: "+sumaNegativos + "<br>");
	document.write("La suma de positivos es: "+sumaPositivos+ "<br>");
	document.write("La cantidad de negativos es: "+cantNegativos+ "<br>");
	document.write("La cantidad de positivos es: "+cantPositivos+ "<br>");
	document.write("La cantidad de ceros: "+cantCeros+ "<br>");
	document.write("La cantidad de números pares: "+cantPares+ "<br>");
	document.write("El promedio de los números positivos es: "+promPositivos+ "<br>");
	document.write("El promedio de los números negativos es: "+promNegativos+ "<br>");
	document.write("La diferencia entre positivos y negativos es: "+diferencia);
	
	/*document.write("\nLa suma de negativos es: "+sumaNegativos);  // \n para espacio, un caracter
	document.write("\nLa suma de positivos es: "+sumaPositivos);
	document.write("\nLa cantidad de negativos es: "+cantNegativos);
	document.write("\nLa cantidad de positivos es: "+cantPositivos);
	document.write("\nLa cantidad de ceros: "+cantCeros);
	document.write("\nLa cantidad de números pares: "+cantPares);
	document.write("\nEl promedio de los números positivos es: "+promPositivos);
	document.write("\nEl promedio de los números negativos es: "+promNegativos);
	document.write("\nLa diferencia entre positivos y negativos es: "+diferencia);*/



}//FIN DE LA FUNCIÓN