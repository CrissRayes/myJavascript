const verificar = () => {
  // Esta es la solución propuesta en la tutoría
  // const cantidadUno = document.querySelector('#cantidad-1').value || 0
  // const cantidadDos = document.querySelector('#cantidad-2').value || 0
  // const cantidadTres = document.querySelector('#cantidad-3').value || 0
  // const suma = parseInt(cantidadUno) + parseInt(cantidadDos) + parseInt(cantidadTres)
  // const respuesta = document.querySelector('#respuesta')

  // if (suma <= 10) {
  //   respuesta.innerHTML = `Llevas ${suma} stickers`
  // } else {
  //   respuesta.innerHTML = 'Llevas demasiados stickers'
  // }

  // Esta es mi propuesta de solución recorriendo todos los inputs
  // No sé si sea la mejor solución, pero funciona

  const inputs = document.querySelectorAll('.cantidad')
  let suma = 0
  inputs.forEach(input => {
    suma += parseInt(input.value)
  })
  const respuesta = document.querySelector('#respuesta')
  if (suma <= 10) {
    respuesta.innerHTML = `Llevas ${suma} stickers`
  }
  else if (suma > 10) {
    respuesta.innerHTML = 'Llevas demasiados stickers'
  } else {
    respuesta.innerHTML = 'Debes completar todos los campos'
  }
}