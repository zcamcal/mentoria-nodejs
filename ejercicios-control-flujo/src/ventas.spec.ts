import assert from "node:assert";
import { vender } from "./ventas";
import { describe, it } from "node:test";

const pagos = [
  { pago: 600000, producto: "Smartphone Samsung Galaxy S23", vuelto: 21507.50 },
  { pago: 230000, producto: "Auriculares Bose QuietComfort 45", vuelto: -7566.50 },
  { pago: 55000, producto: "Jeans Levi's 501", vuelto: 1459.00 },
  { pago: 50000, producto: "Camisa de Manga Larga Tommy Hilfiger", vuelto: -7375.00 },
  { pago: 110000, producto: "LEGO Star Wars Millennium Falcon", vuelto: 1208.00 },
  { pago: 10000, producto: "Peluche de Pelotero de Toy Story", vuelto: -3592.00 },
  { pago: 5000, producto: "Cereal Kellogg's Cornflakes", vuelto: 962.00 },
  { pago: 6000, producto: "Pechuga de Pollo Congelada", vuelto: -451.45 },
  { pago: 20000, producto: "Pelota de Fútbol Adidas Predator", vuelto: 4070.00 },
  { pago: 500000, producto: "Bicicleta de Montaña Trek Marlin 7", vuelto: 21882.50 },
  { pago: 300000, producto: "Sofá Cama IKEA FRIHETEN", vuelto: 2507.00 },
  { pago: 45000, producto: "Lámpara de Pie LED Philips", vuelto: -2593.00 },
  { pago: 500000, producto: "Aspiradora Dyson V11", vuelto: 41009.00 },
  { pago: 70000, producto: "Ventilador de Torre Lasko", vuelto: 1159.00 },
  { pago: 15000, producto: "Cien Años de Soledad Gabriel García Márquez", vuelto: 558.50 },
  { pago: 9000, producto: "Educated Tara Westover", vuelto: -1829.00 },
  { pago: 16000, producto: "Crema Facial Neutrogena Hydro Boost", vuelto: 735.20 },
  { pago: 100000, producto: "Perfume Chanel No. 5", vuelto: -4538.80 }
];

describe('funcion: vender', () => {
  it('la funcion existe', () => {
    assert.ok(vender != null, 'la funcion no existe')
  })

  for (let pago of pagos) {
    it(`Dado un cliente, cuando compre el producto: ${pago.producto} pagando: $${pago.pago}, entonces le daremos un vuelto de: $${pago.vuelto}`, () => {
      let vuelto: number = vender(pago.pago, pago.producto)
      assert.ok(vuelto === pago.vuelto, `el vuelto entregado debio ser: ${pago.vuelto}, pero fue: ${vuelto}`)
    })
  }
})
