
// un callback es una funcion que se envia como argumento a otra funcion
const getUsuarioByID = ( id, callback ) => {
  const usuario = {
    id,
    nombre: 'Fernando'
  }
  setTimeout( () => {
    callback( usuario )
  }, 1500 )
}

getUsuarioByID( 10, ( usuario ) => {
  console.log( usuario.id )
  console.log( usuario.nombre.toUpperCase() )

} )

// en el ejemplo anterior el callback es la funcion que se envia como argumento a la funcion getUsuarioByID
// en este caso la funcion que se envia como argumento es una funcion anonima
