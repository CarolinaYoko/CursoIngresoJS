function mostrar() {
  /*Enunciado:
  
  Realizar el algoritmo que permita ingresar los datos de una compra de productos de la construccion, hasta que el cliente quiera:
  Tipo validad("arena";"cal";"cemento")
  Cantidad de bolsas,
  Precio por bolsa (más de cero ),
  al terminar la compra el cliente accede a un descuento segun las bolsas en total
  Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
  Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
  a) El importe total a pagar , bruto sin descuento y...
  b) el importe total a pagar con descuento(solo si corresponde)
  d) Informar el tipo ("arena";"cal";"cemento") con mas cantidad de bolsas en el total de la compra.
  f) El tipo mas caro*/


  let tipo;
  let cantbolsas;
  let precioU;
  let preciobruto;
  let totalpreciobruto = 0;
  let banderadelprimero = 0;
  let tipopreciomax;
  let preciomax;
  let acumuladorBolsas = 0;
  let acumuladorBolsasArena = 0;
  let acumuladorBolsasCal = 0;
  let acumuladorBolsasCemento = 0;
  let porcentaje;
  let descuento;
  let preciodescu;
  let tipoMasCantidad;

  do {
    do {
      tipo = prompt("ingresar el tipo de bolsa: arena, cal o cemento");
    } while (!(tipo == "arena" || tipo == "cal" || tipo == "cemento"));
    do {
      cantbolsas = parseInt(prompt("ingresar la cantidad de bolsas"));
    } while (isNaN(cantbolsas));
    do {
      precioU = parseInt(prompt("ingresar el precio unitario"));
    } while (isNaN(precioU));


    preciobruto = cantbolsas * precioU;
    totalpreciobruto = totalpreciobruto + preciobruto;
    acumuladorBolsas += cantbolsas;

    if (banderadelprimero == 0 || preciomax < precioU) {
      banderadelprimero = 1;
      tipopreciomax = tipo;
      preciomax = precioU;
    }

    switch (tipo) {
      case "arena":
        acumuladorBolsasArena += cantbolsas;
        break;
      case "cal":
        acumuladorBolsasCal += cantbolsas;
        break;
      case "cemento":
        acumuladorBolsasCemento += cantbolsas;
        break;
    }

    respuesta = prompt("¿desea ingresar más productos?");
  } while (respuesta == "s");


  if (acumuladorBolsas > 30) {
    porcentaje = 25;
  }
  else if (acumuladorBolsas > 10) {
    porcentaje = 15;
  }
  else {
    porcentaje = 0;
  }


  if (acumuladorBolsasArena > acumuladorBolsasCal && acumuladorBolsasArena > acumuladorBolsasCemento) {
    tipoMasCantidad = "arena";
  }
  else if (acumuladorBolsasCal > acumuladorBolsasCemento) {
    tipoMasCantidad = "cal";
  }
  else {
    tipoMasCantidad = "cemento";

  }


  descuento = totalpreciobruto * porcentaje / 100;
  preciodescu = totalpreciobruto - descuento;

  console.log("El importe bruto es: " +totalpreciobruto );
  console.log("El importe total a pagar con descuento es: " + preciodescu);
  console.log("El tipo con mas cantidad de bolsas en el total de la compra es: " + tipoMasCantidad);
  console.log("El tipo mas caro es: " + tipopreciomax);






}
