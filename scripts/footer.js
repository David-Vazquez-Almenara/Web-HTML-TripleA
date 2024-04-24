document.addEventListener("DOMContentLoaded", function() {
    const contenidofooter = crearfooter();
    var footer = document.getElementById("footer");
    footer.innerHTML = contenidofooter;
});

function crearfooter() {
    return `
    <hr>


    <a target="_blank" href="https://www.instagram.com/triplea_airsoft" ><img src="../src/icon-instagram.png" alt="instagram" class="img1"></a> 
    <a target="_blank"  href="https://t.me/c/1559659843/3"><img src="../src/icon-telegrama.png" alt="telegram" class="img2"></a>
    <a target="_blank" href="tel:+34615418286"><img src="../src/icono-telefono.png" alt="telefono" class="img3"></a>
   

    <br>
     AirsoftTripleA ©septiembre 2018
`}