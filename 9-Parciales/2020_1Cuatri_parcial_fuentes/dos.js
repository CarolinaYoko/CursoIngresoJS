function mostrar() {
  let Tipo;
  let Cantbolsas = 0;
  let PrecioU;
  let preciobrutoU = 0;
  let preciobrutoTotal = 0;
  let descuento;
  let porcentaje;
  let Preciodesc;
  let respuesta;
  let sumaarena = 0;
  let sumacal = 0;
  let sumacemento = 0;
  let acumbolsas = 0
  let banderaDelPrimerProducto="es el primero";
  let tipoMasCaro;
  let tipoMasCaroPrecio;
  let tipoConMasUnidades;


  do {
    do {
      Tipo = prompt("Ingrese un tipo: arena, cal o cemento");
    } while (!(Tipo == "arena" || Tipo == "cal" || Tipo == "cemento"));
    do {
      Cantbolsas = parseInt(prompt("ingrese la cantidad de bolsas"));
    } while (isNaN(Cantbolsas));
    do {
      PrecioU = parseInt(prompt("Ingrese el precio"));
    } while (PrecioU < 0);
    //------------------ fin validaciones ------------------

     //f) El tipo mas caro

  	if(banderaDelPrimerProducto=="es el primero")
  	{
  		banderaDelPrimerProducto="ya paso";
  		tipoMasCaro=Tipo;
  		tipoMasCaroPrecio=PrecioU;
  	}else
  	{
  		if(PrecioU>tipoMasCaroPrecio)
  		{
  			tipoMasCaro=Tipo;
  			tipoMasCaroPrecio=PrecioU;
  		}
  	}

    //a) El importe total a pagar , bruto sin descuento y...

    //b) el importe total a pagar con descuento(solo si corresponde)}

    preciobrutoU = PrecioU * Cantbolsas;
    acumbolsas = acumbolsas + Cantbolsas;
    preciobrutoTotal = preciobrutoTotal + preciobrutoU;

    //d) Informar el tipo con mas cantidad de bolsas.
    switch (Tipo) {
      case "arena":
        sumaarena = sumaarena + Cantbolsas;
        break;
      case "cal":
        sumacal = sumacal + Cantbolsas;
        break;
      case "cemento":
        sumacemento = sumacemento + Cantbolsas;
        break;
    }



    respuesta = prompt("¿desea continuar? s/n");

  } while (respuesta == "s");


  //a) El importe total a pagar , bruto sin descuento y...

  //b) el importe total a pagar con descuento(solo si corresponde)}

  if (acumbolsas < 10) {
    porcentaje = 0;
  }
  else if (acumbolsas > 10 && acumbolsas < 30) {
    porcentaje = 15;
  }
  else {
    porcentaje = 25;
  }

  if (porcentaje != 0) {
    descuento = preciobrutoTotal * porcentaje / 100;
    Preciodesc = preciobrutoTotal - descuento;
    console.log("El importe total a pagar con descuento es: " + Preciodesc);
  }
  //d) Informar el tipo con mas cantidad de bolsas
  if (sumaarena > sumacal && sumaarena > sumacemento) {
    tipoConMasUnidades = "arena";
  }
  else if (sumacal > sumacemento) {
    tipoConMasUnidades = "cal";
  }
  else {
    tipoConMasUnidades = "cemento";
  }

  console.log("El importe bruto sin descuento: " + preciobrutoTotal);
  console.log("el tipo mas comprado es: " + tipoConMasUnidades);
  console.log("el tipo mas caro  es: " + tipoMasCaro);



}