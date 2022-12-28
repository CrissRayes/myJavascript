const btnConvert = document.getElementById( 'btn-convert' )

btnConvert.addEventListener( 'click', () => {
  const amount = Number( document.getElementById( 'amount' ).value )
  const currency = document.getElementById( 'currency' ).value

  // funcion que obtiene los datos de la API
  const getData = async () => {
    try {
      const response = await fetch( `https://mindicador.cl/api/${currency}` )
      const data = await response.json()
      return data
    } catch ( error ) {
      console.log( error.message )
    }
  }
  console.log( getData() ) // TODO: Eliminar esta linea

  const convert = async () => {
    const data = await getData() // esperamos a que la funcion getData termine de ejecutarse
    const value = data.serie[0].valor // obtenemos el valor del dolar o euro en la posicion 0
    const result = amount / value
    document.getElementById( 'result' ).innerHTML = `${currency === 'dolar' ? '$' : '€'} ${result.toFixed( 2 )}`
  }
  convert()

} )


