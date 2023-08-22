import React from 'react'
import { Container, Typography } from '@mui/material'
import Carousel from './Carousel'

const MainSection = () => {
  return (


    <div>




    <Container style={{ height: '600px', display: 'flex', flexDirection: 'column', border: 'none', marginTop: '60px', justifyContent: 'space-around' }}>
    <div>
    <Typography variant='h2' style={{ textAlign: 'center', color: 'white', fontWeight: '600px' }}>Web Crypto Project</Typography>








    </div>






    <Carousel/>

    </Container>


      
    </div>
  )
}

export default MainSection
