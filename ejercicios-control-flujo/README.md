# Sistema de venta
Bienvenido al sistema de ventas que tenemos, favor sirvase de guia en lo siguiente y decida sabiamente que producto quiere llevar

Dentro del directorio: `src` encontraras archivos de codigo, ahi dentro veras funciones, **trabaja solo dentro de cada funcion**, solo **trabaja en los siguientes archivos**:
- descuentos.ts
- ventas.ts
- productos.ts
- categorias.ts
**considera ademas que por cada archivo anterior habra uno con el mismo nombre pero que tendra ademas `.spec.` esos son archivos de pruebas, asi que solo ignoralos.**

El archivo `index.ts` es para ejecutar el flujo completo de manera libre con el comando `npm start` que se explica mas abajo

# Requisitos:
Considera lo siguiente:
- el sistema debe trabajar todo texto ingresado en minusculas, inclusive nuestros productos deben estar en minusculas pese a lo que se menciona abajo en inventario
- el sistema debe validar que el usuario ingrese correctamente los valores, por ejemplo si esperamos el monto con el que pagara, debemos validar que sea un numero correcto y no un texto.
- El sistema no considerara tildes 

# Forma de uso
Para usar el sistema y comprar solo debes usar el comando
```
npm start --producto="tu producto tal cual se encuentra escrito abajo en productos" --monto=5000
```

**Explicacion**
- el parametro: 'producto' es el nombre que puedes encontrar abajo en 'inventario', recuerda agregar comillas dobles para enviar el nombre del producto completo como se puede ver en el comando arriba, los nombres los encuentras en el listado 'productos', se obtiene a partir del primer texto hasta la primera coma, por ejemplo: Smartphone Samsung Galaxy S23.
- el parametro: 'monto' es el monto monetario que el cliente pagara, por ejemplo si el producto cuesta $5.000, el cliente nos podria pagar justo con $5.000 o talvez con $15.000, incluso podria tratar de pagarnos con $500, en fin este parametro permite entregar el monto con el que el cliente cancelara el precio del producto.
- Esto te permitira probar por tu cuenta tus casos en particular, considera que probara el sistema completo no solo una funcion.

# Formas de probar
Para probar funcion por funcion estan creados los siguientes comandos con npm:
```
npm run test:descuentos
npm run test:categorias
npm run test:productos
npm run test:ventas
```

**Importante**
Considera que cada uno de esos comandos probara un archivo en particular con todas sus funciones dentro, por ejemplo `npm run test:descuentos` probara todas las funciones creadas en un inicio.

# Inventario
Basate en lo siguiente para completar tus funciones y saber que retornar, imagina que esto seria tu base de datos solo que las dejaras en duro en tu codigo.

## Categorías
Nuestro sistema de ventas tiene las siguientes categorías con descuentos:
- Electronica: descuento del 15%, como ejemplo se incluyen los siguientes elementos: smartphones, laptops, tablets y accesorios electrónicos.
- Ropa: descuento del 10%, como ejemplo se incluyen los siguientes elementos: ropa para hombres, mujeres y niños, con opciones de moda casual y formal.
- Juguetes: descuento del 20%, como ejemplo se incluyen los siguientes elementos: juguetes educativos, juguetes de acción, muñecas y más.
- Alimentos: descuento del 5%, como ejemplo se incluyen los siguientes elementos: productos de supermercado, snacks, bebidas y alimentos frescos.
- Deportes: descuento del 25%, como ejemplo se incluyen los siguientes elementos: equipos para deportes, ropa deportiva, accesorios para camping, bicicletas y más.
- Muebles: descuento del 30%, como ejemplo se incluyen los siguientes elementos: muebles para la casa, oficina y jardín, desde sillas hasta sofás y mesas.
- Hogar: descuento del 10%, como ejemplo se incluyen los siguientes elementos: artículos para el hogar, electrodomésticos, utensilios de cocina y decoración.
- Libros: descuento del 15%, como ejemplo se incluyen los siguientes elementos: libros de texto, literatura, material educativo y recursos para el estudio.
- Belleza: descuento del 18%, como ejemplo se incluyen los siguientes elementos: cosméticos, productos para el cuidado de la piel, maquillaje y más.

