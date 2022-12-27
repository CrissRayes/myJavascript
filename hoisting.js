
/* 
El hoisting es la forma en que JS interpreta las declaraciones de variables y funciones
antes de ejecutar el código.
El hoisting hace accesibles/usables algunas variables y funciones antes de que sean declaradas.
El códibo escanea la declaración de variables y por cada una de ellas, 
una nueva propiedad es creada en el objeto de entorno variable

function declaration hoisted? YES, initial value: actual function, scope: block.
var variables hoisted? YES, initial value: undefined, scope: function. 
let variables hoisted? NO, initial value: <unininitialized> TDZ, scope: block
const variables hoisted? NO, initial value: <unininitialized> TDZ(temporal dead zone), scope: block

para functions expression y arrow functions, depende si se declaran con var, let o const y se aplican las reglas de hoisting de cada uno de ellos.

*****************************************************
TDZ: temporal dead zone, es el codigo anterior a la declaracion de la variable, en el que no se puede acceder a la variable, ya que no existe.

Si se intenta usar una variable antes de declararla, se lanza un error de referencia: 
* ReferenceError: cannot access 'variable' before initialization

Esto es diferente a intentar usar una variable que no existe, ya que su error es: 
* ReferenceError: variable is not defined

*/
