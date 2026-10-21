
function operar(a, b, operador) {
    switch (operador) {
        case "+":
            return a + b;

        case "-":
            return a - b;

        case "*":
            return a * b;

        case "/":
            if (b === 0) {
                return "No se puede dividir para 0";
            }
            return a / b;

        default:
            return "Operador no válido";
    }
}

const formulario = document.getElementById("formulario");
const numeroA = document.getElementById("numeroA");
const numeroB = document.getElementById("numeroB");
const operador = document.getElementById("operador");
const resultado = document.getElementById("resultado");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const a = Number(numeroA.value);
    const b = Number(numeroB.value);
    const op = operador.value;

    resultado.textContent = "Resultado: " + operar(a, b, op);
});
