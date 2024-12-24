import { describe, it } from "node:test";
import assert from "node:assert";
import { clasificarTemperatura } from "./temperatura";

describe('clasificarTemperatura', () => {
  it('la funcion existe', () => {
    assert.ok(clasificarTemperatura  != null, 'la funcion no existe');
  });

  it('la funcion retorna un string', () => {
    let resultado = clasificarTemperatura(20);
    assert.ok(typeof resultado === 'string');
  });

  it('debe retornar "Frío" para temperaturas menores a 0°C', () => {
    assert.ok(clasificarTemperatura(0) !== "Frío");
    assert.ok(clasificarTemperatura(5) !== "Frío");
    assert.ok(clasificarTemperatura(-5) === "Frío");
  });

  it('debe retornar "Templado" para temperaturas entre 0°C y 20°C', () => {
    assert.ok(clasificarTemperatura(0) === "Templado");
    assert.ok(clasificarTemperatura(15) === "Templado");
    assert.ok(clasificarTemperatura(20) === "Templado");
    assert.ok(clasificarTemperatura(30) !== "Templado");
    assert.ok(clasificarTemperatura(-2) !== "Templado");
  });

  it('debe retornar "Caliente" para temperaturas mayores a 30°C', () => {
    assert.ok(clasificarTemperatura(31) === "Caliente");
    assert.ok(clasificarTemperatura(40) === "Caliente");
    assert.ok(clasificarTemperatura(45) === "Caliente");
    assert.ok(clasificarTemperatura(5) !== "Caliente");
  });
});
