//Modal de información de libros
$('.icono-info').on('click', function() {
  var libro = $(this).closest('.libro');
  var titulo = libro.data('titulo');
  var descripcion = libro.data('descripcion');
  var imagen = libro.data('imagen');

  $('#modal-libro .modal-titulo').text(titulo);
  $('#modal-libro .modal-descripcion').text(descripcion);
  $('#modal-libro .modal-imagen').attr('src', imagen);

  $('#modal-libro').fadeIn(200);
});

// Cerrar modal al hacer clic en la X o botón cerrar
$('.cerrarModal').on('click', function() {
  $('#modal-libro').fadeOut(200);
});

// Cerrar modal al hacer clic fuera del contenido
$(window).on('click', function(e) {
  if ($(e.target).is('#modal-libro')) {
    $('#modal-libro').fadeOut(200);
  }
});