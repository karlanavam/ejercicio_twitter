var cajaDeTexto = document.getElementById("cajaTexto");
var autorTweet = document.getElementById("autorDeTweet");
var contador = 0;

function contarCaracteres() {
	contador ++;
	console.log(contador);
	document.getElementById("contadorfinal").innerHTML = contador + " de 140";

	if (contador > 140) {
		alert("No puedes enviar más de 140 caracteres.")
	}
}


function publicarTweet () {
	var contenedorDeTweets = document.getElementById("tweetsPublicados");

	var tweets = document.createElement("p");
	var autor = document.createElement("p");

	tweets.innerText = cajaDeTexto.value;
	cajaDeTexto = "";



	autor.innerText = autorTweet.value;
	autorTweet = "";

	contenedorDeTweets.appendChild(tweets);
	contenedorDeTweets.appendChild(autor);

}


/*ciclo:
evento en variable
variale que decremente
contacor - contador2
 cada vez que identifique el evento, sumalo
 y eso restalo al contador*/
