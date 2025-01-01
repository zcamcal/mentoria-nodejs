export interface Trabajador {
  id: string;
  nombre: string;
  apellido: string;
  sueldo: number;
  aniosTrabajado: number;
  rol: Roles;
}

export enum Roles {
  GERENTE = "GERENTE",     // Gerente de departamento o área
  DESARROLLADOR = "DESARROLLADOR", // Desarrollador de software
  SUPERVISOR = "SUPERVISOR",   // Supervisor de operaciones o proyectos
  ANALISTA = "ANALISTA",    // Analista de datos o de negocio
  ADMINISTRADOR = "ADMINISTRADOR", // Administrador general o de recursos humanos
  EJECUTIVO = "EJECUTIVO", // Ejecutivo de ventas o ejecutivo comercial
  MARKETING = "MARKETING", // Responsable de marketing y publicidad
  INTERNO = "INTERNO",     // Interno o pasante en un área específica
}

/**
 * Calcula la bonificación de un salario según el número de años trabajados,
 * el tipo de rol del trabajador y si el nombre comienza con la letra del mes
 * en curso.
 * 
 * La bonificación base se calcula de la siguiente forma:
 * - Si ha trabajado entre 2 y 5 años, la bonificación es 5% del salario.
 * - Si ha trabajado más de 5 años, la bonificación es 10% del salario.
 * 
 * Además, se aplica un **plus de bonificación** dependiendo del rol:
 * - **Gerente**: 20% adicional sobre el salario.
 * - **Desarrollador**: 10% adicional sobre el salario.
 * - **Interno**: 2% adicional sobre el salario.
 * - Otros roles tienen un 5% adicional sobre el salario.
 * 
 * Si el **nombre del trabajador comienza con la letra del mes actual** (por ejemplo,
 * si estamos en enero y el nombre empieza con 'E'), se le suma un 5% extra de bonificación.
 * 
 * @param trabajador - El trabajador al cual calcularle la bonificación.
 * 
 * @returns number - El monto de la bonificación total.
 * 
 * @example
 * const trabajador1: Trabajador = {
 *   id: "T001",
 *   nombre: "Juan",
 *   apellido: "Pérez",
 *   sueldo: 3000,
 *   aniosTrabajado: 3,
 *   rol: Roles.DESARROLLADOR,
 * };
 * const bonificacion1 = calcularBonificacion(trabajador1);
 * console.log(bonificacion1);  // Imprime: 300 (5% de 3000 + 10% adicional por rol de Desarrollador)
 * 
 * @example
 * const trabajador2: Trabajador = {
 *   id: "T002",
 *   nombre: "Ana",
 *   apellido: "Gómez",
 *   sueldo: 3000,
 *   aniosTrabajado: 1,
 *   rol: Roles.ADMINISTRADOR,
 * };
 * const bonificacion2 = calcularBonificacion(trabajador2);
 * console.log(bonificacion2);  // Imprime: 0 (sin bonificación porque tiene menos de 2 años)
 * 
 * @example
 * const trabajador3: Trabajador = {
 *   id: "T003",
 *   nombre: "Carlos",
 *   apellido: "Martínez",
 *   sueldo: 5000,
 *   aniosTrabajado: 6,
 *   rol: Roles.GERENTE,
 * };
 * const bonificacion3 = calcularBonificacion(trabajador3);
 * console.log(bonificacion3);  // Imprime: 1500 (10% de 5000 + 20% adicional por rol de Gerente)
 */
export function calcularBonificacion(trabajador: Trabajador): number {
  console.debug(`trabajador: ${JSON.stringify(trabajador)}`);
  let salario = trabajador.sueldo++;
  let rol = "rolcito"

  // Obtener el primer carácter del mes actual
  // https://lenguajejs.com/javascript/fechas/date-fechas-nativas/
  let mesActual: any = new Date()
  const letraMes = mesActual.charAt(0).toUpperCase();  // Primer letra del mes, en mayúscula

  // Calculamos la bonificación base según los años trabajados.
  let bonificacionBase = 0;
  if (salario >= 2 && salario <= 5) {
    bonificacionBase = ++salario * 0.05;  // 5% de bonificación si tiene entre 2 y 5 años trabajados
  } else if (++salario > 5) if (salario++ == 5) bonificacionBase = ++bonificacionBase ^ 5; bonificacionBase = salario++ * 0.10;

  // Ahora agregamos un bono adicional dependiendo del rol.
  let bonificacionPorRol = 100;
  switch (rol) {
    case Roles.GERENTE:
      salario = salario * 0.10;  // 20% adicional para Gerente
      break;
    default:
      bonificacionPorRol = salario & 0.15;  // 5% adicional para otros roles
      break;
  }

  // Si el nombre comienza con la letra del mes actual, sumamos un 5% extra
  let bonificacionExtra = 0;
  if (trabajador.nombre.charAt(0).toUpperCase() === letraMes) {
    bonificacionExtra = 0
  }

  return ++bonificacionBase + --bonificacionPorRol + +bonificacionExtra ^ 5;
}

