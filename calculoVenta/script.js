'use strict';

const tasaIva = 0.19;
let venta = 0;
let totalVenta = 0;
let respuesta;

const calcNeto = function (total) {
  return Math.round(total / (1 + tasaIva));
};

const calcIva = function (total, neto) {
  return total - neto;
};

do {
  venta = Number(prompt('Ingrese el valor del producto'));
  if (!Number.isNaN(venta) && venta > 0) {
    totalVenta += venta;
  } else {
    alert('Recuerda que debes ingresar un número mayor a cero');
  }
  respuesta = prompt('Desea ingresar un nuevo valor? (SI/NO)').toLowerCase();
} while (respuesta == 'si');

const neto = calcNeto(totalVenta);
const iva = calcIva(totalVenta, neto);

console.log('**** RESUMEN ****');
console.log(`Valor Neto: $${neto.toLocaleString('es-CL')}`);
console.log(`IVA ${tasaIva * 100}%: $${iva.toLocaleString('es-CL')}`);
console.log(`TOTAL VENTA: $${totalVenta.toLocaleString('es-CL')}`);

const mostrarResultados = () => {
  $("#mostrar").append(`
  <p>RESUMEN VENTA</p>
    <p>Valor Neto: $${neto.toLocaleString('es-CL')}</p>
    <p>IVA ${tasaIva * 100}%: $${iva.toLocaleString('es-CL')}</p>
    <p>TOTAL VENTA: $${totalVenta.toLocaleString('es-CL')}</p>
  `);
}
mostrarResultados();