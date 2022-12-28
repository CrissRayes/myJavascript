const hoy = new Date()
const formatoFecha = ( fecha, formato ) => {
  const opciones = {
    dd: fecha.getDate(),
    mm: fecha.getMonth() + 1,
    yyyy: fecha.getFullYear(),
    yy: fecha.getFullYear().toString().slice( -2 )
  }
  return formato.replace( /dd|mm|yyyy|yy/gi, encontrado => opciones[encontrado] ) // gi: global e insensible a mayúsculas
}
// formatoFecha( hoy, 'dd-mm-yyyy' ) // 22-02-2021