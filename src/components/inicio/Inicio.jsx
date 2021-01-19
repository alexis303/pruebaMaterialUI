import React, { Fragment } from 'react'
import Carrusel from './Carrusel'


import SecPresentacion from './SecPresentacion'
import Testimonios from './Testimonios'
import MuestraGaleria from './MuestraGale'

const Inicio = () => {
  return (
    <Fragment>
      <Carrusel/>
      <SecPresentacion/>
      <MuestraGaleria/>
      <Testimonios/>
    </Fragment>
       
  )
}

export default Inicio