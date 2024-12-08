/**
 * Obtiene el descuento aplicable según la categoría proporcionada.
 * 
 * Esta función recibe una categoría de producto y devuelve el porcentaje de descuento que corresponde a esa categoría.
 * Si la categoría tiene un descuento predefinido, la función debe retornar el valor correspondiente en porcentaje (por ejemplo, 15 para un 15% de descuento).
 * Si la categoría no tiene descuento, o si la categoría no existe en la lista de categorías válidas, la función debe retornar 0.
 * 
 * @param categoria - El nombre de la categoría del producto. Basado en esta categoría se debe determinar el descuento aplicable.
 * 
 * @returns {number} El porcentaje de descuento correspondiente a la categoría proporcionada.
 * 
 * @example
 * Si la categoría es 'tecnología' y tiene un descuento del 15%
 * const descuentoTecnologia = descuento('tecnologia');
 * console.log(descuentoTecnologia); Resultado: 15
 * 
 * @example
 * Si la categoría no tiene descuento
 * const descuentoRopa = descuento('ropa');
 * console.log(descuentoRopa); Resultado: 0
 * 
 * @example
 * Si la categoría no existe o es desconocida
 * const descuentoInvalido = descuento('mueblesDeOficina');
 * console.log(descuentoInvalido); Resultado: 0
 */
export function descuento(categoria: string): number {

}

/**
 * Aplica un descuento a un precio dado según la categoría del producto.
 * 
 * Esta función recibe un precio y una categoría, y devuelve el precio con el descuento aplicado basado en la categoría. 
 * Los descuentos varían según la categoría, y si la categoría no es reconocida, no se aplica ningún descuento.
 * 
 * @param precio - El precio original del producto antes de aplicar el descuento. Debe ser un número positivo.
 * @param categoria - El nombre de la categoría del producto. Basado en esta categoría se aplicará el descuento correspondiente.
 * 
 * @returns El precio después de aplicar el descuento. Si la categoría no tiene descuento, se retorna el precio original.
 * 
 * @example
 * Aplicando un descuento del 15% a un producto de la categoría "Electrónica"
 * const precioConDescuento = descontar(1000, 'Electrónica'); // Resultado: 850
 * 
 * @example
 * Si la categoría no es reconocida, no se aplica descuento
 * const precioSinDescuento = descontar(1000, 'Desconocida'); // Resultado: 1000
 */
export function descontar(precio: any, categoria: string): number {

}
