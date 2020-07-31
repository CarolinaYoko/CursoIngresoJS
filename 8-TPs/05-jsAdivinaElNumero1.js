/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/

let nSecreto;
let nIngresado;
let vMax = 100;
let vMin = 1;
let i = 0;

function comenzar() { //Genero el número RANDOM entre 1 y 100

  nSecreto = Math.round(Math.random() * (vMax - vMin) + vMin);   //alert(nSecreto);
  i=0;
  document.getElementById("txtIdIntentos").value = ""
  document.getElementById("txtIdNumero").value = ""
}

function verificar() {

  nIngresado = parseInt(document.getElementById("txtIdNumero").value);
  i ++;
  document.getElementById("txtIdIntentos").value = i;

  if (nSecreto == nIngresado) {
    alert("Usted es un ganador y en solo " + i + " intentos");
  }
  else if  (nSecreto < nIngresado) {
    alert("Te pasaste del número secreto");
  }
  else {
    alert("Falta para el número secreto");
  }
  

  }