## Productos
Nuestro sistema de ventas incluye los siguientes productos, organizados por categoría:
- Smartphone Samsung Galaxy S23, corresponde a la categoría 'Electrónica', su precio $679.990 CLP
- Laptop HP Spectre x360, corresponde a la categoría 'Electrónica', su precio $1.359.990 CLP
- Tablet Apple iPad Air, corresponde a la categoría 'Electrónica', su precio $509.990 CLP
- Auriculares Bose QuietComfort 45, corresponde a la categoría 'Electrónica', su precio $279.490 CLP
- Cámara GoPro Hero 11, corresponde a la categoría 'Electrónica', su precio $339.990 CLP
- Sudadera Nike Sportswear, corresponde a la categoría 'Ropa', su precio $46.741 CLP
- Jeans Levi's 501, corresponde a la categoría 'Ropa', su precio $59.490 CLP
- Chaqueta Columbia Omni-Tech, corresponde a la categoría 'Ropa', su precio $102.000 CLP
- Camisa de Manga Larga Tommy Hilfiger, corresponde a la categoría 'Ropa', su precio $63.750 CLP
- Zapatos Adidas Ultraboost, corresponde a la categoría 'Ropa', su precio $153.000 CLP
- LEGO Star Wars Millennium Falcon, corresponde a la categoría 'Juguetes', su precio $135.990 CLP
- Muñeca Barbie Dreamhouse, corresponde a la categoría 'Juguetes', su precio $42.490 CLP
- Hot Wheels Track Set, corresponde a la categoría 'Juguetes', su precio $25.490 CLP
- Juego de Construcción K'NEX, corresponde a la categoría 'Juguetes', su precio $50.990 CLP
- Peluche de Pelotero de Toy Story, corresponde a la categoría 'Juguetes', su precio $16.990 CLP
- Cereal Kellogg's Cornflakes, corresponde a la categoría 'Alimentos', su precio $4.240 CLP
- Jugo de Naranja Tropicana, corresponde a la categoría 'Alimentos', su precio $2.965 CLP
- Pechuga de Pollo Congelada, corresponde a la categoría 'Alimentos', su precio $6.791 CLP
- Arroz Basmati, corresponde a la categoría 'Alimentos', su precio $4.667 CLP
- Chocolates Hershey's, corresponde a la categoría 'Alimentos', su precio $2.540 CLP
- Pelota de Fútbol Adidas Predator, corresponde a la categoría 'Deportes', su precio $21.240 CLP
- Bicicleta de Montaña Trek Marlin 7, corresponde a la categoría 'Deportes', su precio $637.490 CLP
- Raqueta de Tenis Wilson Pro Staff, corresponde a la categoría 'Deportes', su precio $144.490 CLP
- Botas de Fútbol Nike Mercurial Vapor 14, corresponde a la categoría 'Deportes', su precio $195.490 CLP
- Zapatillas de Running Asics Gel Nimbus, corresponde a la categoría 'Deportes', su precio $118.990 CLP
- Sofá Cama IKEA FRIHETEN, corresponde a la categoría 'Muebles', su precio $424.990 CLP
- Mesa de Comedor Extensible, corresponde a la categoría 'Muebles', su precio $254.990 CLP
- Escritorio de Oficina IKEA MALM, corresponde a la categoría 'Muebles', su precio $110.490 CLP
- Silla Gaming DXRacer, corresponde a la categoría 'Muebles', su precio $339.990 CLP
- Lámpara de Pie LED Philips, corresponde a la categoría 'Muebles', su precio $67.990 CLP
- Aspiradora Dyson V11, corresponde a la categoría 'Hogar', su precio $509.990 CLP
- Batidora KitchenAid Stand Mixer, corresponde a la categoría 'Hogar', su precio $322.990 CLP
- Cafetera Nespresso VertuoPlus, corresponde a la categoría 'Hogar', su precio $169.990 CLP
- Planchadora Rowenta DW5080, corresponde a la categoría 'Hogar', su precio $59.490 CLP
- Ventilador de Torre Lasko, corresponde a la categoría 'Hogar', su precio $76.490 CLP
- Cien Años de Soledad Gabriel García Márquez, corresponde a la categoría 'Libros', su precio $16.990 CLP
- Educated Tara Westover, corresponde a la categoría 'Libros', su precio $12.740 CLP
- Sapiens: De animales a dioses Yuval Noah Harari, corresponde a la categoría 'Libros', su precio $16.150 CLP
- El Código Da Vinci Dan Brown, corresponde a la categoría 'Libros', su precio $9.340 CLP
- The Catcher in the Rye J.D. Salinger, corresponde a la categoría 'Libros', su precio $11.020 CLP
- Crema Facial Neutrogena Hydro Boost, corresponde a la categoría 'Belleza', su precio $18.640 CLP
- Maquillaje Maybelline Fit Me, corresponde a la categoría 'Belleza', su precio $7.640 CLP
- Shampoo y Acondicionador Dove, corresponde a la categoría 'Belleza', su precio $5.090 CLP
- Perfume Chanel No. 5, corresponde a la categoría 'Belleza', su precio $127.490 CLP
- Espejo de Maquillaje con Luz LED, corresponde a la categoría 'Belleza', su precio $33.990 CLP
- Smartwatch Apple Watch Series 8, corresponde a la categoría 'Tecnología', su precio $339.990 CLP
- Auriculares In-Ear Sony WF-1000XM4, corresponde a la categoría 'Tecnología', su precio $212.490 CLP
- Cargador Anker PowerCore 10000, corresponde a la categoría 'Tecnología', su precio $25.490 CLP
- Google Chromecast, corresponde a la categoría 'Tecnología', su precio $42.490 CLP
- Teclado Mecánico Logitech G Pro X, corresponde a la categoría 'Tecnología', su precio $110.490 CLP
