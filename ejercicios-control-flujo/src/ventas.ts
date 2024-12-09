/**
 * Calcula el monto a devolver al cliente después de una compra, considerando el pago recibido y el precio del producto.
 * 
 * Esta función toma como parámetros el monto pagado por el cliente y el nombre del producto, y calcula la diferencia entre el monto pagado 
 * y el precio del producto en pesos chilenos. Si el cliente pagó de más, la función devolverá el monto extra. Si el cliente pagó lo exacto 
 * o menos del precio, la función devolverá 0, indicando que no hay cambio a devolver.
 *
 * @param pago - Monto pagado por el cliente en pesos chilenos.
 * @param producto - Nombre del producto que se está vendiendo.
 * 
 * @returns - El monto a devolver al cliente. Si el pago es mayor que el precio del producto, 
 * se retorna la diferencia; si el pago es igual al monto a pagar entonces retorna 0, si es inferior al precio retorna el valor que le falta pagar al cliente.
 *
 * @example
 * Si el precio del producto "Laptop HP" es $500,000 CLP y el cliente paga $600,000 CLP
 * El resultado será 100,000 CLP (el cambio que debe devolver el sistema).
 * const cambio = vender(600000, "Laptop HP");
 * console.log(cambio); // Imprime: 100000
 *
 * @example
 * Si el precio del producto "Camiseta Adidas" es $25,000 CLP y el cliente paga $20,000 CLP
 * El resultado será -$5.000, ya que al cliente le faltan $5.000 pesos para completar los $25.000. 
 * const cambio = vender(20000, "Camiseta Adidas");
 * console.log(cambio); // Imprime: -5000 
 */
export function vender(pago: number, producto: string): number {

}
