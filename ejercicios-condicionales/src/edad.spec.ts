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

  it('debe clasificar como "Niñez" para edades menores a 13', () => {
    assert.ok(clasificarEdad(5) === "Niñez");
    assert.ok(clasificarEdad(11) === "Niñez");
  });

  it('debe clasificar como "Adolescencia" para edades entre 13 y 18', () => {
    assert.ok(clasificarEdad(13) === "Adolescencia");
    assert.ok(clasificarEdad(18) === "Adolescencia");
  });

  it('debe clasificar como "Adultez" para edades entre 19 y 64', () => {
    assert.ok(clasificarEdad(19) === "Adultez");
    assert.ok(clasificarEdad(40) === "Adultez");
    assert.ok(clasificarEdad(64) === "Adultez");
  });

  it('debe clasificar como "Vejez" para edades mayores o iguales a 65', () => {
    assert.ok(clasificarEdad(65) === "Vejez");
    assert.ok(clasificarEdad(80) === "Vejez");
  });
});
