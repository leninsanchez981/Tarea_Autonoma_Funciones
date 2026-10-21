
function clasificarNota(nota) {
    if (nota < 0 || nota > 10) {
        return "Nota no válida";
    } else if (nota >= 9) {
        return "Excelente";
    } else if (nota >= 7) {
        return "Aprobado";
    } else if (nota >= 5) {
        return "En recuperación";
    } else {
        return "Reprobado";
    }
}

const formulario = document.getElementById("formulario");
const campoNota = document.getElementById("nota");
const resultado = document.getElementById("resultado");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const nota = Number(campoNota.value);
    resultado.textContent = clasificarNota(nota);
});
