import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'

const ContainerFlex = styled.div`
    display: flex;
    width: 90%;
    background-color: transparent;
    margin-top: 4rem;
    box-shadow: 2px 2px 2px orange;
    border-radius: 5px;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    gap: 1rem;
    @media (min-width: 768px) { 
        width: 100%;
        padding: 0;

    }
    

`
const PrecioP = styled.p`
    font-size: 1.5rem;
    color: white;
    text-transform: uppercase;
    font-family: 'Lato', sans-serif;
    font-weight: bold;
    @media (min-width: 768px) { 
        text-decoration: underline;
        text-underline-offset: 10px;
    }
    
`
const InfoParrafo = styled.p`
    color: white;
    font-size: 1rem;
    text-transform: uppercase;
    font-family: 'Lato', sans-serif;
    font-weight: bold;
`
const SpanInfo = styled.span`
    color: orange;
    
`
const ImgCripto = styled.img`
    max-width: 100%;
    width: 100px;
`
const Cotizacion = ({ monedas, cotizacion }) => {

  const { moneda, cripto } = monedas
  const { PRICE, IMAGEURL, HIGHDAY, LOWDAY, LASTUPDATE } = cotizacion
  return (

   
    <ContainerFlex>
        <ImgCripto src={`https://cryptocompare.com/${IMAGEURL}`} alt="Img cripto" />
        <div>
            <PrecioP>
                El precio es de: <SpanInfo>{PRICE}</SpanInfo>
            </PrecioP>
            <InfoParrafo>
                Su pico más alto en el día de hoy es: <SpanInfo>{HIGHDAY}</SpanInfo>
            </InfoParrafo>
            <InfoParrafo>
                Su pico más bajo en el día de hoy es: <SpanInfo>{LOWDAY}</SpanInfo>
            </InfoParrafo>
            <InfoParrafo>
                Última actualización: <SpanInfo>{LASTUPDATE}</SpanInfo>
            </InfoParrafo>
        </div>

    </ContainerFlex>
    

  )
}

export default Cotizacion