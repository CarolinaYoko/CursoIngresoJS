function mostrar() {
	let Num=0;
	let cont=0;
	
	Num = parseInt(prompt("Ingresar número"));

	for(i=1;i<Num;i++){
	
		if(Num%2==0){
			alert("El número " +i+ " es par");
			cont++;
		}
		alert("Se ingresaron: " + cont + "números pares");	

	}



}//FIN DE LA FUNCIÓN