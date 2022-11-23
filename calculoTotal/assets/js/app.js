// button event onclick
const boton = document.querySelector('#boton')

boton.onclick = (e) => {
  const precio = Number(document.querySelector('#precio').innerHTML)
  const unidades = document.querySelector('#unidades').value
  const resultado = document.querySelector('#resultado')
  e.preventDefault()

  // calculating total and showing it
  const total = precio * unidades
  resultado.innerHTML = total

  // show units at #cantidad
  const cantidad = document.querySelector('#cantidad')
  cantidad.innerHTML = unidades

}

// input event for changing color
color.onchange = (e) => {
  e.preventDefault()
  const circulo = document.querySelector('#circulo')
  const color = document.querySelector('#color').value
  circulo.style.backgroundColor = color
}
