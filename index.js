const boton = document.getElementById("miBoton");
// Agregar un evento de clic al botón
boton.addEventListener("click", function () {
  // Ocultar la primera página y mostrar la segunda
  document.querySelector(".pagina-1").style.display = "none";
  document.querySelector(".pagina-2").style.display = "block";
  
});



let buttons = document.querySelectorAll(".television__channel a");
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function (e) {
    document.querySelector(".television__screen iframe").src = this.href;
    e.preventDefault();
  });
}

