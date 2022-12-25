// El método reduce se usa para reducir un array a un único valor.
// * Se puede usar para sumas, promedios, conteos, etc.
// Parámetros:
// Función de callback, que recibe 4 parámetros:
// 1. Acumulador (accumulator)
// 2. Valor actual (currentValue)
// 3. Índice actual (currentIndex)
// 4. Array original (array)

const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce( ( accumulator, currentValue ) => {
  return accumulator + currentValue // se usa return para que el valor se guarde en el acumulador
}, 0 ) // el 0 es el valor inicial del acumulador

console.log( sum ); // 15

// reduce en arrow function
const sum2 = numbers.reduce( ( accumulator, currentValue ) => accumulator + currentValue, 0 )

console.log( sum2 ); // 15

// ejemplo con los cuatro parámetros
const numbers3 = [1, 2, 3, 4, 5]
const sum3 = numbers3.reduce( ( accumulator, currentValue, currentIndex, array ) => {
  console.log( `Índice: ${currentIndex}, valor: ${currentValue}, acumulador: ${accumulator}, currentValue: ${currentValue}` )
  return accumulator + currentValue
}, 0 )

console.clear()
console.log( sum3 ); // 15

// * Se puede encadenar los metodos filter, map y reduce
// * El orden es importante
// * Pipeline: filter -> map -> reduce
const numbers4 = [1, 2, 3, 4, 5]
const sum4 = numbers4
  .filter( number => number > 2 ) // [3, 4, 5]
  .map( number => number * 2 ) // [6, 8, 10]
  .reduce( ( accumulator, currentValue ) => accumulator + currentValue, 0 ) // 24

console.log( sum4 ); // 24


