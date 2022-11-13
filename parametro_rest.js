// Con el parámetro rest, puedes crear funciones que tomen un número variable de argumentos. Estos argumentos se almacenan en un arreglo al que se puede acceder más tarde desde dentro de la función.

// funcion de flecha con parametro rest
const sumar = (...numeros) => {
  console.log(numeros);
}
sumar(3, 4, 5, 6, 7, 8, 9, 10);

