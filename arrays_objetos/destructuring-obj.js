// que es destructuring?
// es una forma de extraer valores de un objeto o array y asignarlos a variables

const persona = {
  nombre: 'Tony',
  edad: 45,
  clave: 'Ironman'
};

// si necesito trabajar con estas propiedades, puedo hacerlo de la siguiente forma
// const nombre = persona.nombre;
// const edad = persona.edad;
// const clave = persona.clave;

// * pero si quiero hacerlo de una forma mas sencilla, puedo hacerlo de la siguiente forma:
// const { nombre, edad, clave } = persona;
// lo anterior es lo mismo que lo siguiente:

// luego, puedo usar las variables que cree ya sea para imprimir o para hacer cualquier otra cosa
// console.log( nombre ); // Tony

// * tambien puedo cambiar el nombre de las variables que cree
// const { nombre: nombre2, edad: edad2, clave: clave2 } = persona;
// console.log( nombre2 ); // Tony

/*
* in a function, how useContext does know which one is the object to be destructured?
because the object is the only argument that is passed to the function
const useContext = ( persona ) => {
  const { nombre, edad, clave } = persona;
  console.log( nombre, edad, clave );
}
*/

/*
* but, if the object is the only argument that is passed to the function, we can do the following:
const useContext = ( { nombre, edad, clave } ) => {
  console.log( nombre, edad, clave );
}
*/

// * we can also set default values
const useContext = ( { clave, nombre, edad, rango = 'Capitan' } ) => {
  // console.log( nombre, edad, rango );
  return {
    nombreClave: clave,
    anios: edad,
    latlng: {
      lat: 14.1232,
      lng: -12.3232
    }
  }
}

const { nombreClave, anios, latlng: { lat, lng } } = useContext( persona );
console.log( nombreClave, anios ); // Ironman 45
console.log( lat, lng ); // 14.1232 -12.3232