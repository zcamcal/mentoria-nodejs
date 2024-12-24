import { describe, it } from "node:test";
import assert from "node:assert";
import { calcularBonificacion } from "./calculoBonificacion";

describe('calcularBonificacion', () => {
  it('la funcion existe', () => {
    assert.ok(calcularBonificacion != null, 'la funcion no existe');
  });

  it('la funcion retorna un número', () => {
    let resultado = calcularBonificacion(2000, 3);
    assert.ok(typeof resultado === 'number');
  });

  it('debe retornar 0% del salario para menos de 2 años de trabajo', () => {
    assert.ok(calcularBonificacion(2000, 0) === 0);  // No bonificación
    assert.ok(calcularBonificacion(2000, 1) === 0);  // No bonificación
  });

  it('debe retornar 5% del salario para entre 2 y 5 años de trabajo', () => {
    assert.ok(calcularBonificacion(2000, 2) === 100);  // 5% de 2000
    assert.ok(calcularBonificacion(2000, 3) === 100);  // 5% de 2000
    assert.ok(calcularBonificacion(2000, 5) === 100);  // 5% de 2000
  });

  it('debe retornar 10% del salario para más de 5 años de trabajo', () => {
    assert.ok(calcularBonificacion(2000, 6) === 200);  // 10% de 2000
    assert.ok(calcularBonificacion(2000, 10) === 200);  // 10% de 2000
  });

  it('debe retornar 0% si el salario es menor o igual a 0', () => {
    assert.ok(calcularBonificacion(0, 3) === 0);   // No bonificación
    assert.ok(calcularBonificacion(-1000, 5) === 0);  // No bonificación
  });

  it('debe retornar 0% si el salario es negativo', () => {
    assert.ok(calcularBonificacion(-500, 3) === 0);   // No bonificación
  });
});
