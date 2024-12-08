import { vender } from "./ventas"

const producto: string | undefined = process.env["npm_config_producto"]
const _monto: string | undefined = process.env["npm_config_monto"]

if(producto === undefined || producto === ""){
  console.error(`debe ingresar un producto valido, usted ingreso: ${producto}`)
  process.exit(0)
}

if(_monto === undefined){
  console.error(`debe ingresar el monto con el que pagara correspondiente, usted ingreso: ${_monto}`)
  process.exit(0)
}

const monto: number = Number(_monto)

if(isNaN(monto)){
  console.error(`el monto ingresado no corresponde a un numero valido, usted ingreso: ${monto}`)
  process.exit(0)
}

console.debug(`pagara con: ${monto} por el producto: ${producto}`)

console.info('Procesando venta...')
setTimeout(()=>{
  console.info(`${vender(monto, producto)}`)
}, 1000)
