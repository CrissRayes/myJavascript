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

  // una vez obtenidos los datos, se ejecuta la funcion para convertir
  // se usa then ya que getData() retorna una promesa y se necesita esperar a que se resuelva
  getData().then( data => {
    const value = data.serie[0].valor
    const result = amount / value
    // insertar el resultado en el DOM
    document.getElementById( 'result' ).innerHTML = `${currency === 'dolar' ? '$' : '€'} ${result.toFixed( 2 )} `
  } )
} )


