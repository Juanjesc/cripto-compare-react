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
    text-decoration: underline;
    text-underline-offset: 10px;
    
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
    animation:jello-horizontal 1.3s reverse; 
    @keyframes jello-horizontal{0%{transform:scale3d(1,1,1)}30%{transform:scale3d(1.25,.75,1)}40%{transform:scale3d(.75,1.25,1)}50%{transform:scale3d(1.15,.85,1)}65%{transform:scale3d(.95,1.05,1)}75%{transform:scale3d(1.05,.95,1)}100%{transform:scale3d(1,1,1)}}
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