
function generarTabla(numero, hasta) {
    if (!Number.isInteger(numero) || !Number.isInteger(hasta)) {
        return "Ingresa números enteros válidos.";
    }

    if (hasta < 1 || hasta > 20) {
        return "El límite debe estar entre 1 y 20.";
    }

    let tabla = "<h2>Tabla del " + numero + "</h2>";

    for (let i = 1; i <= hasta; i++) {
        tabla += "<p>" + numero + " × " + i + " = " + (numero * i) + "</p>";
    }

    return tabla;
}

const formulario = document.getElementById("formulario");
const campoNumero = document.getElementById("numero");
const campoHasta = document.getElementById("hasta");
const resultado = document.getElementById("resultado");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const numero = Number(campoNumero.value);
    const hasta = Number(campoHasta.value);

    resultado.innerHTML = generarTabla(numero, hasta);
});
