// crear y llamar una función
const aprenderHaciendo = () => {
  console.log("hola mundo")
}
aprenderHaciendo()

// la funcion flecha se define como const para que no pueda ser reasignada
// los parametros son los valores que se le pasan a la funcion
const pintar_fondo = (color) => {
  document.body.style.backgroundColor = color
}
pintar_fondo("black")

// el retorno de una funcion es el valor que devuelve
const sumar = (a, b) => {
  return a + b
}
console.log(sumar(2, 3))
