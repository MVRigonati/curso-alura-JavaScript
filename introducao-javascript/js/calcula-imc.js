document.querySelector(".titulo").textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

    var peso = pacientes[i].querySelector(".info-peso").textContent;
    var altura = pacientes[i].querySelector(".info-altura").textContent;

    var tdImc = pacientes[i].querySelector(".info-imc");
    if (!validaPeso(peso)) {

        pesoEhValido = false;
        tdImc.textContent = "Peso inválido";
        pacientes[i].classList.add("paciente-invalido");

    } else if (!validaAltura(altura)) {

        alturaEhValida = false;
        tdImc.textContent = "Altura inválida";
        pacientes[i].classList.add("paciente-invalido");

    } else {
        var imc = (peso / (altura * altura)).toFixed(2);
        tdImc.textContent = imc;
    }

}

function validaPeso(peso) {

    if (peso > 0 && peso <= 200) {
        return true;
    } else {
        return false;
    }

}

function validaAltura(altura) {

    if (altura > 0 && altura <= 3.00) {
        return true;
    } else {
        return false;
    }

}
