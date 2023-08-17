import React from 'react'
import { AppBar, Container, Toolbar, Typography, Select, MenuItem, ThemeProvider, createTheme, Box } from '@mui/material'
import { CryptoState } from '../Context';

const Header = () => {



  const darkTheme = createTheme({
    palette: {
      mode: 'light',
    },
  });
  const { currency, setCurrency } = CryptoState();
  return (






    <ThemeProvider theme={darkTheme} >
    <Box>

    <AppBar position='static'>
      <Container>
        <Toolbar>
        <Typography sx={{flexGrow: 1}}>Crypto Project</Typography>
        <Select 
        variant='outlined'

        style={{
          width: 100,
          height: 40,
        }}


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
