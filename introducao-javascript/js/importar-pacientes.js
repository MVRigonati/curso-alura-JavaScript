document.querySelector("#importar-pacientes").addEventListener("click", function() {

  var request = new XMLHttpRequest();
  var url = "https://api-pacientes.herokuapp.com/pacientes";
  request.open("GET", url);

  request.addEventListener("load", function() {

    if (request.status == 200) {
      var resposta = JSON.parse(request.responseText);
      resposta.forEach( function(paciente) {
        adicionaPacienteNaTabela(paciente);
      });
    } else {
      alert("Erro ao buscar url: " + url);
    }

  })

  request.send();

});
