function mostrar() {
    let letra;
    let numero;
    let contadorPares = 0;
    let contadorImpares = 0;
    let contadorCeros = 0;
    let promediopositivos;
    let acumuladorPositivos = 0;
    let contadorPositivos = 0;
    let acumuladorNegativos = 0;
    let banderaMyM = 0;
    let minimo;
    let maximo;
    let letramin;
    let letramax;


    do {
        letra = prompt("ingrese una letra");
        do {
            numero = parseInt(prompt("ingrese un número del -100 al 100"));
        } while (numero < -100 || numero > 100);

        if (numero == 0) {
            contadorCeros++;
        }
        if (numero % 2 == 0) {
            contadorPares++;
        }
        else {
            contadorImpares++
        }

        if (numero > 0) {
            contadorPositivos++;
            acumuladorPositivos += numero;
            promediopositivos = acumuladorPositivos / contadorPositivos;
        }
        else {
            acumuladorNegativos += numero;
        }

        if (banderaMyM == 0) {
            banderaMyM = 1;
            minimo = numero;
            maximo = numero;
            letramin = letra;
            letramax = letra;
        }
        if (maximo < numero) {
            maximo = numero;
            letramax = letra;
        }
        else if (minimo > numero) {
            minimo = numero;
            letramin = letra;
        }

        respuesta = prompt("¿desea ingresar otros datos?");
    } while (respuesta == "s");

    document.write("La cantidad de números pares es: " + contadorPares + "<br>");
    document.write("La cantidad de números impares es: " + contadorImpares + "<br>");
    document.write("La cantidad de ceros es: " + contadorCeros + "<br>");
    document.write("El promedio de todos los números positivos ingresados es: " + promediopositivos + "<br>");
    document.write("La suma de todos los números negativos es: " + acumuladorNegativos + "<br>");
    document.write("El número y la letra del máximo es: " + maximo + " y " + letramax + "<br>");
    document.write("El número y la letra del mínimo es" + minimo + " y " + letramin + "<br>");

}
/*Enunciado:
Bienvenidos.
Realizar el algoritmo que permita iterar el ingreso de dos datos,
una letra y un número entre -100 y 100 (validar)
hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de números pares.
b) La cantidad de números impares.
c) La cantidad de ceros.
d) El promedio de todos los números positivos ingresados.
e) La suma de todos los números negativos.
f) El número y la letra del máximo y el mínimo.

Testeo con los siguientes datos
( d , -150(mal) , -50(bien))
( z , 0)
( g , 20)
( a , 150(mal) , 0(bien))
( b , 3)
( k , 7)*/