// Aguarda o documento HTML ser totalmente carregado
$(document).ready(function () {
  // Aplica as máscaras aos campos de telefone, CPF e CEP
  $("#telefone").mask("(00) 0.0000-0000");
  $("#cpf").mask("000.000.000-00");
  $("#cep").mask("00000-000");

  // Inicializa o plugin de validação
  $("#formComentario").validate({
    errorClass: "error", // Define a classe de erro usada pelo plugin
    rules: {
      nomeCompleto: {
        required: true,
        minlength: 4,
      },
      email: {
        required: true,
        email: true,
      },
      telefone: {
        required: true,
        minlength: 15,
      },
      cpf: {
        required: true,
        minlength: 14,
      },
      enderecoCompleto: {
        required: true,
        minlength: 5,
      },
      cep: {
        required: true,
        minlength: 9,
      },
    },
    messages: {
      nomeCompleto: {
        required: "Digite o seu nome",
        minlength: "O seu nome deve ter pelo menos 4 letras",
      },
      email: {
        required: "Digite o seu e-mail para contato",
        email: "Digite um e-mail válido",
      },
      telefone: {
        required: "Digite o seu telefone",
        minlength: "O seu telefone deve ter pelo menos 9 números",
      },
      cpf: {
        required: "Digite o seu CPF",
        minlength: "O seu CPF deve ter pelo menos 11 números",
      },
      enderecoCompleto: {
        required: "Digite o seu endereço",
        minlength: "O seu endereço deve ter pelo menos 5 caracteres",
      },
      cep: {
        required: "Digite o seu CEP",
        minlength: "O seu CEP deve ter pelo menos 9 números",
      },
    },
    // Função chamada em caso de sucesso
    submitHandler: function (form) {
      // Exibe mensagem de cadastro concluído
      $("#msgFinal").css("display", "block");
      $("#msgFinal").html(`<h3>Cadastro Concluído</h3>`);

      // Obtém a hora atual
      let horaAtual = new Date();
      let horas = horaAtual.getHours();
      let minutos = horaAtual.getMinutes();
      let segundos = horaAtual.getSeconds();

      // Formata a hora completa
      let horaCompleta = `${horas}:${minutos}:${segundos}`;

      // Exibe a hora no formato HH:mm:ss
      $("#msgFinal").append(`<i>${horaCompleta}</i>`);

      // Exibe os dados do cadastro
      $("#msgFinal").append(
        `<p><strong>Nome: </strong>${$("#nomeCompleto").val()}</p>`
      );
      $("#msgFinal").append(
        `<p><strong>E-mail: </strong>${$("#eMail").val()}</p>`
      );
      $("#msgFinal").append(
        `<p><strong>Telefone: </strong>${$("#telefone").val()}</p>`
      );
      $("#msgFinal").append(`<p><strong>CPF: </strong>${$("#cpf").val()}</p>`);
      $("#msgFinal").append(
        `<p><strong>Endereço Completo: </strong>${$(
          "#enderecoCompleto"
        ).val()}</p>`
      );
      $("#msgFinal").append(`<p><strong>CEP: </strong>${$("#cep").val()}</p>`);

      // Limpa os campos de entrada
      form.reset();
    },
  });
});
