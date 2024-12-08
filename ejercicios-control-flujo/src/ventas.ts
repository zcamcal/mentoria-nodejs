/**
 * Calcula el total a pagar por un producto, aplicando su precio y cualquier descuento correspondiente.
 * 
 * Esta función recibe el nombre de un producto como parámetro, obtiene su precio y calcula el total a pagar,
 * considerando los descuentos disponibles para la categoría del producto. Si el producto no existe o no tiene
 * descuento aplicable, la función simplemente retorna el precio original.
 * 
 * @param producto - El nombre del producto cuyo total a pagar se desea calcular. 
 * @returns - El total a pagar por el producto después de aplicar el descuento (si corresponde).
 * 
 * @example
 * Si el producto es "Smartphone Samsung Galaxy S23" y pertenece a la categoría 'Electrónica' con un 15% de descuento,
 * y el precio del producto es 799, el total a pagar sería 679.
 * calcularTotalPagar('Smartphone Samsung Galaxy S23'); 
 * Resultado: 679
 * 
 * @example
 * Si el producto es "Bicicleta de Montaña Trek Marlin 7", que pertenece a la categoría 'Deportes' con un 25% de descuento,
 * y el precio es 899, el total a pagar sería 674.
 * calcularTotalPagar('Bicicleta de Montaña Trek Marlin 7');
 * Resultado: 674
 * 
 * @example
 * Si el producto no existe, por ejemplo, 'Producto Inexistente', la función podría retornar 0.
 * calcularTotalPagar('Producto Inexistente');
 * Resultado: 0
 * 
 * @example
 * Si el producto no tiene descuento, como "Camiseta Básica", y su precio es 19, el total a pagar sería igual al precio.
 * calcularTotalPagar('Camiseta Básica');
 * Resultado: 19
 */
export function calcularTotalPagar(producto: string): number {
  
}

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
