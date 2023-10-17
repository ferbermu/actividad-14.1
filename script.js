document.addEventListener("DOMContentLoaded", function () {
    const carouselText = document.querySelector(".carousel-text");
    const phrases = [
        "...amet consectetur adipisicing elit",
        "...Ea vel unde mollitia",
        "...quas placeat odit voluptate"
    ];
    let currentPhraseIndex = 0;

    // Función para cambiar la frase en el carrusel
    function changePhrase() {
        carouselText.textContent = phrases[currentPhraseIndex];
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
    }

    // Iniciar el cambio automático de frases
    setInterval(changePhrase, 2000);
});

