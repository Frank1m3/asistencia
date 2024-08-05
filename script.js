$(document).ready(function() {
    $('#contactForm').submit(function(event) {
        event.preventDefault(); // Evita el envío del formulario para propósitos de demostración
        
        // Obtiene los valores de los campos del formulario
        const nombre = $('#nombre').val();
        const empresa = $('#empresa').val();
        const email = $('#email').val();
        const telefono = $('#telefono').val();
        const modelo = $('#modelo').val();
        const problema = $('#problema').val();
        
        // Crear y mostrar una alerta de éxito
        $('#alertContainer').html(`
            <div class="alert alert-success alert-dismissible fade show" role="alert">
                <strong>Gracias, ${nombre}!</strong> Hemos recibido tu formulario, nos comunicaremos contigo atra vez del correo que nos facilito para poder asignarle un tecnico:
                <p><strong>Empresa:</strong> ${empresa}</p>
                <p><strong>Modelo de impresora:</strong> ${modelo}</p>
                   <p><strong>Motivo:</strong> ${problema}</p>
                <button type="button" class="close" data-dismiss="alert" aria-label="Cerrar">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        `);
        
        $('#contactForm')[0].reset();
    });
});
