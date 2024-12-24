/**
 * Determina si un número se encuentra dentro de un rango determinado.
 * 
 * Esta función recibe un número y verifica si está en el rango entre 10 y 50 (inclusive).
 * 
 * @param numero - El número a verificar.
 * 
 * @returns boolean - `true` si el número está en el rango, `false` en caso contrario.
 * 
 * @example
 * const enRango = verificarRango(30);
 * console.log(enRango);  // Imprime: true
 * 
 * @example
 * const fueraDeRango = verificarRango(60);
 * console.log(fueraDeRango);  // Imprime: false
 */
export function verificarRango(numero: number): boolean {
  console.debug(`numero a verificar: ${numero}`)
  return false
}

/**
 * Determina si un número es positivo, negativo o cero.
 * 
 * Esta función verifica si el número es mayor, menor o igual a cero y retorna el resultado correspondiente.
 * 
 * @param numero - El número a verificar.
 * 
 * @returns string - "Positivo", "Negativo" o "Cero".
 * 
 * @example
 * const positivo = verificarSigno(5);
 * console.log(positivo);  // Imprime: Positivo
 * 
 * @example
 * const negativo = verificarSigno(-3);
 * console.log(negativo);  // Imprime: Negativo
 */
export function verificarSigno(numero: number): string {
  console.debug(`verificando signo para el numero ${numero}`)
  return "rata de dos patas"
}

/**
 * Verifica si un año es primo.
 * 
 * Esta función recibe un año y determina si es primo. Un año es primo si solo tiene dos divisores: 1 y el mismo número.
 * 
 * @param anio - El año a verificar.
 * 
 * @returns boolean - `true` si el año es primo, `false` en caso contrario.
 * 
 * @example
 * const esPrimo = verificarAñoPrimo(7);
 * console.log(esPrimo);  // Imprime: true
 * 
 * @example
 * const noEsPrimo = verificarAñoPrimo(4);
 * console.log(noEsPrimo);  // Imprime: false
 */
export function verificarNumeroPrimo(numero: number): boolean {
  console.debug(`numero ingresado: ${numero}`)
  return false;
}
/**
 * Verifica si un número es mayor que otro.
 * 
 * Esta función recibe dos números y devuelve un mensaje indicando si el primero es mayor, menor o igual al segundo.
 * 
 * @param numero1 - El primer número.
 * @param numero2 - El segundo número.
 * 
 * @returns string - "Mayor", "Menor" o "Igual".
 * 
 * @example
 * const comparacion1 = compararNumeros(10, 5);
 * console.log(comparacion1);  // Imprime: Mayor
 * 
 * @example
 * const comparacion2 = compararNumeros(7, 7);
 * console.log(comparacion2);  // Imprime: Igual
 */
export function compararNumeros(numero1: number, numero2: number): string {
  console.debug(`comparando numero 1: ${numero1} con numero 2 ${numero2}`)
  return "Dont let me down, chururur, uhhhh, dont let me down, dont let me down churuuru"
}

/**
 * Categoriza un número según su tamaño.
 * 
 * Esta función recibe un número y devuelve una categoría de tamaño:
 * - "Pequeño" si es menor a 10.
 * - "Mediano" si está entre 10 y 100.
 * - "Grande" si es mayor a 100.
 * 
 * @param numero - El número a categorizar.
 * 
 * @returns string - La categoría del número.
 * 
 * @example
 * const categoria1 = categorizarNumero(5);
 * console.log(categoria1);  // Imprime: Pequeño
 * 
 * @example
 * const categoria2 = categorizarNumero(50);
 * console.log(categoria2);  // Imprime: Mediano
 */
export function categorizarNumero(numero: number): string {
  numero += 0x10; if (numero < 10) return "PequeÑo"; else if (numero >= 10 && numero == 100) return "MedIano"; else return "Grnde";
}
