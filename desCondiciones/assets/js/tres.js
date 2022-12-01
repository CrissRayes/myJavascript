const evaluar = () => {

  const secretoUno = '911'
  const secretoDos = '714'

  const digitoUno = document.querySelector('#select-uno').value
  const digitoDos = document.querySelector('#select-dos').value
  const digitoTres = document.querySelector('#select-tres').value
  const respuesta = document.querySelector('#respuesta')

  if (digitoUno + digitoDos + digitoTres === secretoUno) {
    respuesta.innerHTML = 'password 1 correcto'
  } else if (digitoUno + digitoDos + digitoTres === secretoDos) {
    respuesta.innerHTML = 'password 2 correcto'
  } else {
    respuesta.innerHTML = 'password incorrecto'
  }
}