/*

? que pasa si la api está caída o no responde?
Para eso usamos try catch, el que nos devuelve un mensaje de error
La respuesta de este mensaje de error está definida por el lenguaje de programación, pero
* podemos escribir un mensaje personalizado con throw

*/
const getSomething = async () => {
  try {
    const response = await fetch( 'https://estapaginanoexiste.cl' )
    const data = await response.json()
    console.log( data )
  } catch ( e ) {
    alert( e.message )
  }
}

getSomething() // Error: Failed to fetch