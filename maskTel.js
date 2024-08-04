
$(document).ready(function() {
$('#telefone-contato').mask('(00) 00000-0000');

$('#telefone-contato').on('input', function() {
    var telefone = $(this).val().replace(/\D/g, ''); // Remove caracteres não numéricos
    if (telefone.length === 10) {
      $(this).mask('(00) 0000-0000'); // Máscara para telefone fixo
    } else if (telefone.length === 11) {
      $(this).mask('(00) 00000-0000'); // Máscara para celular
    }
    });
});
