/**
 * Encuentra la categoría a la que pertenece un producto.
 * 
 * Esta función recibe el nombre de un producto y devuelve la categoría correspondiente.
 * Si el producto no está registrado o no tiene categoría asignada, retornará un valor adecuado
 * ("ninguna") para indicar que no se ha encontrado la categoría.
 * 
 * @param producto - El nombre del producto cuyo categoría se desea obtener.
 *
 * @returns - La categoría a la que pertenece el producto. Si no se encuentra el producto,
 * retorna el literal string "ninguna". 
 * 
 * @example
 * Si el producto es un "Smartphone Samsung Galaxy S23", la función podría retornar "Electrónica".
 * encontrarCategoriaDelProducto('Smartphone Samsung Galaxy S23'); 
 * Resultado: "Electrónica"
 * 
 * @example
 * Si el producto no existe, por ejemplo, 'Producto Inexistente', se podría retornar null.
 * encontrarCategoriaDelProducto('Producto Inexistente');
 * Resultado: "ninguna" 
 * 
 * @example
 *  Si el nombre del producto es 'Bicicleta de Montaña Trek Marlin 7', la función debe retornar "Deportes".
 * encontrarCategoriaDelProducto('Bicicleta de Montaña Trek Marlin 7');
 *  Resultado: "Deportes"
 */
export function encontrarCategoriaDelProducto(producto: string): string {

}

/**
 * Encuentra el precio de un producto dado su nombre.
 * 
 * Esta función recibe el nombre de un producto como parámetro y devuelve su precio correspondiente.
 * Si el producto no se encuentra en el sistema, la función retornará un valor adecuado (0)
 * para indicar que no se ha encontrado el precio del producto.
 * 
 * @param producto - El nombre del producto cuyo precio se desea obtener.
 *
 * @returns - El precio del producto en formato de cadena. Si el producto no se encuentra,
 * retorna 0
 * 
 * @example
 * Si el producto es un "Smartphone Samsung Galaxy S23", la función podría retornar el precio como "799".
 * encontrarPrecioDelProducto('Smartphone Samsung Galaxy S23'); 
 * Resultado: "799"
 * 
 * @example
 * Si el producto no existe, por ejemplo, 'Producto Inexistente', se podría retornar null.
 * encontrarPrecioDelProducto('Producto Inexistente');
 * Resultado: null
 * 
 * @example
 * Si el producto es 'Bicicleta de Montaña Trek Marlin 7', la función debe retornar su precio "899".
 * encontrarPrecioDelProducto('Bicicleta de Montaña Trek Marlin 7');
 * Resultado: "899"
 */
export function encontrarPrecioDelProducto(producto: string): number {

}
