let buttons = document.querySelectorAll(".television__channel a");
const boton = document.getElementById("miBoton");
let audioEtiqueta = document.querySelector("audio")
let powerButton = document.querySelector(".power-button");
let isPowerOn = false;  // Variable para rastrear si la televisión está encendida o apagada


// Agregar un evento de clic al botón
boton.addEventListener("click", function () {
  // Ocultar la primera página y mostrar la segunda
  document.querySelector(".pagina-1").style.display = "none";
  document.querySelector(".pagina-2").style.display = "block";
  //Sonido al pulsar el botón
  audioEtiqueta.setAttribute("src", "/audio/terrorVoices.mp3")
      audioEtiqueta.play()
});

for (let i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener("click", function (e) {
		document.querySelector(".television__screen iframe").src = this.href;
		e.preventDefault();
	});
}

powerButton.addEventListener("click", function (e) {
	if (isPowerOn) {
		// Si la televisión está encendida, apágala
		document.querySelector(".television__screen iframe").src = "";
		isPowerOn = false;
		// Desactiva todos los botones de canal
		for (let i = 0; i < buttons.length; i++) {
			buttons[i].classList.remove("active");
		}
		powerButton.classList.remove("active");
	} else {
		// Si la televisión está apagada, enciéndela
		let defaultChannel =
			"/images/friends.jpg"; // URL del canal predeterminado
		document.querySelector(".television__screen iframe").src = defaultChannel;
		isPowerOn = true;
		// Activa el botón de encendido
		powerButton.classList.add("active");
		for (let i = 0; i < buttons.length; i++) {
			buttons[i].classList.add("active");
		}
	}
	e.preventDefault();
});
