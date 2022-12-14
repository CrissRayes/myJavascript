// Funcion que crea las cards recorriendo el array pasado por parametro
const insertarHTML = (propiedades) => {
  let html = ''
  for (const propiedad of propiedades) {
    html += `
    <div class="propiedad">
      <div class="img" style="background-image: url('${propiedad.src}')">
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
  // Selecciono el elemento donde voy a insertar el HTML y lo inserta
  const propiedadesDOM = document.querySelector('.propiedades')
  propiedadesDOM.innerHTML = html

  // Inserto el total de propiedades en el parrafo con clase total
  const total = document.querySelector('.total')
  total.innerHTML = propiedades.length

}
// llamar a la funcion pasando el array de propiedades llamado propiedadesJSON que está en el archivo index.js
insertarHTML(propiedadesJSON)

// la función buscar_propiedad recibe el array de propiedades desde el onclick del boton buscar
const buscar_propiedad = (propiedades) => {
  const cuartos = document.querySelector('#cuartos').value
  const metrosDesde = document.querySelector('#metros_desde').value
  const metrosHasta = document.querySelector('#metros_hasta').value
  // Valido que los campos no esten vacios, si lo estan muestro un alert
  if (cuartos == '' || metrosDesde == '' || metrosHasta == '') {
    alert('Hay campos sin completar')
  } else {
    // Si los campos estan completos, filtro el array de propiedades y llamo a la funcion insertarHTML pasandole el array filtrado
    const propiedadesFiltradas = propiedades.filter(propiedad => propiedad.cuartos == cuartos && propiedad.metros >= metrosDesde && propiedad.metros <= metrosHasta)
    insertarHTML(propiedadesFiltradas)
  }
}

