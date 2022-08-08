import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import styled from '@emotion/styled'
import imgCripto from './img/imagen-criptos.png'
import Formulario from './components/Formulario'
import { monedas } from './data/monedas'
import Cotizacion from './components/Cotizacion'
import Spinner from './components/Spinner'

const Heading = styled.h1`
  font-family: 'Lato', sans-serif;
  color: #fff;
  text-align: center;
  margin-top: 5rem;
  margin-bottom: 3.1rem;
  font-size: 2.1rem;
  &::after{
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display: block;
    margin: 15px auto 0 auto; 
  }
`
const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 992px) { 
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`
const Imagen = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`

function App() {
  const [monedas, setMonedas] = useState({}) //En monedas tenemos el objeto que nos trae la moneda y cripto elegida por el usuario
  const [cotizacion, setCotizacion] = useState({})
  const [cargando, setCargando] = useState(false)
  useEffect(() => {
    // console.log('lo que sea'); Importante, esto se ejecuta al recargar la página ¿cómo podemos evitarlo? - Haciendo comprobaciones previas
    if (Object.keys(monedas).length > 0){
      const cotizarCripto = async () => {
        setCargando(true)
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${monedas.cripto}&tsyms=${monedas.moneda}`
        const respuesta = await fetch(url)
        const resultado = await respuesta.json()
        setCotizacion(resultado.DISPLAY[monedas.cripto][monedas.moneda])
        setCargando(false)

      }
      cotizarCripto()
    }
  },[monedas])
  
  return (
    <Contenedor>
      <Imagen 
        src={imgCripto}
        alt="img criptos"
      />
      <div>
        <Heading>Cotiza criptomonedas al instante</Heading>
        <Formulario 
          setMonedas={setMonedas}
        />
        {cargando && <Spinner />}
        {cotizacion.PRICE && (
          <Cotizacion 
            monedas={monedas}
            cotizacion={cotizacion}
          />
        )}
      </div>
    </Contenedor>
  )
}

export default App
