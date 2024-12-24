import { describe, it } from "node:test";
import assert from "node:assert";
import { calcularImpuesto } from "./impuestos";

describe('calcularImpuesto', () => {
  it('la funcion existe', () => {
    assert.ok(calcularImpuesto != null, 'la funcion no existe')
  });

  it('la funcion retorna un numero', () => {
    let resultado = calcularImpuesto(15000);
    assert.ok(typeof resultado === 'number');
  });

  it('debe retornar 0% de impuesto para ingresos menores a 20,000', () => {
    assert.ok(calcularImpuesto(15000) === 0);
    assert.ok(calcularImpuesto(19999) === 0);
  });

  it('debe retornar 10% de impuesto para ingresos entre 20,000 y 50,000', () => {
    assert.ok(calcularImpuesto(25000) === 10);
    assert.ok(calcularImpuesto(50000) === 10);
  });

  it('debe retornar 20% de impuesto para ingresos mayores a 50,000', () => {
    assert.ok(calcularImpuesto(60000) === 20);
    assert.ok(calcularImpuesto(100000) === 20);
  });
});

