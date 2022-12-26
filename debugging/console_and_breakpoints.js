// Debuggear con console
// Esta funcion hace la conversion desde grados celcius a kelvin
const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    // C) Hacer que el prompt retorne un numero
    value: Number( prompt( 'Degrees celsius:' ) ), // el error era que no se convertia a numero
  };
  // B) Buscar el error
  console.table( measurement );
  // console.log(measurement.value);
  // console.warn(measurement.value);
  // console.error(measurement.value);
  const kelvin = measurement.value + 273;
  return kelvin;
}

// A) Identificar el error
console.log( measureKelvin() );

/*
* En la consola de chrome se pueden definir breakpoints
* para detener la ejecucion del codigo en un punto especifico
* y asi poder debuggearlo

para ello se debe ir a  la pestaña "sources" 
y luego elegir el file 
y después ir a la linea donde se quiere poner el breakpoint
*/


