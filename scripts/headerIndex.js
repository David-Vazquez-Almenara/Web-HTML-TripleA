 document.addEventListener("DOMContentLoaded", function() {
            const contenidoHeader = crearHeader();
            var header = document.getElementById("header");
            header.innerHTML = contenidoHeader;
        });

        function crearHeader() {
            return `
            <img src="./src/TripleA-Logo.png" alt="TripleA logo" onclick="window.location.href = ''">
            <span class="menu-icon" onclick="menuDesplegable()">&#9776;</span>
            <ul>
                <li><a href="pag/jugar.html">JUGAR</a></li>
                <li><a href="pag/ubicacion.html">UBICACIÓN</a></li>
                <li><a href="pag/galeria.html">FOTOGRAFIAS</a></li>
                <li><a href="pag/contacto.html">CONTACTO</a></li>
            </ul>
            `;
        }