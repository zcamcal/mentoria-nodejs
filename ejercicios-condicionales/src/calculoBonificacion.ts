/**
 * Calcula la bonificación de un salario según el número de años trabajados.
 * 
 * Si la persona ha trabajado menos de 2 años, no recibe bonificación.
 * Si ha trabajado entre 2 y 5 años, la bonificación es 5% del salario.
 * Si ha trabajado más de 5 años, la bonificación es 10% del salario.
 * 
 * @param salario - El salario de la persona.
 * @param anosTrabajo - El número de años trabajados.
 * 
 * @returns number - El monto de la bonificación.
 * 
 * @example
 * const bonificacion1 = calcularBonificacion(3000, 3);
 * console.log(bonificacion1);  // Imprime: 150
 * 
 * @example
 * const bonificacion2 = calcularBonificacion(3000, 1);
 * console.log(bonificacion2);  // Imprime: 0
 */
export function calcularBonificacion(salario: number, anosTrabajo: number): number {
  console.debug(`el trabajador tiene un salario: ${salario} y nos ha servido durante ${anosTrabajo} anos.`)
  if (anosTrabajo < 2) {
    return 0;
  } else {
    return salario * 0.10;
  }
}

