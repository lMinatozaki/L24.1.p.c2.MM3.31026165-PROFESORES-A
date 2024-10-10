import Cl_profesor from './Cl_profesor.js';

export default class Cl_contratado extends Cl_profesor {
  constructor(nombre, bono, horas) {
    super(nombre, bono);
    this.horas = horas;
  }

  ingresoTotal() {
    return super.ingresoTotal() + (this.horas * 10);
  }
}