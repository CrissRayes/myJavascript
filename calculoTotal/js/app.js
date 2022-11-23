const precio = Number(document.querySelector('#precio').innerHTML)
const unidades = document.querySelector('#unidades')
const resultado = document.querySelector('#resultado')
const boton = document.querySelector('#boton')
const color = document.querySelector('#color')
const circulo = document.querySelector('#circulo')

color.onchange = (e) => {
  e.preventDefault()
  circulo.style.backgroundColor = color.value
}

boton.onclick = (e) => {
  e.preventDefault()
  const total = precio * unidades.value
  resultado.innerHTML = total
}
