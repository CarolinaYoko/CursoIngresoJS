function mostrar() {/*Enunciado:
    Bienvenidos.
    Realizar el algoritmo que permita el ingreso por prompt de las alturas en centimetros(validar entre 0 y 250) , 
    el sexo. (validar el sexo “f” o “m”) de 5 jugadores de básquet, informar por alert:
    a) El promedio de las alturas totales.
    b) La altura más baja y el sexo de esa persona.
    c) La cantidad de muheres que su altura supere los 190 centimetros.*/

    let altura;
    let sexo;
    let promedio;
    let acumuladorAltura = 0;
    let banderadelprimero = 0;
    let contadormujeres = 0;
    let sexomenor;
    let menoraltura;

    for (i = 0; i < 5; i++) {
        do {
            altura = parseInt(prompt("ingrese la altura es centímetros"));
        } while (altura < 0 || altura > 250 || isNaN(altura));
        do {
            sexo = prompt("Ingrese su sexo (f o m)");
        } while (!(sexo == "f" || sexo == "m"));

        // El promedio de las alturas totales.
        acumuladorAltura += altura;
        
        // La altura más baja y el sexo de esa persona.
        if (banderadelprimero == 0 || altura < menoraltura) {
            banderadelprimero = 1;
            menoraltura = altura;
            sexomenor = sexo;
        }
        // La cantidad de muheres que su altura supere los 190 centimetros.

        if (sexo == "f" && altura > 190) {
            contadormujeres++;
        }
    }
    promedio = acumuladorAltura / 5;

    console.log("El promedio de las alturas totales es:" +promedio);
    console.log("La altura más baja es: "+ menoraltura+ " y el sexo de esa persona es: "+ sexomenor);
    console.log("La cantidad de muheres que su altura supere los 190 centimetros es: "+contadormujeres );


}
