function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
	let vMaximo = 10; 
	let vMinimo = 1;
	let vNum;
	
	vNum = Math.round( Math.random()* (vMaximo - vMinimo) + vMinimo);

	if (vNum < 4)
	{
		alert("Vamos, la próxima se puede");
	}

	else if( vNum >=4 && vNum <=8)
	{
		alert("APROBÓ");
	}

	else
	{
		alert("EXCELENTE");
	}

	


}//FIN DE LA FUNCIÓN