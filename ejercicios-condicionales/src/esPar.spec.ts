import { describe, it } from "node:test";
import assert from "node:assert";
import { determinarParImpar } from "./esPar";

describe('determinarParImpar', () => {
  it('la funcion existe', () => {
    assert.ok(determinarParImpar != null, 'la funcion no existe')
  });

  it('la funcion retorna un string', () => {
    let resultado = determinarParImpar(4);
    assert.ok(typeof resultado === 'string');
  });

  it('debe retornar "Par" para números pares', () => {
    assert.ok(determinarParImpar(4) === "Par");
    assert.ok(determinarParImpar(0) === "Par");
  });

  it('debe retornar "Impar" para números impares', () => {
    assert.ok(determinarParImpar(5) === "Impar");
    assert.ok(determinarParImpar(7) === "Impar");
  });
});

