import React from 'react'
import { AppBar, Container, Toolbar, Typography, Select, MenuItem, ThemeProvider, createTheme, Box } from '@mui/material'
import { CryptoState } from '../Context';

const Header = () => {



  const darkTheme = createTheme({
    palette: {
      mode: 'dark'
    },
  });

  const { currency, setCurrency } = CryptoState();
  return (

    <ThemeProvider theme={darkTheme} >

    <Box>

    <AppBar position='static'>
      <Container>
        <Toolbar>
        <Typography variant='h6' sx={{flexGrow: 1, color: 'white' }}>Crypto Project</Typography>




        <Select 
        variant='outlined'


        style={{ width: 100, height: 40, color: 'white' }}


        value={currency}
        onChange={(e) => setCurrency(e.target.value)}
        
        
        >
        <MenuItem value= {'USD'} >USD</MenuItem>

        <MenuItem value= {'INR'} >INR</MenuItem>

        </Select>
        </Toolbar>
      </Container>
    </AppBar>
    </Box>
    </ThemeProvider>
  )
}

export default Header
