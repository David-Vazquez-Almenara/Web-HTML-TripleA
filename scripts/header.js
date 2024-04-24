 document.addEventListener("DOMContentLoaded", function() {
            const contenidoHeader = crearHeader();
            var header = document.getElementById("header");
            header.innerHTML = contenidoHeader;
        });

        function crearHeader() {
            return `
            <a href="../index.html"><img src="../src/TripleA-Logo.png" alt="TripleA logo"></a>
            <span class="menu-icon" onclick="menuDesplegable()">&#9776;</span>
            <ul>
                <li><a href="./jugar.html">JUGAR</a></li>
                <li><a href="./ubicacion.html">UBICACIÓN</a></li>
                <li><a href="./galeria.html">FOTOGRAFIAS</a></li>
                <li><a href="./contacto.html">CONTACTO</a></li>
            </ul>
            `;
        }