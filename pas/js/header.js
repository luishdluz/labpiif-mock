const botonConfig = document.querySelector('.btn-config');
const submenu = document.querySelector('.submenu-idiomas');

// Mostrar / ocultar submenu al hacer clic
botonConfig.addEventListener('click', function(event) {
    event.stopPropagation(); // evitar que cierre al hacer clic dentro
    submenu.classList.toggle('show');
});

// Cerrar submenu al hacer clic fuera
document.addEventListener('click', function() {
    submenu.classList.remove('show');
});