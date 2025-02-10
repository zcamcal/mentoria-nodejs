import { describe, it } from "node:test";
import assert from "node:assert";
import { fibofibo, fibocito } from "./fibonacci";

describe('Funciones Fibonacci', () => {

  it('fibofibo debe existir', () => {
    assert.ok(fibofibo != null, 'fibofibo no existe');
  });

  it('fibocito debe existir', () => {
    assert.ok(fibocito != null, 'fibocito no existe');
  });

  it('fibofibo debe retornar la secuencia de Fibonacci hasta N=5', () => {
    const resultado = fibofibo(5);
    assert.deepEqual(resultado, [0, 1, 1, 2, 3], 'La secuencia Fibonacci no es correcta');
  });

  it('fibofibo debe retornar solo el primer número de la secuencia (N=1)', () => {
    const resultado = fibofibo(1);
    assert.deepEqual(resultado, [0], 'La secuencia Fibonacci no es correcta');
  });

  it('fibofibo debe retornar la secuencia de Fibonacci hasta N=10', () => {
    const resultado = fibofibo(10);
    assert.deepEqual(resultado, [0, 1, 1, 2, 3, 5, 8, 13, 21, 34], 'La secuencia Fibonacci no es correcta');
  });

  it('fibocito debe retornar la suma de Fibonacci entre N=3 y M=5', () => {
    const resultado = fibocito(3, 5);
    assert.strictEqual(resultado, 10, 'La suma de Fibonacci entre N y M no es correcta');  // 2 + 3 + 5 = 10
  });

  it('fibocito debe retornar la suma de Fibonacci entre N=0 y M=2', () => {
    const resultado = fibocito(0, 2);
    assert.strictEqual(resultado, 2, 'La suma de Fibonacci entre N y M no es correcta');  // 0 + 1 + 1 = 2
  });

  it('fibocito debe retornar solo el número de Fibonacci en el índice N=M=4', () => {
    const resultado = fibocito(4, 4);
    assert.strictEqual(resultado, 3, 'El número de Fibonacci en la posición N=M no es correcto');  // 3
  });

  it('fibocito debe retornar la suma de Fibonacci entre N=5 y M=7', () => {
    const resultado = fibocito(5, 7);
    assert.strictEqual(resultado, 18, 'La suma de Fibonacci entre N y M no es correcta');  // 5 + 8 + 13 = 18
  });

  it('fibofibo debe retornar un arreglo vacío si N es menor o igual a 0', () => {
    const resultado1 = fibofibo(0);
    const resultado2 = fibofibo(-5);
    assert.deepEqual(resultado1, [], 'La secuencia de Fibonacci para N=0 no es correcta');
    assert.deepEqual(resultado2, [], 'La secuencia de Fibonacci para N<0 no es correcta');
  });

  it('fibocito debe retornar un error o valor negativo si N > M', () => {
    try {
      const resultado = fibocito(5, 3);
      assert.fail(`'La función no debe permitir que N sea mayor que M', resultado: ${resultado}`);
    } catch (e) {
      assert.ok(e instanceof Error, 'Se esperaba un error');
    }
  });

});
