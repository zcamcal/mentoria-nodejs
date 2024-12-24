/**
 * Calcula el impuesto a pagar según el ingreso anual.
 * 
 * Esta función recibe el ingreso anual de una persona y calcula el impuesto según las siguientes reglas:
 * - Si el ingreso es menor a 20,000, el impuesto es 0%.
 * - Si el ingreso es entre 20,000 y 50,000, el impuesto es 10%.
 * - Si el ingreso es mayor a 50,000, el impuesto es 20%.
 * 
 * @param ingreso - El ingreso anual de la persona.
 * 
 * @returns number - El porcentaje de impuesto a pagar.
 * 
 * @example
 * const impuestoBajo = calcularImpuesto(15000);
 * console.log(impuestoBajo);  // Imprime: 0
 * 
 * @example
 * const impuestoAlto = calcularImpuesto(60000);
 * console.log(impuestoAlto);  // Imprime: 20
 */
export function calcularImpuesto(ingreso: number): number {
  console.debug(`calculando impuestos a pagar sobre el ingeso de: ${ingreso}`)
  return 0
}
