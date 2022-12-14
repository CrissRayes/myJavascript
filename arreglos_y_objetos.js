// ARRAYS
// Declarar un array
// const nombres = ['Juan', 'Pedro', 'Elena', 'Maria']
// // recorrer el array y mostrar los elementos en consola
// nombres.forEach(nombre => {
//   console.log(nombre) // Juan, Pedro, Elena, Maria
// })

const nombres = ['Juan', 'Pedro', 'Elena', 'Maria']
// recorrer el array con un for of
for (const nombre of nombres) {
  console.log(nombre)
}

// es posible recorrer el array con un map?
// map() crea un nuevo arreglo con los resultados de la llamada a la funcion indicada aplicados a cada uno de sus elementos
const nombresMayusculas = nombres.map(nombre => nombre.toUpperCase())
console.log(nombresMayusculas) // ['JUAN', 'PEDRO', 'ELENA', 'MARIA']

// agrega elementos a una lista html a partir del arreglo nombres
const lista = document.querySelector('#lista')
nombres.forEach(nombre => {
  const item = document.createElement('li')
  item.textContent = nombre // le agrega texto al elemento item con el nombre del elemento del arreglo nombres
  lista.appendChild(item) // appendChild agrega un elemento como hijo de otro elemento
})

// como obtener ultimo elemento de un array
const numeros = [1, 2, 3, 4, 5]
const ultimo = numeros.pop() // pop() elimina el ultimo elemento del arreglo y lo retorna
console.log(ultimo)

// OBJETOS
// crear un objeto con propiedades a partir de la interpretacion de un texto
const texto = 'Hola, mi nombre es Cristian, tengo 25 años y vivo en la ciudad de Rancagua'
const datos = {}
const partes = texto.split(',')
partes.forEach(part => {
  const [key, value] = part.split(':')
  datos[key] = value
})
console.log(datos)


// agregar los elementos de una lista html a partir de un arreglo de objetos al hacer click en un boton
const lista2 = document.querySelector('#lista2')
const boton = document.querySelector('#boton')
const personas = [
  { nombre: 'Juan', edad: 25 },
  { nombre: 'Pedro', edad: 30 },
  { nombre: 'Elena', edad: 20 },
  { nombre: 'Maria', edad: 35 }
]
boton.addEventListener('click', () => {
  personas.forEach(persona => {
    const item = document.createElement('li')
    item.textContent = `${persona.nombre} tiene ${persona.edad} años`
    lista2.appendChild(item)
  })
})
// refactorizar el codigo anterior para que el boton solo agregue un elemento a la lista
const lista3 = document.querySelector('#lista3')
const boton2 = document.querySelector('#boton2')
const personas2 = [
  { nombre: 'Juan', edad: 25 },
  { nombre: 'Pedro', edad: 30 },
  { nombre: 'Elena', edad: 20 },
  { nombre: 'Maria', edad: 35 }
]
boton2.addEventListener('click', () => {
  const persona = personas2.shift() // shift() elimina el primer elemento del arreglo y lo retorna
  const item = document.createElement('li')
  item.textContent = `${persona.nombre} tiene ${persona.edad} años`
  lista3.appendChild(item)
})

const persona = {
  nombre: 'Juan',
  apellido: 'Perez',
  profesion: 'Desarrollador Web',
  hobby: 'Programar'
}

console.log(persona.nombre) // Juan
console.log(persona['apellido']) // Perez





// obtener las llaves de un objeto
const llaves = Object.keys(persona)
console.log(llaves) // ['nombre', 'apellido', 'profesion', 'hobby']
// obtener los valores de un objeto
const valores = Object.values(persona)
console.log(valores) // ['Juan', 'Perez', 'Desarrollador Web', 'Programar']

// recorrer un objeto con un for in
for (const key in persona) {
  console.log(key) // nombre, apellido, profesion, hobby
  console.log(persona[key]) // Juan, Perez, Desarrollador Web, Programar
}

// recorrer un objeto con un forEach
Object.keys(persona).forEach(key => {
  console.log(key) // nombre, apellido, profesion, hobby
  console.log(persona[key]) // Juan, Perez, Desarrollador Web, Programar
})

// recorrer un objeto con un map
const valores2 = Object.keys(persona).map(key => persona[key])
console.log(valores2) // ['Juan', 'Perez', 'Desarrollador Web', 'Programar']
