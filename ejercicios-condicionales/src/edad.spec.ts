import { describe, it } from "node:test";
import assert from "node:assert";
import { clasificarEdad, verificarAdultez, verificarEdadParaConducir } from "./edad";

describe('verificarEdadParaConducir', () => {
  it('la funcion existe', () => {
    assert.ok(verificarEdadParaConducir != null, 'la funcion no existe')
  });

  it('la funcion retorna un booleano', () => {
    let resultado = verificarEdadParaConducir(20);
    assert.ok(typeof resultado === 'boolean');
  });

  it('debe retornar true si la edad es mayor o igual a 18', () => {
    assert.ok(verificarEdadParaConducir(18));
    assert.ok(verificarEdadParaConducir(30));
  });

  it('debe retornar false si la edad es menor a 18', () => {
    assert.ok(!verificarEdadParaConducir(16));
    assert.ok(!verificarEdadParaConducir(17));
  });
});

describe('verificarAdultez', () => {
  it('la funcion existe', () => {
    assert.ok(verificarAdultez != null, 'la funcion no existe');
  });

  it('la funcion retorna un booleano', () => {
    let resultado = verificarAdultez(18);
    assert.ok(typeof resultado === 'boolean');
  });

  it('debe retornar true si la edad es mayor o igual a 18', () => {
    assert.ok(verificarAdultez(18));
    assert.ok(verificarAdultez(30));
    assert.ok(verificarAdultez(65));
  });

  it('debe retornar false si la edad es menor a 18', () => {
    assert.ok(!verificarAdultez(17));
    assert.ok(!verificarAdultez(16));
    assert.ok(!verificarAdultez(5));
  });
});

describe('clasificarEdad', () => {
  it('la funcion existe', () => {
    assert.ok(clasificarEdad != null, 'la funcion no existe');
  });

  it('la funcion retorna un string', () => {
    let resultado = clasificarEdad(25);
    assert.ok(typeof resultado === 'string');
  });

  it('debe clasificar como "Niño" para edades menores a 12', () => {
    assert.ok(clasificarEdad(5) === "Niño");
    assert.ok(clasificarEdad(11) === "Niño");
  });

  it('debe clasificar como "Adolescente" para edades entre 12 y 17', () => {
    assert.ok(clasificarEdad(12) === "Adolescente");
    assert.ok(clasificarEdad(17) === "Adolescente");
  });

  it('debe clasificar como "Adulto" para edades entre 18 y 64', () => {
    assert.ok(clasificarEdad(18) === "Adulto");
    assert.ok(clasificarEdad(40) === "Adulto");
    assert.ok(clasificarEdad(64) === "Adulto");
  });

  it('debe clasificar como "Senior" para edades mayores o iguales a 65', () => {
    assert.ok(clasificarEdad(65) === "Senior");
    assert.ok(clasificarEdad(80) === "Senior");
  });
});
