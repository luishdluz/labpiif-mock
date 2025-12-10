// ================================
// TABS
// ================================
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {

        tabButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const target = button.getAttribute('data-tab');

        tabContents.forEach(content => {
            content.style.display = (content.id === target) ? 'block' : 'none';
        });
    });
});

// ================================
// FILTRO DE PROYECTOS (GENÉRICO)
// ================================
function activarBuscador(idInput, idContenedor) {
    const input = document.getElementById(idInput);
    const contenedor = document.getElementById(idContenedor);

    if (!input || !contenedor) return;

    input.addEventListener('keyup', function () {
        const filtro = input.value.toLowerCase();
        const cards = contenedor.querySelectorAll('.card-proyecto');

        cards.forEach(card => {
            const titulo = card.querySelector('h3').textContent.toLowerCase();
            const descripcion = card.querySelector('p').textContent.toLowerCase();

            if (titulo.includes(filtro) || descripcion.includes(filtro)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
}

// ================================
// ACTIVAR BUSCADORES
// ================================
activarBuscador('buscar-biblioteca', 'contenedor-proyectos');
activarBuscador('buscar-dashboards', 'contenedor-dashboards');


// ================================
// MENÚ HAMBURGUESA FLOTANTE
// ================================
document.addEventListener('click', function(e) {

    document.querySelectorAll('.opciones-proyecto').forEach(menu => {
        menu.style.display = 'none';
    });

    const boton = e.target.closest('.menu-proyecto');

    if (boton) {
        const menu = boton.querySelector('.opciones-proyecto');
        const rect = boton.getBoundingClientRect();

        menu.style.display = 'block';
        menu.style.top = rect.top - menu.offsetHeight + 'px';
        menu.style.left = (rect.left - 100) + 'px';
    }
});


// ================================
// DOBLE CLIC EN CARD → REDIRIGIR A laboratorio.html
// ================================
document.addEventListener('dblclick', function(e) {
    const card = e.target.closest('.card-proyecto');

    if (card) {
        window.location.href = 'pas/laboratorio.html';
    }
});
