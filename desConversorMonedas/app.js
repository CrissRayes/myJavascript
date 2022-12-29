const btnConvert = document.getElementById( 'btn-convert' )
const message = document.getElementById( 'message' )
const showMessage = ( newMessage ) => {
  message.textContent = newMessage
}

btnConvert.addEventListener( 'click', () => {
  const amount = Number( document.getElementById( 'amount' ).value )
  const currency = document.getElementById( 'currency' ).value


  if ( !amount ) {
    return showMessage( '⛔️ Debes ingresar un monto' )
  }

  if ( currency === 'Seleccione moneda' ) {
    return showMessage( '⛔️ Debes seleccionar una moneda' )
  }

  // funcion que obtiene los datos de la API
  const getData = async () => {
    try {
      const response = await fetch( `https://mindicador.cl/api/${currency}` )
      const data = await response.json()
      return data
    } catch ( error ) {
      showMessage( '⛔️ Ocurrio un error' )
    }
  }

  // funcion para convertir el monto ingresado a dolar o euro
  const convert = async () => {
    const data = await getData() // esperamos a que la funcion getData termine de ejecutarse
    const value = data.serie[0].valor // obtenemos el valor del dolar o euro en la posicion 0
    const result = amount / value
    message.innerHTML = `${currency === 'dolar' ? '$' : '€'} ${result.toFixed( 2 )}`
  }
  convert()

  // destruir grafico anterior
  const myChart = document.getElementById( 'myChart' )
  myChart.remove()
  const canvas = document.createElement( 'canvas' )
  canvas.id = 'myChart'
  document.getElementById( 'chart' ).appendChild( canvas )

  // funcion para crear data para el grafico
  const createData = async () => {
    const allData = await getData()
    const data = allData.serie.slice( 0, 10 ) // obtenemos los ultimos 10 dias
    const labels = data.map( ( item ) => item.fecha ) // obtenemos las fechas
    const values = data.map( ( item ) => item.valor ) // obtenemos los valores
    // datasets es un arreglo de objetos que contiene la informacion para el grafico
    const datasets = [{
      label: currency === 'dolar' ? 'Dolar' : 'Euro',
      borderColor: 'rgb(75, 192, 192)',
      data: values,
      tension: 0.1 // curvatura de la linea
    }]

    return { values, labels, datasets }

  }

  // funcion para renderizar el grafico
  const renderChart = async () => {
    const data = await createData()
    const config = {
      type: 'line',
      data: data,
      options: {
        plugins: {
          subtitle: {
            display: true,
            text: 'Ultimos 10 dias'
          }
        },
        scales: {
          x: {
            type: 'time',
            time: {
              unit: 'day',
              displayFormats: {
                day: 'dd-MM'
              }
            }
          },
          y: {
            beginAtZero: false
          }
        }
      }
    }

    const myChart = document.getElementById( 'myChart' )
    myChart.style.backgroundColor = 'white'
    new Chart( myChart, config )
  }

  renderChart()


} )
