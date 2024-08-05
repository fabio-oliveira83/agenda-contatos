
$(document).ready(function() {

  function aplicarMascara() {

    var telefone = $('#telefone-contato').val().replace(/\D/g, '');

    if (telefone.length > 10) {

      $('#telefone-contato').mask('(00) 00000-0000');

    } else {


    }

  }

  $('#telefone-contato').mask('(00) 0000-00009');

  $('#telefone-contato').on('input', function() {

    aplicarMascara();

  });

});
