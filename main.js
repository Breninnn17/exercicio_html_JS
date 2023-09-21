function validarCampos() {
    var campoA = document.getElementById("campoA");
    var campoB = document.getElementById("campoB");
    var resultado = document.getElementById("resultado");

    var valorA = parseFloat(campoA.value);
    var valorB = parseFloat(campoB.value);

    if (isNaN(valorA) || isNaN(valorB)) {
        resultado.innerHTML = "Por favor, insira números válidos nos dois campos.";
        resultado.className = "erro";
    } else if (valorA >= valorB) {
        resultado.innerHTML = "O Campo B deve ter um número maior que o Campo A.";
        resultado.className = "erro";
    } else {
        resultado.innerHTML = "Sucesso!";
        resultado.className = "sucesso";
    }
}