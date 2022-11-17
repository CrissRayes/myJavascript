// funcion flecha con un solo parametro
const double = item => item * 2

// funcion flecha con mas de un parametro
const multiply = (item, multi) => item * multi

// funcion flecha sin argumentos
const sayHi = () => console.log('Hi')

// funcion flecha con mas de una linea
const numbers = [1, 2, 3]
const doble = numbers.map((number) => {
  return number * 2
})

// funcion flecha con parametro por defecto
const increment = (number, value = 1) => number + value

// arrow function with nested if inside
const isUserValid = (user) => {
  if (user) {
    if (user.admin) {
      return true
    }
  }
  return false
}


