import React from 'react'
import { Container, Image } from 'react-bootstrap'
import Carrousel from '../layout/Carrousel'

const Four = () => {
  return (
    <>
      <Container fluid className='py-4 text-center'>
        {/* <h3 className='pb-3 text-decoration-underline text-center titulo' style={{'color':"var(--skyBlue)"}}>Mis fotos!</h3>
        <Carrousel/> */}
        <div className='asistenciaFont asisBack text-center pb-4 pt-4'>
          <h2 className='text-decoration-underline fs-1 fw-bold'>Asistencia</h2>
          <p className='fs-6 my-0'>Quiero contar contigo, ¿vienes?</p>
          <p className='fs-6 my-0'>Confírmame, por favor.</p>
          <Button href='https://wa.me/543812035936?text=Hola%20Maíte,%20confirmo%20mi%20presencia.%20Soy%20[tu nombre]' className='my-3 mx-auto cardButton fw-bold'>
            Confirmar Presencia!
          </Button>
        </div>
      </Container>
    </>
  )
}

export default Four