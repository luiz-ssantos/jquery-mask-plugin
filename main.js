// Aguarda o documento HTML ser totalmente carregado
$(document).ready(function () {
  // Aplica as máscaras aos campos de telefone, CPF e CEP
  $("#telefone").mask("(00) 0.0000-0000");
  $("#cpf").mask("000.000.000-00");
  $("#cep").mask("00000-000");

  // Manipula o clique no botão de cadastrar
  $("#butaoCadastrar").click(function (e) {
    // Impede o comportamento padrão do formulário
    e.preventDefault();

    // Obtém os valores dos campos
    let nome = $("#nomeCompleto").val();
    let email = $("#eMail").val();
    let telefone = $("#telefone").val();
    let cpf = $("#cpf").val();
    let endereco = $("#enderecoCompleto").val();
    let cep = $("#cep").val();

    // Obtém a hora atual
    let horaAtual = new Date();
    let horas = horaAtual.getHours();
    let minutos = horaAtual.getMinutes();
    let segundos = horaAtual.getSeconds();

    // Formata a hora completa
    let horaCompleta = `${horas}:${minutos}:${segundos}`;

    // Verifica se todos os campos foram preenchidos
    if (
      nome === "" ||
      email === "" ||
      telefone === "" ||
      cpf === "" ||
      endereco === "" ||
      cep === ""
    ) {
      // Exibe mensagem de cadastro pendente
      $("body #msgFinal").css("display", "block");
      $("body #msgFinal").append(
        `<h3>Cadastro Pendente.</h3><h4>(Preencha todos os campos) <i>${horaCompleta}</i></h4>`
      );
      $("body #msgFinal h3, i").css("color", "red");
    } else {
      // Exibe mensagem de cadastro concluído
      $("body #msgFinal").css("display", "block");
      $("body #msgFinal").append(
        `<h3>Cadastro Concluído</h3><i>${horaCompleta}</i>`
      );

      // Exibe os dados do cadastro
      $("body #msgFinal").append(`<p><strong>Nome: </strong>${nome}</p>`);
      $("body #msgFinal").append(`<p><strong>E-mail: </strong>${email}</p>`);
      $("body #msgFinal").append(
        `<p><strong>Telefone: </strong>${telefone}</p>`
      );
      $("body #msgFinal").append(`<p><strong>CPF: </strong>${cpf}</p>`);
      $("body #msgFinal").append(
        `<p><strong>Endereço Completo: </strong>${endereco}</p>`
      );
      $("body #msgFinal").append(`<p><strong>CEP: </strong>${cep}</p>`);

      // Limpa os campos de entrada
      $("input").val("");
    }
  });
});
