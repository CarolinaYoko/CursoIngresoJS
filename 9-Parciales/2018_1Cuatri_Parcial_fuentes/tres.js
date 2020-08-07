function mostrar() {
    let Precio;
    let Descuento;
    let PrecioF;

    Precio = parseInt(prompt("ingrese el precio",));
    Descuento = parseInt(prompt("ingrese el descuento",));

    PrecioF = Precio - (Precio * Descuento)/100;
    document.getElementById("elPrecioFinal").value = PrecioF;
}
