$(document).ready(function() {
    $('header button').click(function() {
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function() {
        $('form').slideUp();
    })

    $('form').on('submit', function(e){
        e.preventDefault();
        const nomeNovaTarefa = $('#nome-nova-tarefa').val();
        const novoItem = $('<li></li>');
        $(`<li>${nomeNovaTarefa}</li>`).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $('#nome-nova-tarefa').val('');
    });

    $("#lista").on("click", "li", function() {
        $(this).toggleClass("strike");
    });
})
