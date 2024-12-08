
// No hagas nada con el codigo a continuacion:
// Simplemente declaramos como deberia ser un objeto estudiante, es decir
// que atributos deberia tener para ser considerado estudiante.
interface estudiante {
  nombre: string,
  edad: number
}
// Hasta aqui

//Objetivo: calcular el promedio de las edades de los estudiantes.
//Enunciado: Escribe una función que reciba un arreglo de objetos representando estudiantes. Cada objeto tiene las propiedades nombre (cadena) y edad (número). La función debe calcular y devolver el promedio de las edades de los estudiantes mayores de 18 años.

/**
 * Esta funcion retorna el promedio de edad de los estudiantes mayores de 18 anios
 * @param {[{nombre: string, edad: number}]} estudiantes 
 *
 * @returns {number} retorna el promedio de edad de los estudiantes mayores de 18 anios, en caso de no haber mayores de edad devolver -1
 *
 * @example
 * si hay 3 estudiantes, pero 2 tienen 18 anios y el otro 12, el resultado seria 18 el promedio de edad.
 * si hay 3 estudiantes, pero ninguno es mayor a 18 anios, el resultado seria -1
 */
export function calcularPromedioEdadAdultos(estudiantes: estudiante[]): number {
  // tu codigo aqui :)
  throw new Error("no implementada la funcion!") //eliminar cuando se vaya a implementar
}
