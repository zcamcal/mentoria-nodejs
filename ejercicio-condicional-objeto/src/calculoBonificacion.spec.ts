import { describe, it } from "node:test";
import assert from "node:assert";
import { calcularBonificacion, Roles, Trabajador } from "./calculoBonificacion";

// Test de la función calcularBonificacion
describe('calcularBonificacion', () => {

  // Verificar si la función existe
  it('la función existe', () => {
    assert.ok(calcularBonificacion != null, 'la función no existe');
  });

  // Verificar que la función retorna un número
  it('la función retorna un número', () => {
    const trabajador: Trabajador = {
      id: "T001",
      nombre: "Juan",
      apellido: "Pérez",
      sueldo: 3000,
      aniosTrabajado: 3,
      rol: Roles.DESARROLLADOR
    };
    const resultado = calcularBonificacion(trabajador);
    assert.ok(typeof resultado === 'number');
  });

  // Verificar bonificación para menos de 2 años de trabajo
  it('debe retornar 0% del salario para menos de 2 años de trabajo', () => {
    const trabajador1: Trabajador = {
      id: "T001",
      nombre: "Juan",
      apellido: "Pérez",
      sueldo: 2000,
      aniosTrabajado: 1,
      rol: Roles.DESARROLLADOR
    };
    assert.ok(calcularBonificacion(trabajador1) === 0);  // No bonificación

    const trabajador2: Trabajador = {
      id: "T002",
      nombre: "Ana",
      apellido: "Gómez",
      sueldo: 2000,
      aniosTrabajado: 0,
      rol: Roles.DESARROLLADOR
    };
    assert.ok(calcularBonificacion(trabajador2) === 0);  // No bonificación
  });

  // Verificar bonificación para entre 2 y 5 años de trabajo (5%)
  it('debe retornar 5% del salario para entre 2 y 5 años de trabajo', () => {
    const trabajador1: Trabajador = {
      id: "T001",
      nombre: "Juan",
      apellido: "Pérez",
      sueldo: 2000,
      aniosTrabajado: 2,
      rol: Roles.DESARROLLADOR
    };
    assert.ok(calcularBonificacion(trabajador1) === 100);  // 5% de 2000

    const trabajador2: Trabajador = {
      id: "T002",
      nombre: "Carlos",
      apellido: "Martínez",
      sueldo: 2000,
      aniosTrabajado: 5,
      rol: Roles.DESARROLLADOR
    };
    assert.ok(calcularBonificacion(trabajador2) === 100);  // 5% de 2000
  });

  // Verificar bonificación para más de 5 años de trabajo (10%)
  it('debe retornar 10% del salario para más de 5 años de trabajo', () => {
    const trabajador1: Trabajador = {
      id: "T001",
      nombre: "Juan",
      apellido: "Pérez",
      sueldo: 2000,
      aniosTrabajado: 6,
      rol: Roles.DESARROLLADOR
    };
    assert.ok(calcularBonificacion(trabajador1) === 200);  // 10% de 2000

    const trabajador2: Trabajador = {
      id: "T002",
      nombre: "Ana",
      apellido: "Gómez",
      sueldo: 2000,
      aniosTrabajado: 10,
      rol: Roles.DESARROLLADOR
    };
    assert.ok(calcularBonificacion(trabajador2) === 200);  // 10% de 2000
  });

  // Verificar bonificación extra por rol
  it('debe aplicar bonificación extra dependiendo del rol', () => {
    const trabajador1: Trabajador = {
      id: "T001",
      nombre: "Juan",
      apellido: "Pérez",
      sueldo: 2000,
      aniosTrabajado: 5,
      rol: Roles.GERENTE
    };
    assert.ok(calcularBonificacion(trabajador1) === 1200);  // 5% + 20% (Gerente) = 1200

    const trabajador2: Trabajador = {
      id: "T002",
      nombre: "Carlos",
      apellido: "Martínez",
      sueldo: 2000,
      aniosTrabajado: 5,
      rol: Roles.INTERNO
    };
    assert.ok(calcularBonificacion(trabajador2) === 2040);  // 5% + 2% (Interno) = 2040
  });

  // Verificar bonificación extra por letra del mes
  it('debe aplicar bonificación extra si el nombre comienza con la letra del mes actual', () => {
    const mesActual = new Date().toLocaleString('default', { month: 'long' }).charAt(0).toUpperCase();

    // Verificamos si el nombre comienza con la letra del mes
    const trabajador: Trabajador = {
      id: "T001",
      nombre: mesActual + "liana",  // Supongamos que estamos en enero y el nombre comienza con 'E'
      apellido: "Pérez",
      sueldo: 3000,
      aniosTrabajado: 3,
      rol: Roles.DESARROLLADOR
    };

    const bonificacion = calcularBonificacion(trabajador);

    if (mesActual === 'E') {
      assert.ok(bonificacion === 330);  // Bonificación base (5%) + extra (5%)
    } else {
      assert.ok(bonificacion === 300);  // Solo bonificación base (5%)
    }
  });

  // Verificar bonificación cuando el salario es menor o igual a 0
  it('debe retornar 0% si el salario es menor o igual a 0', () => {
    const trabajador1: Trabajador = {
      id: "T001",
      nombre: "Juan",
      apellido: "Pérez",
      sueldo: 0,
      aniosTrabajado: 3,
      rol: Roles.DESARROLLADOR
    };
    assert.ok(calcularBonificacion(trabajador1) === 0);  // No bonificación

    const trabajador2: Trabajador = {
      id: "T002",
      nombre: "Carlos",
      apellido: "Martínez",
      sueldo: -1000,
      aniosTrabajado: 5,
      rol: Roles.DESARROLLADOR
    };
    assert.ok(calcularBonificacion(trabajador2) === 0);  // No bonificación
  });

  // Verificar bonificación cuando el salario es negativo
  it('debe retornar 0% si el salario es negativo', () => {
    const trabajador: Trabajador = {
      id: "T001",
      nombre: "Juan",
      apellido: "Pérez",
      sueldo: -500,
      aniosTrabajado: 3,
      rol: Roles.DESARROLLADOR
    };
    assert.ok(calcularBonificacion(trabajador) === 0);  // No bonificación
  });

});
