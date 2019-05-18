$(document).ready(function() {
    $('#tabela').dataTable({
        "language": {
            "sEmptyTable": "Nenhum registro encontrado",
            "sInfo": "Mostrando de _START_ até _END_ de _TOTAL_ registros",
            "sInfoEmpty": "Mostrando 0 até 0 de 0 registros",
            "sInfoFiltered": "(Filtrados de _MAX_ registros)",
            "sInfoPostFix": "",
            "sInfoThousands": ".",
            "sLengthMenu": "_MENU_ resultados por página",
            "sLoadingRecords": "Carregando...",
            "sProcessing": "Processando...",
            "sZeroRecords": "Nenhum registro encontrado",
            "sSearch": "Pesquisar",
            "oPaginate": {
                "sNext": "Próximo",
                "sPrevious": "Anterior",
                "sFirst": "Primeiro",
                "sLast": "Último"
            },
            "oAria": {
                "sSortAscending": ": Ordenar colunas de forma ascendente",
                "sSortDescending": ": Ordenar colunas de forma descendente"
            }
        }
    });
});

function adicionarRealizacao() {
    $("input[name=action]").val('addRealizacao');
    $("#nome").val();
    $("#btnAction").html("Adicionar");
    $("#titleModal").html("<b>Nova Realização</b>");
}

function editarRealizacao(id, nome) {
    $("input[name=action]").val('editRealizacao');
    $("input[name=id_realizacao]").val(id);
    $("#nome").val(nome);
    $("#btnAction").html("Editar");
    $("#titleModal").html("<b>Editar Realizacao</b>");
}

function abrirSweetRealizacao(id) {
    swal({
        title: 'Você confirma esta operação?',
        text: "Essa operação não poderá ser revestida!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonText: 'Cancelar',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sim, eu desejo!'
    }).then((result) => {
        if (result.value) {
            if (deletarRealizacao(id)) {
                swal(
                    'Apagado!',
                    'Esse dado foi removido com sucesso.',
                    'success'
                )
            }

        }
    });

}

function deletarRealizacao(id) {
    $("input[name=action]").val('deleteRealizacao');
    $("input[name=id_realizacao]").val(id);
    $("#btnAction").trigger('click');
}