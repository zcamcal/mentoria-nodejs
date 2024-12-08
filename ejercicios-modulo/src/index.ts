import { esPar } from "./ejercicio-1"
import { cuantosMultiplosHay } from "./ejercicio-2"
import { sumarImparesEnElRango } from "./ejercicio-3"
import { esAnioBisiesto } from "./ejercicio-4"
import { calcularPromedioEdadAdultos } from "./ejercicio-5"

function logAsteriskLine(numero: number) {
  console.log(`********************************************************************************************************************************`)
  console.log(`*************************************************EJERCICIO ${numero}******************************************************************`)
  console.log(`********************************************************************************************************************************`)
}

let esParTestCase = [
  { argument: 5, expected: false },
  { argument: 8, expected: true },
  { argument: 155, expected: false },
  { argument: 1, expected: false },
  { argument: 2, expected: true },
  { argument: 180, expected: true },
]

logAsteriskLine(1)
console.info(`Probaremos los casos de prueba para la funcion 'esPar'`)
for (let testCase of esParTestCase) {
  try {
    console.debug(`dado el argumento: ${testCase.argument} esperamos ${testCase.expected}`)
    let resultado = esPar(testCase.argument)
    console.debug(`el resultado fue: ${resultado}`)

    if (resultado !== testCase.expected) {
      console.error(`El resultado de esPar() no es el esperado, fue: ${resultado} y esperabamos: ${testCase.expected}`)
    }
  } catch (exception) {
    console.error(`ocurrio un error en la ejecucion del test case para la funcion esPar, error: ${exception}`)
    continue
  }
}

let cuantosMultiplosHayTestCase = [
  { argument: [3, 10], expected: 3 },  // Múltiplos de 3 dentro del rango 1-10: [3, 6, 9]
  { argument: [2, 10], expected: 5 },  // Múltiplos de 2 dentro del rango 1-10: [2, 4, 6, 8, 10]
  { argument: [5, 25], expected: 5 },  // Múltiplos de 5 dentro del rango 1-25: [5, 10, 15, 20, 25]
  { argument: [7, 50], expected: 7 },  // Múltiplos de 7 dentro del rango 1-50: [7, 14, 21, 28, 35, 42, 49]
  { argument: [10, 100], expected: 10 }, // Múltiplos de 10 dentro del rango 1-100: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
  { argument: [11, 60], expected: 5 },  // Múltiplos de 11 dentro del rango 1-60: [11, 22, 33, 44, 55]
  { argument: [6, 30], expected: 5 },   // Múltiplos de 6 dentro del rango 1-30: [6, 12, 18, 24, 30]
];

logAsteriskLine(2)
console.info(`Probaremos los casos de prueba para la funcion 'cuantosMultiplosHay'`)
for (let testCase of cuantosMultiplosHayTestCase) {
  try {
    console.debug(`dado el argumento: ${testCase.argument} esperamos ${testCase.expected}`)
    let resultado = cuantosMultiplosHay(testCase.argument[0], testCase.argument[1])
    console.debug(`el resultado fue: ${resultado}`)

    if (resultado !== testCase.expected) {
      console.error(`El resultado de cuantosMultiplosHay() no es el esperado, fue: ${resultado} y esperabamos: ${testCase.expected} `)
    }
  } catch (exception) {
    console.error(`ocurrio un error en la ejecucion del test case para la funcion cuantosMultiplosHay, error: ${exception}`)
  }
}

let sumarImparesEnElRangoTestCase = [
  { argument: [1, 5], expected: 9 },    // Impares: [1, 3, 5], suma: 1 + 3 + 5 = 9
  { argument: [1, 10], expected: 25 },   // Impares: [1, 3, 5, 7, 9], suma: 1 + 3 + 5 + 7 + 9 = 25
  { argument: [2, 10], expected: 24 },   // Impares: [3, 5, 7, 9], suma: 3 + 5 + 7 + 9 = 24
  { argument: [1, 1], expected: 1 },     // Impares: [1], suma: 1
  { argument: [10, 20], expected: 75 },  // Impares: [11, 13, 15, 17, 19], suma: 11 + 13 + 15 + 17 + 19 = 75
  { argument: [15, 30], expected: 176 }, // Impares: [15, 17, 19, 21, 23, 25, 27, 29], suma: 15 + 17 + 19 + 21 + 23 + 25 + 27 + 29 = 105
  { argument: [0, 0], expected: 0 },     // No hay impares, suma: 0
];

