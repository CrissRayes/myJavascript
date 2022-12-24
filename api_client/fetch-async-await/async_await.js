// que es una promesa?
// Una promesa es un objeto que representa el resultado de una operación asíncrona
// Las promesas tienen tres estados:
// 1. pending: estado inicial, no se ha cumplido o rechazado
// 2. fulfilled: la operación se ha cumplido
// 3. rejected: la operación ha sido rechazada

// async es un keyword que nos permite declarar una función asíncrona
// fetch es una función que nos permite hacer peticiones HTTP
// * fetch devuelve una promesa <--- es un tipo de dato especial que representa el resultado de una operación asíncrona
// * await es un keyword que nos permite esperar a que una promesa se resuelva
// * await solo puede ser usado dentro de una función declarada con async

async function getCurrency () {
  const respuesta = await fetch( 'https://api.gael.cloud/general/public/monedas' ) // await es un keyword que nos permite esperar a que una promesa se resuelva
  const data = await respuesta.json() // Se obtiene el contenido en formato JSON de la respuesta
  // console.log( data )
}

getCurrency()

// async con arroe functions
const getRandomUser = async () => {
  const respuesta = await fetch( 'https://randomuser.me/api' )
  const data = await respuesta.json()
  console.log( data )

  // mostrar datos en el DOM (email y phone)
  // resutls es un array de objetos que viene en el JSON
  const element = document.querySelector( '.user' )
  element.innerHTML = `
    <p>Email: ${data.results[0].email}</p>
    <p>Phone: ${data.results[0].phone}</p>
  `

}

getRandomUser()


// Sentencia try...catch
// try...catch nos permite capturar errores en tiempo de ejecución
// try...catch solo funciona con código asíncrono

async function getSomething () {
  try {
    const respuesta = await fetch( 'https://estapaginanoexiste.cl' )
    const data = await respuesta.json()
    console.log( data )
  } catch ( e ) { // e puede ser cualquier nombre de variable, lo habitual es usar e o err o error
    console.log( e )
  }
}

getSomething()