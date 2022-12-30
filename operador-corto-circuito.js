/*

* Operador AND corto-circuito
El operador AND corto-circuito (&&) evalúa el primer operando.
Si es falso, devuelve false
de lo contrario, devuelve el segundo operando.

>> Otra explicación:
Cuando el valor de la izauierda en la expresión valida a false,
el valor de la derecha no se evalúa y el resultado es false.

*/
const activo = true;
const mensaje = activo && 'Activo';
console.log( mensaje ); // Activo


/* 
* Operador OR corto-circuito
El operador OR corto-circuito (||) evalúa el primer operando. 
Si es verdadero, devuelve true
de lo contrario, devuelve el segundo operando.

>> Otra explicación:
Cuando el valor de la izquierda en la expresión valida a true,
el valor de la derecha no se evalúa y el resultado es true.

*/

const menuActivo = true;
const menu = menuActivo || 'Inactivo';
console.log( menu ); // true