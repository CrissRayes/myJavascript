// El método find sirve para encontrar un elemento en un array
// * y devuelve el primer elemento que cumpla la condición
// que le pasemos como parámetro
// Parámetros:
// Función de callback, que recibe 3 parámetros:
// 1. Valor actual (currentValue)
// 2. Índice actual (currentIndex)
// 3. Array original (array)

// * Algunos usos comunes de find son:
// 1. Encontrar un elemento en un array de objetos
const users = [
  { name: 'John', age: 25 },
  { name: 'Jane', age: 30 },
  { name: 'Jack', age: 35 },
]
const user = users.find( ( user ) => user.age > 30 )
console.log( user ) // { name: 'Jack', age: 35 }

// 2. Encontrar un elemento en un array de strings
const names = ['John', 'Jane', 'Jack']
const name = names.find( ( name ) => name === 'Jane' )
console.log( name ) // Jane

// 3. Encontrar un elemento en un array de números
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const number = numbers.find( ( number ) => number > 5 )
console.log( number ) // 6

