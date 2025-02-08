# Welcome
Recuerda que a estas alturas ya debes ir conociendo mas sobre el proyecto y su estructura, por lo que debes ser capas de ir resolviendo mas problemas que unicamente lo necesario a desarrollar.

# Requisitos
- pnpm
- node

# Estructura
- package.json: <completar que es este archivo aqui>
- tsconfig.json: <completar que es este archivo aqui>

# Ejercicios
los siguientes son los comandos que puedes usar para probar los archivos.
- `test:fibo`: <completar aqui donde se encuentra esta linea y como es que funciona>

**DISCLAIMER**: lo siguiente fue generado con chat gpt para simular lo que podria salir de una persona que necesita algo, la idea es que puedas leer entre lineas, y preguntar cualquier duda que tengas para trabajar de buena forma la necesidad del usuario y acercarte lo mas posible a su real necesidad.

# ARCHIVO: Fibonacci.ts
Aqui debes desarrollar por tu cuenta el archivo completo, recuerda que hay un archivo con el mismo nombre pero que tiene la palabra `spec`, este archivo `spec` son las pruebas que se ejecutaran para validar lo creado en el archivo `fibonacci.ts`, debes desarrollar lo siguiente

## Función: `fibofibo`
### Descripción
La función `fibofibo` genera la secuencia de Fibonacci hasta el término `N`. Recibe un número `N` mayor que 0 y devuelve un arreglo con los primeros `N` términos de la secuencia de Fibonacci.

### Argumentos:
- `N` (number): Un número entero mayor que 0, que indica cuántos términos de la secuencia de Fibonacci se deben devolver.

### Tipo de Retorno:
- La función debe retornar un arreglo de números (`number[]`), que contiene los primeros `N` términos de la secuencia de Fibonacci.

### Historia de Usuario
**como** usuario que necesita calcular los primeros `N` números de la secuencia de Fibonacci,  
**Quiero** una función que me devuelva la secuencia de Fibonacci hasta un número `N`,  
**para** poder trabajar con ellos en cálculos o visualizaciones posteriores.

### Criterios de Aceptación:

1. **Caso básico**: Si `N = 5`, la función debe devolver `[0, 1, 1, 2, 3]`.
   
2. **Caso con un solo término**: Si `N = 1`, la función debe devolver `[0]`.
   
3. **Caso con secuencia vacía**: Si `N <= 0`, la función debe devolver un arreglo vacío `[]`.

4. **Caso con más términos**: Si `N = 10`, la función debe devolver `[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]`.

## Función: `fibocito`

### Descripción
La función `fibocito` recibe dos números enteros, `N` y `M`, y calcula la suma de los términos de la secuencia de Fibonacci entre los índices `N` y `M` (inclusive). La secuencia de Fibonacci comienza desde el índice 0.

### Argumentos:
- `N` (number): Un número entero que indica el índice inicial de la secuencia de Fibonacci (inclusive).
- `M` (number): Un número entero que indica el índice final de la secuencia de Fibonacci (inclusive).

### Tipo de Retorno:
- La función debe retornar un número (`number`) que es la suma de los términos de Fibonacci entre los índices `N` y `M`, ambos inclusive.

### Historia de Usuario
**como** usuario que necesita obtener una suma específica de una porción de la secuencia de Fibonacci,  
**Quiero** una función que me devuelva la suma de los términos de Fibonacci desde el índice `N` hasta el índice `M`,  
**para** poder realizar cálculos con un subconjunto de la secuencia sin tener que generar toda la secuencia.

### Criterios de Aceptación:

1. **Caso básico**: Si `N = 3` y `M = 5`, la función debe devolver `10` (es decir, la suma de 2 + 3 + 5).

2. **Caso con secuencia más pequeña**: Si `N = 0` y `M = 2`, la función debe devolver `2` (es decir, la suma de 0 + 1 + 1).

3. **Caso con índices invertidos**: Si `N = 5` y `M = 3`, la función debe manejar este caso como un error o retornar un valor negativo (dependiendo de la implementación), ya que el índice `N` no puede ser mayor que `M`.

4. **Caso con un solo término**: Si `N = 5` y `M = 5`, la función debe devolver `5` (es decir, solo el término en el índice 5).

