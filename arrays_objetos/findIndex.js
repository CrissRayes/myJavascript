// El método findIndex se usa para encontrar el índice de un elemento en un array
// * y devuelve el primer índice que cumpla la condición
// que le pasemos como parámetro
// Parámetros:
// Función de callback, que recibe 3 parámetros:
// 1. Valor actual (currentValue)
// 2. Índice actual (currentIndex)
// 3. Array original (array)

// * Algunos usos comunes de findIndex son:
// 1. Encontrar el índice de un elemento en un array de objetos
const users = [
  { name: 'John', age: 25 },
  { name: 'Jane', age: 30 },
  { name: 'Jack', age: 35 },
]
const userIndex = users.findIndex( ( user ) => user.age > 30 )
console.log( userIndex ) // 2 (el índice del elemento { name: 'Jack', age: 35 })

// 2. Encontrar el índice de un elemento en un array de strings
const names = ['John', 'Jane', 'Jack']
const nameIndex = names.findIndex( ( name ) => name === 'Jane' )
console.log( nameIndex ) // 1 (el índice del elemento 'Jane')

// 3. Encontrar el índice de un elemento en un array de números
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numberIndex = numbers.findIndex( ( number ) => number > 5 )
console.log( numberIndex ) // 5 (el índice del elemento 6)

// 4. Encontrar el índice de un elemento en un array de números
// que no cumpla la condición
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numberIndex2 = numbers2.findIndex( ( number ) => number > 10 )
console.log( numberIndex2 ) // -1 (no se encontró ningún elemento)