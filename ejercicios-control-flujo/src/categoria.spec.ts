import { describe, it } from "node:test";

import { encontrarDescuentoCategoria } from "./categoria";
import assert from "node:assert";

const categorias = [
  { name: "Electronica", descuento: 15 },
  { name: "Ropa", descuento: 10 },
  { name: "Juguetes", descuento: 20 },
  { name: "Alimentos", descuento: 5 },
  { name: "Deportes", descuento: 25 },
  { name: "deportes", descuento: 25 },
  { name: "Muebles", descuento: 30 },
  { name: "Hogar", descuento: 10 },
  { name: "hogar", descuento: 10 },
  { name: "Libros", descuento: 15 },
  { name: "Belleza", descuento: 18 },
  { name: "No existe", descuento: 0 },
  { name: "Algun otro no mapeado", descuento: 0 },
]

describe('test', () => {
  it('la funcion existe', () => {
    assert.ok(encontrarDescuentoCategoria != null, 'la funcion no existe')
  })

  it('la funcion retorna un numero', () => {
    let descuentoPorAplicar = encontrarDescuentoCategoria("Electronica")
    assert.ok(typeof descuentoPorAplicar === 'number')
  })

  for (let categoria of categorias) {
    it(`descuento para categoria: '${categoria.name}' del ${categoria.descuento}%`, () => {
        let descuentoPorAplicar = encontrarDescuentoCategoria(categoria.name)
        assert.ok(descuentoPorAplicar == categoria.descuento, `el descuento aplicado fue del ${descuentoPorAplicar} no corresponde al ${categoria.descuento} esperado`)
    })
  }

})
