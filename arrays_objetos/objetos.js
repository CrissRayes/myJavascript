// crear un objeto
const miObjeto = {
  propiedad1: "valor1",
  propiedad2: "valor2",
  propiedad3: "valor3"
}

// acceder a una propiedad
miObjeto.propiedad1 // "valor1"

// modificar una propiedad
miObjeto.propiedad1 = "nuevo valor"

// agregar una propiedad
miObjeto.propiedad4 = "valor4"

// eliminar una propiedad
delete miObjeto.propiedad4

// crear un objeto con una propiedad
const miObjeto = {
  propiedad1: "valor1"
}

// crear un objeto con una propiedad y un método
const miObjeto = {
  propiedad1: "valor1",
  metodo1: function () {
    // código
  }
}

// Destructuring de un objeto
const miObjeto = {
  propiedad1: "valor1",
  propiedad2: "valor2",
  propiedad3: "valor3"
}

const { propiedad1, propiedad2 } = miObjeto

propiedad1 // "valor1"
propiedad2 // "valor2"
