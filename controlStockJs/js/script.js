'use strict';

const tasaIva = 0.19;
let productos = [];
let traerProductos = JSON.parse(localStorage.getItem('productos'));
let formulario = document.getElementById('form-producto');
const tablaProductos = document.getElementById('tabla-productos');
const modal = document.getElementById('modal');
const modalContenido = document.getElementById('modal-contenido');
const cubrir = document.getElementById('cubrir');
const btnCerrarModal = document.getElementById('cerrar-modal');

/// FUNCIONES PARA EL MODAL
const abrirModal = () => {
  modal.classList.remove('oculto');
  cubrir.classList.remove('oculto');
};
const cerrarModal = () => {
  modal.classList.add('oculto');
  cubrir.classList.add('oculto');
};

/// MOSTRAR EN HTML LA LISTA DE PRODUCTO AL ABRIR DOCUMENTO
document.addEventListener('DOMContentLoaded', () => {
  if (traerProductos) {
    productos = traerProductos;
  }
  mostrarProductos();
});

/// DEFINICIÓN DE CLASE
class Producto {
  constructor(nombre, stock, costo, precio) {
    this.nombre = nombre;
    this.stock = stock;
    this.costo = costo;
    this.precio = precio;
  }

  calcMargen() {
    return `<p>this.precio - this.costo</p>`
  }

  calcMargenPorcent() {
    return `<p>(1 - this.costo / this.precio) * 100</p>`
  }
}

/// AGREGAR PRODUCTO DESDE FORMULARIO
formulario.addEventListener('submit', (e) => {
  e.preventDefault();
  let datosFormulario = new FormData(e.target);
  let producto = new Producto(
    datosFormulario.get('nombre'),
    datosFormulario.get('stock'),
    datosFormulario.get('costo'),
    datosFormulario.get('precio')
  );

  // AGREGAR PRODUCTO AL FINAL DEL ARRAY PRODUCTOS
  productos.push(producto);

  // GUARDAR EN LOCAL STORAGE
  localStorage.setItem('productos', JSON.stringify(productos));

  // LIMPIAR FORMULARIO
  formulario.reset();

  // MOSTAR EN HTML
  mostrarProductos();

  // CURSOR EN INPUT 'NOMBRE'
  document.getElementById('nombre').focus();
});

/// FUNCIÓN PARA MOSTRAR PRODUCTOS EN HTML > TABLA
// CREA ELEMENTO TR
// AGREGA COLUMNAS CON DATOS A LA FILA
// AGREGA FILA CON APPEND CHILD
const mostrarProductos = () => {
  tablaProductos.innerHTML = '';
  productos.forEach((producto, indice) => {
    let filaTabla = document.createElement('tr');
    filaTabla.setAttribute('id', `producto${indice + 1}`);
    filaTabla.innerHTML = `
      <th scope='row'>${indice + 1}</th>
      <td>${producto.nombre}</td>
      <td>${parseInt(producto.stock).toLocaleString('es-CL')}</td>
      <td>$${parseInt(producto.costo).toLocaleString('es-CL')}</td>
      <td>$${parseInt(producto.precio).toLocaleString('es-CL')}</td>
      <td>
      <i class="fas fa-info-circle text-success fa-lg" id='btn-info${
        indice + 1
      }' role='button'></i>
      </td>
      <td>
      <i class="fas fa-trash-alt text-danger fa-lg" id='btn-borrar${
        indice + 1
      }' role='button'></i>
      </td>
      `;
    tablaProductos.appendChild(filaTabla);
  });
  llenarModal();
  borrarProducto();
};

/// FUNCION PARA INSERTAR HTML AL MODAL
// MUESTRA EL MODAL
// FIXME: AGREGAR METODOS DE CLASE PARA MOSTRAR CALCULOS
const llenarModal = () => {
  productos.forEach((producto, indice) => {
    document
      .getElementById(`btn-info${indice + 1}`)
      .addEventListener('click', () => {
        modalContenido.innerHTML = `
              <h5>Producto: ${producto.nombre}</h5>
              <p>
              Margen: $${(producto.precio - producto.costo).toLocaleString(
                'es-CL'
              )}
              </p> 
              <p>
              Margen: ${(
                (1 - producto.costo / producto.precio) *
                100
              ).toLocaleString('es-CL')}%
              </p>
	      ${producto.calcMargen()};
            `;
        abrirModal();
      });
  });
};

/// FUNCIÓN PARA BORRAR PRODUCTO DESDE LA TABLA Y DEL ARRAY
// SE ACTUALIZA EL LOCALSTORAGE
// SE CARGA DE NUEVO LA TABLA EN HTML
const borrarProducto = () => {
  productos.forEach((producto, indice) => {
    document
      .getElementById(`btn-borrar${indice + 1}`)
      .addEventListener('click', () => {
        productos.splice(indice, 1);
        tablaProductos.removeChild(
          document.getElementById(`producto${indice + 1}`)
        );
        localStorage.setItem('productos', JSON.stringify(productos));
        mostrarProductos(); // EJECUTO ACÁ LA FUNCIÓN PARA EVITAR EL PROBLEMA DE BORRAR Y QUE LOS INDICES SE "MUEVAN"
      });
  });
};

/// CERRAR MODAL CON BOTON X
btnCerrarModal.addEventListener('click', cerrarModal);

/// CERRAR MODAL CON CLICK FUERA DEL MODAL
cubrir.addEventListener('click', cerrarModal);

/// CERRAR MODAL CON TECLA ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !modal.classList.contains('oculto')) {
    cerrarModal();
  }
});
