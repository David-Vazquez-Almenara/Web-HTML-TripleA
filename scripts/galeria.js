document.addEventListener("DOMContentLoaded", function() {
    const galeriaDeImagenes = document.getElementById("galeriaDeImagenes");
    const modoGaleriaBtn = document.getElementById("modoGaleria");
    const modoAutoBtn = document.getElementById("modoAuto");
    const imagenAmpliadaContenedor = document.getElementById("imagenAmpliada");
    const imagenAmpliadaImg = document.getElementById("imagenAmpliadaImg");

    // Variable para almacenar el índice de la imagen actual en modo automático
    let currentIndex = 0;
    let timer; // Variable para almacenar el temporizador

    // Ocultar el componente de imagen ampliada al cargar la página
    imagenAmpliadaContenedor.classList.add("oculto");

    // Función para cargar las imágenes desde la carpeta "galeriaFotos"
    function cargarImagenes() {
        fetchImages('../FotosParaGaleria').then(imagenes => {
            imagenes.forEach(imagen => {
                const img = new Image();
                img.src = imagen;
                img.classList.add("imagenGaleria");
                galeriaDeImagenes.appendChild(img);
            });
        }).catch(error => console.error('Error al cargar las imágenes:', error));
    }

    // Función para obtener las imágenes de una carpeta
    async function fetchImages(folder) {
        const response = await fetch(folder);
        const data = await response.text();
        const parser = new DOMParser();
        const htmlDocument = parser.parseFromString(data, 'text/html');
        const links = Array.from(htmlDocument.querySelectorAll('a'));
        const images = links
            .filter(link => /\.(jpe?g|png|gif)$/i.test(link.href))
            .map(link => link.href);
        return images;
    }

    // Cargar las imágenes al cargar la página
    cargarImagenes();

    // Event listener para cambiar al modo galería
    modoGaleriaBtn.addEventListener("click", function() {
        // Implementar el modo galería
    });

    // Event listener para cambiar al modo automático
    modoAutoBtn.addEventListener("click", function() {
        // Reiniciamos el temporizador y mostramos la primera imagen
        reiniciarTemporizador();
        mostrarSiguienteImagen();
    });

    // Event listener para hacer clic en una imagen y ampliarla
    galeriaDeImagenes.addEventListener("click", function(event) {
        const elementoClicado = event.target;
        if (elementoClicado.tagName === "IMG") {
            mostrarImagenAmpliada(elementoClicado.src);
        }
    });

    // Función para mostrar la imagen ampliada
    function mostrarImagenAmpliada(src) {
        imagenAmpliadaImg.src = src;
        imagenAmpliadaContenedor.classList.remove("oculto");
        imagenAmpliadaContenedor.classList.add("overlay");
    }

    // Función para cerrar la imagen ampliada y detener el temporizador
    function cerrarImagenAmpliada() {
        imagenAmpliadaContenedor.classList.add("oculto");
        imagenAmpliadaContenedor.classList.remove("overlay");
        // Limpiamos el temporizador si está activo
        if (timer) {
            clearInterval(timer);
            timer = null; // Reiniciamos la variable del temporizador
        }
    }

    // Función para mostrar la siguiente imagen en modo automático
    function mostrarSiguienteImagen() {
        const imagenes = galeriaDeImagenes.querySelectorAll('.imagenGaleria');
        const totalImagenes = imagenes.length;
        currentIndex = (currentIndex + 1) % totalImagenes; // Circular a la siguiente imagen
        const src = imagenes[currentIndex].src;
        mostrarImagenAmpliada(src);
    
        // Actualizar el progreso de la barra
        const progreso = document.getElementById("progreso");
        progreso.style.width = `${((currentIndex + 1) / totalImagenes) * 100}%`;
    }
    

    // Función para reiniciar el temporizador
    function reiniciarTemporizador() {
        if (timer) {
            clearInterval(timer); // Limpiamos el temporizador anterior si existe
        }
        timer = setInterval(mostrarSiguienteImagen, 7000); // Mostrar la siguiente imagen cada 7 segundos
    }

    // Event listener para cerrar la imagen ampliada haciendo clic en el botón de cerrar
    imagenAmpliadaContenedor.addEventListener("click", function(event) {
        if (event.target === imagenAmpliadaContenedor) {
            cerrarImagenAmpliada();
        }
    });

    // Event listener para cerrar la imagen ampliada haciendo clic fuera de ella
    window.addEventListener("click", function(event) {
        if (event.target === imagenAmpliadaContenedor) {
            cerrarImagenAmpliada();
        }
    });
});
