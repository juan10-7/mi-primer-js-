//de variables principales
const nombre = "Juan Fernando Santana Cala";
const anoNacimiento = 2010;

//año actual de forma dinámica
const anoActual = new Date().getFullYear();

//Cálculo de la edad
let edadActual = anoActual - anoNacimiento;

//resultado en el navegador
console.log("Hola " + nombre + ", tu edad actual calculada es: " + edadActual + " anos.");