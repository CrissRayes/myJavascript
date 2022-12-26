const mensaje = document.querySelector( '#mensaje' )

// número aleatorio entre 1 y 20
const numeroSecreto = Math.floor( Math.random() * 20 ) + 1

// mostrar el número secreto en el DOM
const numeroOculto = document.querySelector( '#numero-oculto' )
numeroOculto.textContent = numeroSecreto

// variable para el puntaje, comienza en 20 y se resta 1 por cada intento fallido
let puntaje = 3
// mostrar puntaje en el DOM
const puntajeSpan = document.querySelector( '#puntaje' )
puntajeSpan.textContent = puntaje

// funcion para restar 1 al puntaje y mostrarlo en el DOM
const restarPuntaje = () => {
  puntaje--
  puntajeSpan.textContent = puntaje
}

// evento click para el botón adivinar
const btnAdivinar = document.querySelector( '#btn-adivinar' )
btnAdivinar.addEventListener( 'click', () => {
  const adivina = Number( document.querySelector( '#input-numero' ).value )
  // chequear si adivina viene vacío
  if ( !adivina ) {
    mensaje.textContent = '⛔️ Debes ingresar un número'
  } else if ( adivina === numeroSecreto ) {
    mensaje.textContent = '🎉 ¡Ganaste!'
  } else if ( adivina > numeroSecreto && puntaje > 1 ) {
    mensaje.textContent = '🔺 Demasiado alto'
    restarPuntaje()
  } else if ( adivina < numeroSecreto && puntaje > 1 ) {
    mensaje.textContent = '🔻 Demasiado bajo'
    restarPuntaje()
  } else {
    if ( puntaje === 0 ) {
      alert( 'Perdiste' )
    } else {
      mensaje.textContent = '💥 Perdiste'
      restarPuntaje()
    }
  }

  // limpiar el input
  document.querySelector( '#input-numero' ).value = ''

} )

// evento click para el botón reiniciar
const btnReiniciar = document.querySelector( '#btn-reiniciar' )

const reiniciarJuego = () => {
  const numeroSecreto = Math.floor( Math.random() * 20 ) + 1
  numeroOculto.textContent = numeroSecreto
  puntaje = 3
  puntajeSpan.textContent = puntaje
  mensaje.textContent = '🤔 Adivina el número'
}

btnReiniciar.addEventListener( 'click', reiniciarJuego )
