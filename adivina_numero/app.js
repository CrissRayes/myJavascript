const mensaje = document.querySelector( '#mensaje' )
const puntajeSpan = document.querySelector( '#puntaje' )
const numeroOculto = document.querySelector( '#numero-oculto' )
const btnReiniciar = document.querySelector( '#btn-reiniciar' )
let numeroSecreto = Math.floor( Math.random() * 20 ) + 1
let puntaje = 20
let highscore = 0

puntajeSpan.textContent = puntaje

const mostrarMensaje = ( nuevoMensaje ) => {
  mensaje.textContent = nuevoMensaje
}

const restarPuntaje = ( nuevoMensaje ) => {
  mostrarMensaje( nuevoMensaje )
  puntaje--
  puntajeSpan.textContent = puntaje
}

const colorear = ( fondo, texto ) => {
  document.querySelector( 'body' ).style.backgroundColor = fondo
  document.querySelector( 'body' ).style.color = texto
}

const btnAdivinar = document.querySelector( '#btn-adivinar' )
btnAdivinar.addEventListener( 'click', () => {
  const adivina = Number( document.querySelector( '#input-numero' ).value )
  if ( !adivina ) {
    mostrarMensaje( '⛔️ Debes ingresar un número' )
  } else if ( adivina === numeroSecreto ) {
    mostrarMensaje( '🎉 ¡Ganaste!' )
    numeroOculto.textContent = adivina
    colorear( '#60b347', '#ffffff' )

    if ( puntaje > highscore ) {
      highscore = puntaje
      document.querySelector( '#highscore' ).textContent = highscore
    }

  } else if ( adivina !== numeroSecreto ) {

    if ( puntaje > 1 ) {
      adivina > numeroSecreto ? restarPuntaje( '🔺 Demasiado alto' ) : restarPuntaje( '🔻 Demasiado bajo' )
    } else {
      mostrarMensaje( '💥 Perdiste' )
      puntajeSpan.textContent = 0
      colorear( '#000000', '#ffffff' )
    }

  }

  document.querySelector( '#input-numero' ).value = ''

} )

const reiniciarJuego = () => {
  numeroSecreto = Math.floor( Math.random() * 20 ) + 1
  numeroOculto.textContent = '?'
  puntaje = 20
  puntajeSpan.textContent = puntaje
  mostrarMensaje( '🤔 Adivina el número' )
  colorear( '#ffffff', '#000000' )
  document.querySelector( '#input-numero' ).value = ''
}

btnReiniciar.addEventListener( 'click', reiniciarJuego )
