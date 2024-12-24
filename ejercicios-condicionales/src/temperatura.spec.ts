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

  it('debe retornar "Frío" para temperaturas menores a 10°C', () => {
    assert.ok(clasificarTemperatura(0) === "Frío");
    assert.ok(clasificarTemperatura(5) === "Frío");
    assert.ok(clasificarTemperatura(-5) === "Frío");
  });

  it('debe retornar "Atemporal" para temperaturas entre 10°C y 20°C', () => {
    assert.ok(clasificarTemperatura(10) === "Atemporal");
    assert.ok(clasificarTemperatura(15) === "Atemporal");
    assert.ok(clasificarTemperatura(20) === "Atemporal");
  });

  it('debe retornar "Cálido" para temperaturas entre 20°C y 30°C', () => {
    assert.ok(clasificarTemperatura(21) === "Cálido");
    assert.ok(clasificarTemperatura(25) === "Cálido");
    assert.ok(clasificarTemperatura(30) === "Cálido");
  });

  it('debe retornar "Calor" para temperaturas mayores a 30°C', () => {
    assert.ok(clasificarTemperatura(31) === "Calor");
    assert.ok(clasificarTemperatura(40) === "Calor");
    assert.ok(clasificarTemperatura(45) === "Calor");
  });
});

