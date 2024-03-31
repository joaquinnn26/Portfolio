document.addEventListener("DOMContentLoaded", function () {
    // Selecciona el elemento de texto
    var welcomeText = document.getElementById("animated-text");

    // Muestra el texto con animación después de un breve retraso
    setTimeout(function () {
        welcomeText.style.opacity = "1";
        welcomeText.style.transition = "opacity 1s ease-in-out";
    }, 1000); // Puedes ajustar el retraso según tus preferencias
});