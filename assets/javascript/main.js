
/*var contadorClick = 0;*/

var cajaDeTexto = document.getElementById("cajaTexto");
var autorTweet = document.getElementById("autorDeTweet");
var contador = 0;

function contarCaracteres() {
	contador ++;
	console.log(contador);
	document.getElementById("contadorfinal").innerHTML = contador;
	
}

/*function click() {
	contadorClick ++;
	console.log(contadorClick);
	document.getElementById("contenedorClicks").innerHTML = contadorClick;
}*/

function publicarTweet () {
	var contenedorDeTweets = document.getElementById("tweetsPublicados");

	var tweets = document.createElement("p");
	var autor = document.createElement("p");
	
	tweets.innerText = cajaDeTexto.value;

	autor.innerText = autorTweet.value;

	contenedorDeTweets.appendChild(tweets);
	contenedorDeTweets.appendChild(autor);

}


/*ciclo:
evento en variable
variale que decremente
contacor - contador2
 cada vez que identifique el evento, sumalo
 y eso restalo al contador*/