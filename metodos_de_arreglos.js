// PUSH
// push add elements to the end of an array
const a = [1, 2, 3, 4, 5, 6]
a.push( 7 );
console.log( a ); // [1, 2, 3, 4, 5, 6, 7]

// UNSHIFT
// unshift add elements to the beginning of an array
const b = [1, 2, 3, 4, 5, 6]
b.unshift( 'hola' )
console.log( b ); // ['hola', 1, 2, 3, 4, 5, 6]

// Ejercicio super héroes
const superHeroes = [
  'Ironman',
  'Spiderman',
  'Hulk'
]
// 1.- Agregar super héroe al final del arreglo
superHeroes.push( 'Thor' )
// 2.- Agregar super héroe al principio del arreglo
superHeroes.unshift( 'Capitan America' )

// el spread operator crea una copia del arreglo original
const superHeroesCopy = [...superHeroes]
console.log( superHeroesCopy ) // ['Capitan America', 'Ironman', 'Spiderman', 'Hulk', 'Thor']

// SLICE
// slice method is used to copy a portion of an array into a new array
// takes two arguments: the index where the copy starts and the index where the copy ends and it doesn't include both indexes in the argument
// example:
const arr = ['a', 'b', 'c', 'd', 'e']
console.log( arr.slice( 1, 3 ) ) // ['b', 'c']
console.log( arr.slice() ) // ['a', 'b', 'c', 'd', 'e'] returns a copy of the original array

// SPLICE
arr.splice( -1 ) // removes the last element of the array
console.log( arr ) // ['a', 'b', 'c', 'd']

// splice arguments: the index where the copy starts, the number of elements to remove
arr.splice( 1, 2 ) // removes the second and third element of the array
console.log( arr ) // ['a', 'd']