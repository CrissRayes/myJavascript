// que es destructuring?
// es una forma de extraer valores de un objeto o array y asignarlos a variables

const deadpool = {
  nombre: 'Wade',
  apellido: 'Winston',
  poder: 'Regeneración',
  getNombre() {
    return `${this.nombre} ${this.apellido} - poder: ${this.poder}`
  }
}

// sin destructuring
// const nombre = deadpool.nombre
// const apellido = deadpool.apellido
// const poder = deadpool.poder

// aplicando destructuring
// const { nombre, apellido, poder } = deadpool
// console.log(nombre, apellido, poder) // Wade Winston Regeneración


// destructuring con funciones
// se puede aplicar destructuring a los parametros de una funcion
// function imprimeHeroe({ nombre, apellido, poder }) {
function imprimeHeroe(heroe) {
  const { nombre, apellido, poder } = heroe
  console.log(nombre, apellido, poder)
}

imprimeHeroe(deadpool) // Wade Winston Regeneración

// destructuring con arrays
const heroes = ['Deadpool', 'Superman', 'Batman']
// const h1 = heroes[0]
// const h2 = heroes[1]
// const h3 = heroes[2]
// en lugar de lo anterior, se puede hacer lo siguiente
const [h1, h2, h3] = heroes
// si solo se quiere obtener un elemento del array, se puede hacer lo siguiente
// const [ , , h3] = heroes

console.log(h1, h2, h3) // Deadpool Superman Batman

