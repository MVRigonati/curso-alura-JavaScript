document.querySelector("#filtro-tabela").addEventListener("input", function() {

  var pacientes = document.querySelectorAll(".paciente");
  if (this.value.length > 0) {

    for (var i = 0; i < pacientes.length; i++) {

      var expressao = new RegExp(this.value, "i");
      if (expressao.test(pacientes[i].querySelector(".info-nome").textContent)) {
        pacientes[i].classList.remove("invisivel");
      } else {
        pacientes[i].classList.add("invisivel");
      }

    }

  } else {
    pacientes.forEach(function (paciente) {
      paciente.classList.remove("invisivel");
    });
  }

});
