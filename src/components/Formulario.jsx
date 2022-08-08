import React, { useState } from 'react'
import styled from '@emotion/styled'
import useSelectMonedas from '../hooks/useSelectMonedas'
import { monedas } from '../data/monedas'
import { useEffect } from 'react'

const ButtonSubmit = styled.input`
    padding: .8rem;
    background-color: #009ccb8b;
    color: #fff;
    border: none;
    width: 100%;
    font-size: 1.2rem;
    font-weight: 700;
    text-transform: uppercase;
    border-radius: 5px;
    margin-top: 30px;
    box-shadow: 2px 2px 2px orange;
    cursor: pointer;
    transition: all .3s ease-in-out;
    &:hover{
        background-color: #005d798a;
    }

`
const MensajeError = styled.p`
  background-color: white;
  padding: 1rem;
  color: red;
  font-weight: bold;
  font-family: 'Lato', sans-serif;
  width: 100%;
`
const Formulario = ({ setMonedas }) => {
  const [criptos, setCriptos] = useState([])
  const [error, setError] = useState(false)
  const [ moneda, SelectMonedas ] = useSelectMonedas('Selecciona tu moneda', monedas)
  const [ cripto, SelectCripto ] = useSelectMonedas('Selecciona tu cripto', criptos)

  useEffect(() => {
    const consultarApi = async () => {
      const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD"
      const respuesta = await fetch(url)
      const resultado = await respuesta.json()
      console.log(resultado.Data);
      const arrayCripto = resultado.Data.map(data => {
        //console.log(`${data.CoinInfo.Name} → ${data.CoinInfo.FullName}`)
        const objeto = {
          id: data.CoinInfo.Name,
          nombre: data.CoinInfo.FullName
        }
        return objeto
      })
      console.log(arrayCripto)
      setCriptos(arrayCripto)
    }
    consultarApi()
  },[])
  
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(moneda + ' → ' + cripto)
    if ([moneda, cripto].includes('')){
      console.log('error')
      setError(true)
    }
    else{
      setError(false)
      setMonedas({
        moneda: moneda,
        cripto: cripto
      })
    }
  }

 
  return (
    <>
      {error ? 
        <MensajeError>Todos los campos son obligatorios</MensajeError> : ''
      }
      <form onSubmit={handleSubmit}>
          <SelectMonedas />
          <SelectCripto />
      
          
          <ButtonSubmit 
              type='submit'
              value='Cotizar'
          />
      </form>
    </>
  )
}

export default Formulario