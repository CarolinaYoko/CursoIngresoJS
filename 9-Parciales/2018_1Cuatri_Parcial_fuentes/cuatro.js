function mostrar() { //Me faltaría validar
    let Num1 = 0;
    let Num2 = 0;

    do{
    Num1 = parseInt(prompt("Ingrese el primer número"));
    Num2 = parseInt(prompt("Ingrese el segundo número"));
    }
    while((isNaN(Num2) || isNaN(Num1)));

    if (Num1 == Num2) {
        alert("Ingresaste " + Num1 + " y " + Num2);
    }
    else if (Num1 > Num2) {
        alert("La resta es " + (Num1 - Num2));
    }
    else {
        alert("La suma es " + (Num1 + Num2));
    }
    if ((Num1 + Num2) > 10) {
        alert("La suma es " + (Num1 + Num2) + " y supero el 10");
    }

}