logAsteriskLine(3)
console.info(`Probaremos los casos de prueba para la funcion 'sumarImparesEnElRango'`)
for (let testCase of sumarImparesEnElRangoTestCase) {
  try {
    console.debug(`dado el argumento: ${testCase.argument} esperamos ${testCase.expected}`)
    let resultado = sumarImparesEnElRango(testCase.argument[0], testCase.argument[1])
    console.debug(`el resultado fue: ${resultado}`)

    if (resultado !== testCase.expected) {
      console.error(`El resultado de sumarImparesEnElRango() no es el esperado, fue: ${resultado} y esperabamos: ${testCase.expected} `)
    }
  } catch (exception) {
    console.error(`ocurrio un error en la ejecucion del test case para la funcion sumarImparesEnElRango, error: ${exception}`)
  }
}

let esAnioBisiestoTestCase = [
  { argument: 2024, expected: true },  // 2024 es divisible por 4 y no es divisible por 100, por lo que es bisiesto
  { argument: 1900, expected: false }, // 1900 es divisible por 100 pero no por 400, por lo que no es bisiesto
  { argument: 2000, expected: true },  // 2000 es divisible por 400, por lo que es bisiesto
  { argument: 2020, expected: true },  // 2020 es divisible por 4 y no por 100, por lo que es bisiesto
  { argument: 2100, expected: false }, // 2100 es divisible por 100 pero no por 400, por lo que no es bisiesto
  { argument: 2028, expected: true },  // 2028 es divisible por 4 y no por 100, por lo que es bisiesto
  { argument: 1800, expected: false }, // 1800 es divisible por 100 pero no por 400, por lo que no es bisiesto
];

logAsteriskLine(4)
console.info(`Probaremos los casos de prueba para la funcion 'esAnioBisiesto'`)
for (let testCase of esAnioBisiestoTestCase) {
  try {
    console.debug(`dado el argumento: ${testCase.argument} esperamos ${testCase.expected}`)
    let resultado = esAnioBisiesto(testCase.argument)
    console.debug(`el resultado fue: ${resultado}`)

    if (resultado !== testCase.expected) {
      console.error(`El resultado de esAnioBisiesto() no es el esperado, fue: ${resultado} y esperabamos: ${testCase.expected} `)
    }
  } catch (exception) {
    console.error(`ocurrio un error en la ejecucion del test case para la funcion esAnioBisiesto, error: ${exception}`)
  }
}

let calcularPromedioEdadAdultosTestCase = [
  { argument: [{nombre: "Pedro", edad: 15}, {nombre: "Juan", edad: 20}], expected: 20 }, // Solo Juan es adulto, el promedio es 20
  { argument: [{nombre: "Ana", edad: 19}, {nombre: "Carlos", edad: 17}, {nombre: "Luisa", edad: 22}], expected: 20.5 }, // Ana y Luisa son adultos, promedio de (19 + 22) / 2 = 20.5
  { argument: [{nombre: "Javier", edad: 25}, {nombre: "Ricardo", edad: 30}], expected: 27.5 }, // Ambos son adultos, promedio de (25 + 30) / 2 = 27.5
  { argument: [{nombre: "Mario", edad: 16}, {nombre: "Lucía", edad: 16}], expected: -1 }, // Ninguno es adulto, debería devolver null
  { argument: [{nombre: "Luis", edad: 18}], expected: -1 }, // Sólo tiene 18 años, no es considerado adulto según las reglas
  { argument: [{nombre: "Maria", edad: 35}, {nombre: "Pablo", edad: 40}], expected: 37.5 }, // Ambos son adultos, promedio de (35 + 40) / 2 = 37.5
];

logAsteriskLine(5)
console.info(`Probaremos los casos de prueba para la funcion 'calcularPromedioEdadAdultos'`)
for (let testCase of calcularPromedioEdadAdultosTestCase) {
  try {
    console.debug(`dado el argumento: ${JSON.stringify(testCase.argument)} esperamos ${testCase.expected}`)
    let resultado = calcularPromedioEdadAdultos(testCase.argument)
    console.debug(`el resultado fue: ${resultado}`)

    if (resultado !== testCase.expected) {
      console.error(`El resultado de calcularPromedioEdadAdultos() no es el esperado, fue: ${resultado} y esperabamos: ${testCase.expected} `)
    }
  } catch (exception) {
    console.error(`ocurrio un error en la ejecucion del test case para la funcion calcularPromedioEdadAdultos, error: ${exception}`)
  }
}
