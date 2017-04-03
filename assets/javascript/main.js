var cajaDeTexto = document.getElementById("cajaTexto");
var contador = 0;
var contadorClick = 0;

function contarCaracteres() {
	contador ++;
	console.log(contador);
	document.getElementById("contadorfinal").innerHTML = contador;
}

function click() {
	contadorClick ++;
	console.log(contadorClick);
	document.getElementById("contenedorClicks").innerHTML = contadorClick;
}

/*ciclo:
evento en variable
variale que decremente
contacor - contador2
 cada vez que identifique el evento, sumalo
 y eso restalo al contador*/