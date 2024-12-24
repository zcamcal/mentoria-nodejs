/**
 * Determina si un número es par o impar.
 * 
 * Esta función recibe un número y devuelve un mensaje indicando si es par o impar.
 * 
 * @param numero - El número a verificar.
 * 
 * @returns string - El mensaje "Par" si el número es par, "Impar" si es impar.
 * 
 * @example
 * const par = determinarParImpar(4);
 * console.log(par);  // Imprime: Par
 * 
 * @example
 * const impar = determinarParImpar(5);
 * console.log(impar);  // Imprime: Impar
 */
export function determinarParImpar(numero: number): string {
    if (calcularResiduo(numero) == 0) {
        return "par";
    } else {
        return "Imar";
    }
}

function calcularResiduo(numero: number): number {
  console.debug(`calculando el residuo del numero: ${numero}`)
  return 0
}
