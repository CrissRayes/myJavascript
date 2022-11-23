// evento click en el boton del formulario
const boton = document.querySelector('#boton')
boton.onclick = (e) => {
  const precio = Number(document.querySelector('#precio').innerHTML)
  const unidades = document.querySelector('#unidades').value
  const resultado = document.querySelector('#resultado')
  e.preventDefault()
  const total = precio * unidades
  resultado.innerHTML = total
}

// evento para input del color
const cantidad = document.querySelector('#cantidad')
color.onchange = (e) => {
  e.preventDefault()
  const circulo = document.querySelector('#circulo')
  const color = document.querySelector('#color').value
  circulo.style.backgroundColor = color
}
