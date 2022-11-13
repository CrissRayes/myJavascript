// que es destructuring?
// es una forma de extraer valores de un objeto o array y asignarlos a variables

// ejemplo de destructuring de un array
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const [primero, segundo, tercero, ...resto] = numeros;
console.log(primero, segundo, tercero, resto);

// ejemplo de destructuring de un objeto
const persona = {
  nombre: "Juan",
  apellido: "Perez",
  edad: 30,
  direccion: {
    ciudad: "Buenos Aires",
    pais: "Argentina",
  },
};
const { nombre, apellido, edad, direccion } = persona;
console.log(nombre, apellido, edad, direccion); // Juan Perez 30 {ciudad: "Buenos Aires", pais: "Argentina"}


const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// destructuring
const { today, tomorrow } = HIGH_TEMPERATURES;
// destructuring equivalent
const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;

// destructuring de objetos anidados
// Reemplaza las dos asignaciones con una sintaxis de desestructuración equivalente. Todavía deben seguir asignando las variables lowToday y highToday con los valores de today.low y today.high del objeto LOCAL_FORECAST.
const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};
// destructuring equivalent
const { today: { low: lowToday, high: highToday } } = LOCAL_FORECAST;

let a = 8, b = 6;
// Only change code below this line
[a, b] = [b, a]
console.log(a, b) // 6 8

