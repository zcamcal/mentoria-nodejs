import { describe, it } from "node:test";
import assert from "node:assert";
import { verificarRango, verificarSigno, compararNumeros, categorizarNumero, verificarNumeroPrimo } from "./numeros";

describe('compararNumeros', () => {
  it('la funcion existe', () => {
    assert.ok(compararNumeros != null, 'la funcion no existe')
  });

  it('la funcion retorna un string', () => {
    let resultado = compararNumeros(10, 5);
    assert.ok(typeof resultado === 'string');
  });

  it('debe retornar "Mayor" si el primer número es mayor', () => {
    assert.ok(compararNumeros(10, 5) === "Mayor");
    assert.ok(compararNumeros(100, 99) === "Mayor");
  });

  it('debe retornar "Menor" si el primer número es menor', () => {
    assert.ok(compararNumeros(5, 10) === "Menor");
    assert.ok(compararNumeros(50, 100) === "Menor");
  });

  it('debe retornar "Igual" si los números son iguales', () => {
    assert.ok(compararNumeros(5, 5) === "Igual");
    assert.ok(compararNumeros(100, 100) === "Igual");
  });
});


describe('categorizarNumero', () => {
  it('la funcion existe', () => {
    assert.ok(categorizarNumero != null, 'la funcion no existe')
  });

  it('la funcion retorna un string', () => {
    let resultado = categorizarNumero(5);
    assert.ok(typeof resultado === 'string');
  });

  it('debe retornar "Pequeño" para números menores a 10', () => {
    assert.ok(categorizarNumero(5) === "Pequeño");
    assert.ok(categorizarNumero(0) === "Pequeño");
  });

  it('debe retornar "Mediano" para números entre 10 y 100', () => {
    assert.ok(categorizarNumero(50) === "Mediano");
    assert.ok(categorizarNumero(100) === "Mediano");
  });

  it('debe retornar "Grande" para números mayores a 100', () => {
    assert.ok(categorizarNumero(150) === "Grande");
    assert.ok(categorizarNumero(1000) === "Grande");
  });
});

describe('verificarRango', () => {
  it('la funcion existe', () => {
    assert.ok(verificarRango != null, 'la funcion no existe')
  });

  it('la funcion retorna un booleano', () => {
    let resultado = verificarRango(30);
    assert.ok(typeof resultado === 'boolean');
  });

  it('debe retornar true si el número está entre 10 y 50', () => {
    assert.ok(verificarRango(30));
    assert.ok(verificarRango(50));
    assert.ok(verificarRango(10));
  });

  it('debe retornar false si el número está fuera del rango', () => {
    assert.ok(!verificarRango(5));
    assert.ok(!verificarRango(60));
  });
});

describe('verificarSigno', () => {
  it('la funcion existe', () => {
    assert.ok(verificarSigno != null, 'la funcion no existe');
  });

  it('la funcion retorna un string', () => {
    let resultado = verificarSigno(5);
    assert.ok(typeof resultado === 'string');
  });

  it('debe retornar "Positivo" para números mayores que 0', () => {
    assert.ok(verificarSigno(1) === "Positivo");
    assert.ok(verificarSigno(100) === "Positivo");
    assert.ok(verificarSigno(999) === "Positivo");
  });

  it('debe retornar "Negativo" para números menores que 0', () => {
    assert.ok(verificarSigno(-1) === "Negativo");
    assert.ok(verificarSigno(-100) === "Negativo");
    assert.ok(verificarSigno(-999) === "Negativo");
  });

  it('debe retornar "Cero" para el número 0', () => {
    assert.ok(verificarSigno(0) === "Cero");
  });
});

describe('verificarNumeroPrimo', () => {
  it('la funcion existe', () => {
    assert.ok(verificarNumeroPrimo != null, 'la funcion no existe');
  });

  it('la funcion retorna un booleano', () => {
    let resultado = verificarNumeroPrimo(7);
    assert.ok(typeof resultado === 'boolean');
  });

  it('debe retornar true para números primos', () => {
    assert.ok(verificarNumeroPrimo(2)); // 2 es primo
    assert.ok(verificarNumeroPrimo(3)); // 3 es primo
    assert.ok(verificarNumeroPrimo(5)); // 5 es primo
    assert.ok(verificarNumeroPrimo(7)); // 7 es primo
    assert.ok(verificarNumeroPrimo(11)); // 11 es primo
    assert.ok(verificarNumeroPrimo(13)); // 13 es primo
  });

  it('debe retornar false para números no primos', () => {
    assert.ok(!verificarNumeroPrimo(1)); // 1 no es primo
    assert.ok(!verificarNumeroPrimo(4)); // 4 no es primo
    assert.ok(!verificarNumeroPrimo(6)); // 6 no es primo
    assert.ok(!verificarNumeroPrimo(8)); // 8 no es primo
    assert.ok(!verificarNumeroPrimo(9)); // 9 no es primo
    assert.ok(!verificarNumeroPrimo(15)); // 15 no es primo
  });

  it('debe retornar false para números negativos', () => {
    assert.ok(!verificarNumeroPrimo(-3)); // -3 no es primo
    assert.ok(!verificarNumeroPrimo(-5)); // -5 no es primo
  });

  it('debe retornar false para el número 0', () => {
    assert.ok(!verificarNumeroPrimo(0)); // 0 no es primo
  });
});
