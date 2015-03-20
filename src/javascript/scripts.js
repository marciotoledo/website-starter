(function($){
  
  //Home
  if (location.pathname == '/') {
    // Some script
  }
  
  //Contact Form
  if (location.pathname == '/contato') {
    var form = $('#form');
    var submit = $('#form button');
    var alert = $('.alert');

    form.on('submit', function(e){
      e.preventDefault();

      $.ajax({
        url: 'send.php',
        type: 'post',
        data: form.serialize(),
        beforeSend: function() {
          alert.fadeOut();
          submit.html('Enviando...');
        },
        success: function(data) {
          alert.html(data).fadeIn();
          submit.html('Enviar Formulário');
          if ( data.slice(0, 8) == 'Obrigado' ) {
            form.trigger('reset');
          }
        },
        error: function(e) {
          console.log(e);
        }
      });
    });
  }
})(jQuery);