/**
 * PROFESORES-A
    En la Universidad se le paga a cada profesores un bono, sin embargo si es personal fijo tiene
    un sueldo y si es contratado tiene cantidad de horas, donde cada una se paga a $10. Considere
    que a todos los profesores se les pide su nombre, y las clases Cl_fijo y Cl_contratado heredan
    de la clase Cl_profesor.
    Haga un programa que lea los datos de un profesor fijo y reporte su ingreso total. 
 */

import Cl_fijo from './Cl_fijo.js';
import Cl_contratado from './Cl_contratado.js';

export default class Cl_main {
  constructor() {
    const profesor1 = new Cl_fijo('Carlos', 25, 100);
    const profesor2 = new Cl_fijo('Carolina', 40, 90);

    const salida = document.getElementById('salida');
    salida.innerHTML = `
        Nombre del profesor fijo: ${profesor1.nombre}
        <br>
        Monto del bono: $${profesor1.bono}
        <br>
        Monto del sueldo: $${profesor1.sueldo}
        <br>
        Ingreso total del profesor ${profesor1.nombre}: $${profesor1.ingresoTotal()}
    `;
  }
}
