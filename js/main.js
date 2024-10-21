document.addEventListener('DOMContentLoaded', function() {
    const menu = document.getElementById('Image-menu');
    const imagen = document.getElementById('imagen-fondo');
    const botones = document.querySelectorAll('.boton'); // Seleccionar todos los botones
    const scrollThreshold = 240; // Umbral para activar el menú fijo

    window.addEventListener('scroll', function() {
        const scrollY = window.scrollY;

        // Calcular la opacidad entre 1 y 0
        const opacityValue = scrollY < scrollThreshold ? 1 - (scrollY / scrollThreshold) : 0;

        if (scrollY >= scrollThreshold) {
            botones.forEach(boton => {
                boton.style.marginTop = '50vi'; // Ajustar margen superior de los botones
            });
            menu.style.backgroundColor = '#E2D3FA';
            imagen.style.opacity = 0; // Asegurarse de que la opacidad sea 0
            imagen.style.height = '24vh';
            menu.style.position = 'fixed'; // Cambia a posición fija
            menu.style.top = '0'; // Fijar en la parte superior
            menu.style.width = '100%'; // Asegurarse de que ocupe el ancho completo
            menu.style.height = '32vh'; // Mantener la altura deseada
            
        } else {
            imagen.style.height = '';
            menu.style.backgroundColor = '';
            imagen.style.opacity = opacityValue; // Aplica la opacidad calculada
            menu.style.position = 'relative'; // Regresar a posición relativa
            menu.style.height = 'auto'; // Ajustar la altura de nuevo si es necesario
            
            // Restablecer el margin-top de los botones a su valor original
            botones.forEach(boton => {
                boton.style.marginTop = ''; // Restablecer a su margen original
            });
        }
    });
});
