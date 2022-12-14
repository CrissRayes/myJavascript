

const propiedades = document.querySelector('.propiedades')
for (const propiedad of propiedadesJSON) {
  propiedades.innerHTML += `
    <div class="propiedad">
      <div class="img"
          style="background-image: url(${propiedad.src})">
      </div>
      <section>
          <h5>${propiedad.nombre}</h5>
          <div class="d-flex justify-content-between">
              <p>Cuartos: ${propiedad.cuartos}</p>
              <p>Metros: ${propiedad.metros}</p>
          </div>
          <p class="my-3">${propiedad.descripcion}</p>
          <button class="btn btn-info" onclick="buscar_propiedad()">Ver más</button>
        </section>
    </div>
    `
}










// buscar propiedades
const buscar = () => {
  // some code
}

