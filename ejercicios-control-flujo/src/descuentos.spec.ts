import { describe, it } from "node:test";
import { descuento, descontar } from "./descuentos";
import assert from "node:assert";

const productos = [
  { nombre: "Smartphone Samsung Galaxy S23", precio: 679990, categoria: { name: "Electronica", descuento: 15 }, precioDescontado: 578492.5, descontamos: 101497.5 },
  { nombre: "Laptop HP Spectre x360", precio: 1359990, categoria: { name: "Electronica", descuento: 15 }, precioDescontado: 1155991.5, descontamos: 204998.5 },
  { nombre: "Tablet Apple iPad Air", precio: 509990, categoria: { name: "Electronica", descuento: 15 }, precioDescontado: 433491.5, descontamos: 76498.5 },
  { nombre: "Auriculares Bose QuietComfort 45", precio: 279490, categoria: { name: "Electronica", descuento: 15 }, precioDescontado: 237566.5, descontamos: 41823.5 },
  { nombre: "Cámara GoPro Hero 11", precio: 339990, categoria: { name: "Electronica", descuento: 15 }, precioDescontado: 288991.5, descontamos: 50998.5 },
  { nombre: "Sudadera Nike Sportswear", precio: 46741, categoria: { name: "Ropa", descuento: 10 }, precioDescontado: 42066.9, descontamos: 4667.1 },
  { nombre: "Jeans Levi's 501", precio: 59490, categoria: { name: "Ropa", descuento: 10 }, precioDescontado: 53541, descontamos: 5949 },
  { nombre: "Chaqueta Columbia Omni-Tech", precio: 102000, categoria: { name: "Ropa", descuento: 10 }, precioDescontado: 91800, descontamos: 10200 },
  { nombre: "Camisa de Manga Larga Tommy Hilfiger", precio: 63750, categoria: { name: "Ropa", descuento: 10 }, precioDescontado: 57375, descontamos: 6375 },
  { nombre: "Zapatos Adidas Ultraboost", precio: 153000, categoria: { name: "Ropa", descuento: 10 }, precioDescontado: 137700, descontamos: 15300 },
  { nombre: "LEGO Star Wars Millennium Falcon", precio: 135990, categoria: { name: "Juguetes", descuento: 20 }, precioDescontado: 108792, descontamos: 27198 },
  { nombre: "Muñeca Barbie Dreamhouse", precio: 42490, categoria: { name: "Juguetes", descuento: 20 }, precioDescontado: 33992, descontamos: 8498 },
  { nombre: "Hot Wheels Track Set", precio: 25490, categoria: { name: "Juguetes", descuento: 20 }, precioDescontado: 20392, descontamos: 5098 },
  { nombre: "Juego de Construcción K'NEX", precio: 50990, categoria: { name: "Juguetes", descuento: 20 }, precioDescontado: 40792, descontamos: 10198 },
  { nombre: "Peluche de Pelotero de Toy Story", precio: 16990, categoria: { name: "Juguetes", descuento: 20 }, precioDescontado: 13592, descontamos: 3398 },
  { nombre: "Cereal Kellogg's Cornflakes", precio: 4240, categoria: { name: "Alimentos", descuento: 5 }, precioDescontado: 4038, descontamos: 202 },
  { nombre: "Jugo de Naranja Tropicana", precio: 2965, categoria: { name: "Alimentos", descuento: 5 }, precioDescontado: 2816.75, descontamos: 148.25 },
  { nombre: "Pechuga de Pollo Congelada", precio: 6791, categoria: { name: "Alimentos", descuento: 5 }, precioDescontado: 6451.45, descontamos: 339.55 },
  { nombre: "Arroz Basmati", precio: 4667, categoria: { name: "Alimentos", descuento: 5 }, precioDescontado: 4433.65, descontamos: 233.35 },
  { nombre: "Chocolates Hershey's", precio: 2540, categoria: { name: "Alimentos", descuento: 5 }, precioDescontado: 2413, descontamos: 127 },
  { nombre: "Pelota de Fútbol Adidas Predator", precio: 21240, categoria: { name: "Deportes", descuento: 25 }, precioDescontado: 15930, descontamos: 5310 },
  { nombre: "Bicicleta de Montaña Trek Marlin 7", precio: 637490, categoria: { name: "Deportes", descuento: 25 }, precioDescontado: 478117.5, descontamos: 159372.5 },
  { nombre: "Raqueta de Tenis Wilson Pro Staff", precio: 144490, categoria: { name: "Deportes", descuento: 25 }, precioDescontado: 108367.5, descontamos: 36122.5 },
  { nombre: "Botas de Fútbol Nike Mercurial Vapor 14", precio: 195490, categoria: { name: "Deportes", descuento: 25 }, precioDescontado: 146617.5, descontamos: 48872.5 },
  { nombre: "Zapatillas de Running Asics Gel Nimbus", precio: 118990, categoria: { name: "Deportes", descuento: 25 }, precioDescontado: 89242.5, descontamos: 29747.5 },
  { nombre: "Sofá Cama IKEA FRIHETEN", precio: 424990, categoria: { name: "Muebles", descuento: 30 }, precioDescontado: 297493, descontamos: 127497 },
  { nombre: "Mesa de Comedor Extensible", precio: 254990, categoria: { name: "Muebles", descuento: 30 }, precioDescontado: 178493, descontamos: 76597 },
  { nombre: "Escritorio de Oficina IKEA MALM", precio: 110490, categoria: { name: "Muebles", descuento: 30 }, precioDescontado: 77343, descontamos: 33147 },
  { nombre: "Silla Gaming DXRacer", precio: 339990, categoria: { name: "Muebles", descuento: 30 }, precioDescontado: 237993, descontamos: 101997 },
  { nombre: "Lámpara de Pie LED Philips", precio: 67990, categoria: { name: "Muebles", descuento: 30 }, precioDescontado: 47593, descontamos: 20397 },
  { nombre: "Aspiradora Dyson V11", precio: 509990, categoria: { name: "Hogar", descuento: 10 }, precioDescontado: 458991, descontamos: 50999 },
  { nombre: "Batidora KitchenAid Stand Mixer", precio: 322990, categoria: { name: "Hogar", descuento: 10 }, precioDescontado: 290691, descontamos: 32299 },
  { nombre: "Cafetera Nespresso VertuoPlus", precio: 169990, categoria: { name: "Hogar", descuento: 10 }, precioDescontado: 152991, descontamos: 16999 },
  { nombre: "Planchadora Rowenta DW5080", precio: 59490, categoria: { name: "Hogar", descuento: 10 }, precioDescontado: 53541, descontamos: 5949 },
  { nombre: "Ventilador de Torre Lasko", precio: 76490, categoria: { name: "Hogar", descuento: 10 }, precioDescontado: 68841, descontamos: 7649 },
  { nombre: "Cien Años de Soledad Gabriel García Márquez", precio: 16990, categoria: { name: "Libros", descuento: 15 }, precioDescontado: 14441.5, descontamos: 2550.5 },
  { nombre: "Educated Tara Westover", precio: 12740, categoria: { name: "Libros", descuento: 15 }, precioDescontado: 10829, descontamos: 1910 },
  { nombre: "Sapiens: De animales a dioses Yuval Noah Harari", precio: 16150, categoria: { name: "Libros", descuento: 15 }, precioDescontado: 13727.5, descontamos: 2422.5 },
  { nombre: "El Código Da Vinci Dan Brown", precio: 9340, categoria: { name: "Libros", descuento: 15 }, precioDescontado: 7939, descontamos: 1401 },
  { nombre: "The Catcher in the Rye J.D. Salinger", precio: 11020, categoria: { name: "Libros", descuento: 15 }, precioDescontado: 9377, descontamos: 1643 },
  { nombre: "Crema Facial Neutrogena Hydro Boost", precio: 18640, categoria: { name: "Belleza", descuento: 18 }, precioDescontado: 15264.8, descontamos: 3375.2 },
  { nombre: "Maquillaje Maybelline Fit Me", precio: 7640, categoria: { name: "Belleza", descuento: 18 }, precioDescontado: 6264.8, descontamos: 1375.2 },
  { nombre: "Shampoo y Acondicionador Dove", precio: 5090, categoria: { name: "Belleza", descuento: 18 }, precioDescontado: 4173.8, descontamos: 916.2 },
  { nombre: "Perfume Chanel No. 5", precio: 127490, categoria: { name: "Belleza", descuento: 18 }, precioDescontado: 104538.8, descontamos: 22851.2 },
  { nombre: "Espejo de Maquillaje con Luz LED", precio: 33990, categoria: { name: "Belleza", descuento: 18 }, precioDescontado: 27811.8, descontamos: 6184.2 },
];

describe('funcion: descuento', () => {
  it('la funcion existe', () => {
    assert.ok(descuento != null, 'la funcion no existe')
  })

  for (let producto of productos) {
    it(`Dado un producto: '${producto.nombre}', Cuando apliquemos ${producto.categoria.descuento}% de descuento al precio: $${producto.precio}, entonces se descontaran: $${producto.descontamos}`, () => {
      let descontado: number = descuento(producto.categoria.name)
      assert.ok(descontado === producto.descontamos, `el monto descontado debio ser: ${producto.descontamos}, pero fue de: ${descontado}`)
    })
  }
})

describe('funcion: descontar', () => {
  it('la funcion existe', () => {
    assert.ok(descontar != null, 'la funcion no existe')
  })

  for (let producto of productos) {
    it(`Dado un producto: '${producto.nombre}', Cuando apliquemos ${producto.categoria.descuento}% de descuento al precio: $${producto.precio}, entonces el precio final sera: $${producto.precioDescontado}`, () => {
      let precioDescontado: number = descontar(producto.precio, producto.categoria.name)
      assert.ok(precioDescontado === producto.precioDescontado, `el monto descontado debio ser: ${producto.precioDescontado}, pero fue de: ${precioDescontado}`)
    })
  }

})
