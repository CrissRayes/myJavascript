// que es destructuring?
// es una forma de extraer valores de un objeto o array y asignarlos a variables

// destructuring con arrays
// ejemplo de destructuring de un array
const introduccion = ['hola', 'mundo', 'javascript']
const [saludo, mundo, lenguaje] = introduccion
console.log(saludo) // hola
console.log(mundo) // mundo
console.log(lenguaje) // javascript

// destructuring con declaracion previa de variables
const introduccion = ['hola', 'mundo', 'javascript']
let saludo, mundo, lenguaje
[saludo, mundo, lenguaje] = introduccion
console.log(saludo) // hola
console.log(mundo) // mundo
console.log(lenguaje) // javascript

// destructuring omitiendo elementos de un array
const introduccion = ['hola', 'mundo', 'javascript']
const [saludo, , lenguaje] = introduccion
console.log(saludo) // hola
console.log(lenguaje) // javascript

// destructuring con rest operator
const introduccion = ['hola', 'mundo', 'javascript']
const [saludo, ...resto] = introduccion
console.log(saludo) // hola
console.log(resto) // ['mundo', 'javascript']

// destructuring con funciones
function obtenerArreglo() {
  return ['hola', 'mundo', 'javascript']
}
const [saludo, mundo, lenguaje] = obtenerArreglo()
console.log(saludo) // hola
console.log(mundo) // mundo
console.log(lenguaje) // javascript

// destructuring con valores predeterminados
const introduccion = ['hola', 'mundo']
const [saludo, mundo, lenguaje = 'javascript'] = introduccion // si no existe el elemento en el array, se asigna el valor predeterminado
console.log(saludo) // hola
console.log(mundo) // mundo
console.log(lenguaje) // javascript

// destructuring con objetos
// ejemplo de destructuring de un objeto
const persona = {
  nombre: 'jose',
  apellido: 'perez',
  edad: 30
}
const { nombre, apellido, edad } = persona // se extraen los valores del objeto y se asignan a variables con el mismo nombre
console.log(nombre) // jose
console.log(apellido) // perez
console.log(edad) // 30

// destructuring asignando variables a objeto no declarado
const { nombre, apellido, edad } = {
  nombre: 'jose',
  apellido: 'perez',
  edad: 30
}
console.log(nombre) // jose
console.log(apellido) // perez
console.log(edad) // 30

// destructuring con declaracion de variables antes de ser asignadas
let persona = {
  nombre: 'jose',
  apellido: 'perez',
  edad: 30
}
let nombre, apellido, edad
({ nombre, apellido, edad } = persona)
console.log(nombre) // jose
console.log(apellido) // perez
console.log(edad) // 30

// destructuring con alias
const persona = {
  nombre: 'jose',
  apellido: 'perez',
  edad: 30
}
const { nombre: nombrePersona, apellido: apellidoPersona, edad: edadPersona } = persona
console.log(nombrePersona) // jose
console.log(apellidoPersona) // perez
console.log(edadPersona) // 30

// destructuring con valores predeterminados
const persona = {
  nombre: 'jose',
  apellido: 'perez'
}
const { nombre, apellido, edad = 30 } = persona // si no existe el elemento en el objeto, se asigna el valor predeterminado
console.log(nombre) // jose
console.log(apellido) // perez
console.log(edad) // 30

