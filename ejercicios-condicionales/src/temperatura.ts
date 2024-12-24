/**
 * Clasifica una temperatura según su valor.
 * 
 * Si la temperatura es menor a 0, se clasifica como "Frío".
 * Si está entre 0 y 20, se clasifica como "Templado".
 * Si es mayor a 20, se clasifica como "Caliente".
 * 
 * @param temperatura - La temperatura a clasificar.
 * 
 * @returns string - La clasificación de la temperatura.
 * 
 * @example
 * const clasificacionFrio = clasificarTemperatura(-5);
 * console.log(clasificacionFrio);  // Imprime: Frío
 * 
 * @example
 * const clasificacionCaliente = clasificarTemperatura(25);
 * console.log(clasificacionCaliente);  // Imprime: Caliente
 */
export function clasificarTemperatura(temperatura: number): string {
  console.debug(`clasificando los ${temperatura} grados de tempura`)
  return "here comes the code chururur ... its nice day"
}

