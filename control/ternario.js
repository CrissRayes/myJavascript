// example ternary operator
function findGreater ( a, b ) {
  return a > b ? "a is greater" : "b is greater"
}

// myltiple ternary operator
function findGreaterOrEqual ( a, b ) {
  return a === b ? "a and b are equal"
    : a > b ? "a is greater"
      : "b is greater"
}

// En este ejemplo vemos un ternario habitual y un ternario "corto"
const activo = true;
const mensaje = ( activo ) ? 'Activo' : 'Inactivo'; // Ternario habitual
const mensaje2 = activo && 'Activo'; // Ternario corto, si activo es true, mensaje2 es 'Activo', de lo contrario devuelve false


