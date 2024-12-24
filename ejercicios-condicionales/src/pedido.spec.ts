import { describe, it } from "node:test";
import assert from "node:assert";
import { verificarEstadoPedido } from "./pedido";

describe('verificarEstadoPedido', () => {
  it('la funcion existe', () => {
    assert.ok(verificarEstadoPedido != null, 'la funcion no existe')
  });

  it('la funcion retorna un string', () => {
    let resultado = verificarEstadoPedido(1);
    assert.ok(typeof resultado === 'string');
  });

  it('debe retornar "Enviado" para el seguimiento 1', () => {
    assert.ok(verificarEstadoPedido(1) === "Enviado");
  });

  it('debe retornar "En proceso" para el seguimiento 2', () => {
    assert.ok(verificarEstadoPedido(2) === "En proceso");
  });

  it('debe retornar "Entregado" para el seguimiento 3', () => {
    assert.ok(verificarEstadoPedido(3) === "Entregado");
  });

  it('debe retornar "Cancelado" para el seguimiento 4', () => {
    assert.ok(verificarEstadoPedido(4) === "Cancelado");
  });

  it('debe retornar "Desconocido" para un seguimiento no válido', () => {
    assert.ok(verificarEstadoPedido(5) === "Desconocido");
    assert.ok(verificarEstadoPedido(100) === "Desconocido");
  });
});

