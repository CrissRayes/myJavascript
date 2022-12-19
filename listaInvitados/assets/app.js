// Seleccionar elementos del DOM
const listaDeInvitados = document.querySelector('#invitados')
const invitadoInput = document.querySelector('#nuevoInvitado')
const btnAgregar = document.querySelector('#agregarInvitado')

// Crear un array para guardar los invitados
const invitados = []
// Escuchar el evento click del boton
btnAgregar.addEventListener('click', () => {
  const nuevoInvitado = invitadoInput.value // se hace de esta forma porque cada vez que se presiona el boton, lee el valor del input
  invitados.push(nuevoInvitado)
  invitadoInput.value = '' // se limpia el input

  // iterar sobre el array de invitados y se agrega al DOM
  let html = ''
  for (const invitado of invitados) {
    html += `<li>${invitado}</li>`
  }
  listaDeInvitados.innerHTML = html
})

