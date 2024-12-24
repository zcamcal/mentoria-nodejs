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

  it('debe retornar el 5% del sueldo para 1 año de trabajo', () => {
    assert.ok(calcularBonificacion(2000, 1) === 100);
  });

  it('debe retornar el 10% del sueldo para 3 años de trabajo', () => {
    assert.ok(calcularBonificacion(2000, 3) === 200);
  });

  it('debe retornar el 20% del sueldo para 5 años de trabajo', () => {
    assert.ok(calcularBonificacion(2000, 5) === 400);
  });

  it('debe retornar el 30% del sueldo para 10 años de trabajo', () => {
    assert.ok(calcularBonificacion(2000, 10) === 600);
  });

  it('debe retornar el 50% del sueldo para más de 10 años de trabajo', () => {
    assert.ok(calcularBonificacion(2000, 12) === 1000);
    assert.ok(calcularBonificacion(2000, 15) === 1000);
  });

  it('debe retornar 0 si los años de trabajo son menos de 1 año', () => {
    assert.ok(calcularBonificacion(2000, 0) === 0);
    assert.ok(calcularBonificacion(2000, 0.5) === 0);
  });

  it('debe retornar 0 si el sueldo es 0', () => {
    assert.ok(calcularBonificacion(0, 5) === 0);
    assert.ok(calcularBonificacion(0, 10) === 0);
  });

  it('debe retornar 0 si el sueldo es negativo', () => {
    assert.ok(calcularBonificacion(-1000, 5) === 0);
  });
});
