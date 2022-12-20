// Seleccionar elementos del DOM
const listaDeInvitados = document.querySelector( '#invitados' )
const invitadoInput = document.querySelector( '#nuevoInvitado' )
const btnAgregar = document.querySelector( '#agregarInvitado' )

// Crear un array para guardar los invitados
const invitados = []
// Escuchar el evento click del boton
btnAgregar.addEventListener( 'click', () => {
  const nuevoInvitado = invitadoInput.value // se hace de esta forma porque cada vez que se presiona el boton, lee el valor del input

  if ( nuevoInvitado === '' ) {
    alert( 'El campo no puede estar vacio' )
    return // se usa return para que no se siga ejecutando el codigo
  }

  invitados.push( nuevoInvitado )
  invitadoInput.value = '' // se limpia el input

  // iterar sobre el array de invitados y se agrega al DOM
  let html = '' // cada vez que se presiona el boton, se limpia el html para luego recorre el array y agregar los nuevos invitados
  for ( const invitado of invitados ) {
    html += `<li>${invitado}</li>`
  }
  listaDeInvitados.innerHTML = html
} )

