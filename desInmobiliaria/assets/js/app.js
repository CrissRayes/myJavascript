
const insertarHTML = (propiedades) => {
  let html = ''
  for (const propiedad of propiedades) {
    html += `
    <div class="propiedad">
      <div class="img" style="background-image: url(${propiedad.src})">
      </div>
      <section>
        <h5>${propiedad.nombre}</h5>
        <div class="d-flex justify-content-between">
          <p>Cuartos: ${propiedad.cuartos}</p>
          <p>Metros: ${propiedad.metros}</p>
        </div>
        <p class="my-3">${propiedad.descripcion}</p>
        <button class="btn btn-info">Ver más</button>
      </section>
    </div>
    `
  }
  const propiedadesDOM = document.querySelector('.propiedades')
  propiedadesDOM.innerHTML = html

  const total = document.querySelector('.total')
  total.innerHTML = propiedades.length

}
insertarHTML(propiedadesJSON)

const buscar_propiedad = (propiedades) => {
  const cuartos = document.querySelector('#cuartos').value
  const metrosDesde = document.querySelector('#metros_desde').value
  const metrosHasta = document.querySelector('#metros_hasta').value

  if (cuartos == '' || metrosDesde == '' || metrosHasta == '') {
    alert('Hay campos sin completar')
  }

}
