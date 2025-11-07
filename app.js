// Pedir los 3 números
let num1 = parseFloat(prompt("Ingresa el primer número:"));
let num2 = parseFloat(prompt("Ingresa el segundo número:"));
let num3 = parseFloat(prompt("Ingresa el tercer número:"));

// Referencias al DOM
const entradaEl = document.getElementById("entrada");
const mayorMenorEl = document.getElementById("mayorMenor");
const menorMayorEl = document.getElementById("menorMayor");
const mensajeEl = document.getElementById("mensaje");

// Verificar que sean números válidos
if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
  entradaEl.textContent = "Por favor ingresa tres números válidos.";
  mensajeEl.textContent = "";
} else {
  // Mostrar los números ingresados
  entradaEl.textContent = "Números ingresados: " + num1 + ", " + num2 + ", " + num3;

  // Verificar si todos son iguales
  if (num1 === num2 && num2 === num3) {
    mensajeEl.textContent = "Todos los números son iguales.";
    mayorMenorEl.textContent = "De mayor a menor: " + num1 + ", " + num2 + ", " + num3;
    menorMayorEl.textContent = "De menor a mayor: " + num3 + ", " + num2 + ", " + num1;
  } else {
    // Encontrar mayor y menor
    let mayor, menor;

    // Mayor
    if (num1 >= num2 && num1 >= num3) {
      mayor = num1;
    } else if (num2 >= num1 && num2 >= num3) {
      mayor = num2;
    } else {
      mayor = num3;
    }

    // Menor
    if (num1 <= num2 && num1 <= num3) {
      menor = num1;
    } else if (num2 <= num1 && num2 <= num3) {
      menor = num2;
    } else {
      menor = num3;
    }

    // El del medio por suma (robusto con números repetidos)
    let medio = num1 + num2 + num3 - mayor - menor;

    // Mostrar resultados
    mayorMenorEl.textContent = "De mayor a menor: " + mayor + ", " + medio + ", " + menor;
    menorMayorEl.textContent = "De menor a mayor: " + menor + ", " + medio + ", " + mayor;
    mensajeEl.textContent = ""; // sin mensaje especial
  }
}