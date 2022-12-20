// PUSH //////////////////////////
// push add elements to the end of an array
const a = [1, 2, 3, 4, 5, 6]
a.push( 7 );
console.log( a ); // [1, 2, 3, 4, 5, 6, 7]

// UNSHIFT //////////////////////////
// unshift add elements to the beginning of an array
const b = [1, 2, 3, 4, 5, 6]
b.unshift( 'hola' )
console.log( b ); // ['hola', 1, 2, 3, 4, 5, 6]

// NOTA: el spread operator crea una copia del arreglo original
const superHeroes = ['Capitan America', 'Ironman', 'Spiderman', 'Hulk']
const superHeroesCopy = [...superHeroes]
console.log( superHeroesCopy ) // ['Capitan America', 'Ironman', 'Spiderman', 'Hulk']

// SLICE //////////////////////////
// slice method is used to copy a portion of an array into a new array
// takes two arguments: the index where the copy starts and the index where the copy ends and it doesn't include both indexes in the argument
// example:
const arr = ['a', 'b', 'c', 'd', 'e']
console.log( arr.slice( 1, 3 ) ) // ['b', 'c']
console.log( arr.slice() ) // ['a', 'b', 'c', 'd', 'e'] returns a copy of the original array

// SPLICE //////////////////////////
// splice method is used to remove elements from an array
// receives two arguments: the index where the removal starts and the number of elements to remove
// 1.- the index where the removal starts, which is included in the removal
// 2.- the number of elements to be removed
arr.splice( -1 ) // removes the last element of the array
console.log( arr ) // ['a', 'b', 'c', 'd']
arr.splice( 1, 2 ) // removes the second and third element of the array
console.log( arr ) // ['a', 'd']

// NOTA: adding elements with splice?
// splice method is also used to add elements to an array
// example:
const arr2 = ['a', 'b', 'c', 'd', 'e']
arr2.splice( 2, 0, 'x', 'y' ) // adds 'x' and 'y' at the index 2
console.log( arr2 ) // ['a', 'b', 'x', 'y', 'c', 'd', 'e']

// NOTA: FIND INDEX //////////////////////////
// findIndex method is used to find the index of an element in an array
// receives a callback function as an argument
// example:
const cocteles = ['Piña Colada', 'Margarita', 'Mojito', 'Caipirinha']
const index = cocteles.findIndex( ( elemento ) => elemento == "Piña Colada" )
console.log( index ) // 0


// SLICE //////////////////////////
// slice method is used to copy a portion of an array into a new array
// takes two arguments:
// 1.- the index where the copy starts, which is included in the new array
// 2.- the index where the copy ends, which is not included in the new array
// example:
const newArr = ['a', 'b', 'c', 'd', 'e']
console.log( newArr.slice( 1, 3 ) ) // ['b', 'c']


// AT //////////////////////////
// similar to bracket notation but it returns undefined if the index doesn't exist
const myArr = ['queen', 'beatles', 'rolling stones', 'pink floyd']
console.log( 'options for getting the third element of an array' )
console.log( myArr.at( 2 ) ) // 'rolling stones'
console.log( myArr[2] ) // 'rolling stones'
// options for getting the last element of an array
console.log( 'options for getting the last element of an array' )
console.log( myArr[myArr.length - 1] ) // 'pink floyd'
console.log( myArr.at( myArr.length - 1 ) ) // 'pink floyd'
console.log( myArr.slice( -1 ) ) // ['pink floyd']
console.log( myArr.slice( -1 )[0] ) // 'pink floyd'

// FOREACH //////////////////////////
// forEach method is used to iterate over an array

const movimientos = [200, 450, -400, 3000, -650, -130, 70, 1300]
movimientos.forEach( function ( movimiento ) {
  if ( movimiento > 0 ) {
    console.log( `Depositaste ${movimiento}` )
  } else {
    console.log( `Retiraste ${Math.abs( movimiento )}` )
  }
} )
// Even though we can pass just one argument to the callback function, we can pass more than one argument
// The arguments in a forEach method are:
// 1.- the current element, example: movimiento
// 2.- the index of the current element, example: i
// 3.- the array itself, example: movimientos

movimientos.forEach( function ( movimiento, i, arr ) {
  console.log( `Tenemos el movimiento ${movimiento} en el índice ${i} | El arreglo completo es: [${arr}]` )
} )
