import React, { useState } from 'react'
import styled from '@emotion/styled'

const Label = styled.label`
    color:#fff;
    font-size: 24px;
    font-family: 'Lato', sans-serif;
    width: 100%;
    display: block;
    margin: 15px 0;
`
const Select = styled.select`
    padding: 1rem;
    outline: none;
    border: none;
    box-shadow: 2px 2px 2px orange;
    display: block;
    width: 100%;
    border-radius: 5px;
    font-size: 18px;
    background-color: #009ccb8b;
    color: white;
    cursor: pointer;
`
const Option = styled.option`
    font-family: 'Lato', sans-serif;
    padding: 1rem;
    background-color: white;
    color:black;
`
const useSelectMonedas = (text, opciones) => {

  const [state, setState] = useState('')

  const SelectMonedas = () => (
    <>
        <Label>{text}</Label>
        <Select
            value={state}
            onChange={(e) => setState(e.target.value)}
        >
            <Option value="">-- Seleccione --</Option>
            {opciones.map(opcion => (
                <Option 
                    key={opcion.id}
                    value={opcion.id}
                >
                    {opcion.nombre}
                </Option>
            ))}
        </Select>
    </>
  )
  return (
    [state, SelectMonedas]
  )
}

export default useSelectMonedas