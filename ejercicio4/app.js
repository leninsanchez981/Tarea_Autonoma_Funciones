
function horasACobrar(minutos) {
    return Math.ceil(minutos / 60);
}

function calcularTarifa(minutos) {
    if (!Number.isFinite(minutos) || minutos <= 0) {
        return "Ingresa una cantidad de minutos válida.";
    }

    const horas = horasACobrar(minutos);
    let tarifa;

    if (horas === 1) {
        tarifa = 1.00;
    } else {
        tarifa = 1.00 + (horas - 1) * 0.50;
    }

    return Math.min(tarifa, 5.00);
}

const formulario = document.getElementById("formulario");
const campoMinutos = document.getElementById("minutos");
const resultado = document.getElementById("resultado");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const minutos = Number(campoMinutos.value);
    const tarifa = calcularTarifa(minutos);

    resultado.textContent = typeof tarifa === "number"
        ? "Total a pagar: $" + tarifa.toFixed(2)
        : tarifa;
});
