import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {CoinList} from '../config/api'

import {CryptoState} from '../Context'
import { Container, Typography, TextField, TableContainer, Table, TableHead, TableRow, TableBody, TableCell, LinearProgress, Pagination } from '@mui/material'


import {useNavigate} from 'react-router-dom'
const CoinsTable = () => {
  const numberWithCommas = (x) => {


    return (x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')); 
   }
    const [coins, setCoins] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();



    const [cryptoSearch, setCryptoSearch] = useState('');
    const [page, setPage] = useState(1);
    const { currency, symbol } = CryptoState();
    const fetchCoins = async () => {






        setLoading(true);
        const { data } = await axios.get(CoinList(currency));
        setCoins(data)
        setLoading(false);



    };


    useEffect(() => {
        
        fetchCoins();
// eslint-disable-next-line
    }, [currency]);




    const handleSearch = () => {
      return (

        coins.filter(


          





          (coin) => (     
            coin.name.toLowerCase().includes(cryptoSearch) || coin.symbol.toLowerCase().includes(cryptoSearch)
            )

          
        )
      )
    }






  return (


    
    <div>
    <Container style={{textAlign: 'center' }}>
   
    <Typography variant='h6' style={{ margin: '16px', color: 'white'  }} >
        Crypto Prices
    </Typography>



 
    <TextField 
    label = 'Search Crypto'

    variant='outlined'

    style={{ marginBottom: '15px', width: '100%', color: 'white'  }}
    onChange={(e) => setCryptoSearch(e.target.value)}
     />







     <TableContainer>



      {loading ? (

        <LinearProgress style={{background: 'black' }} />

      ) : (


        <Table>
        <TableHead style={{backgroundColor: 'white' }} >





                
          <TableRow>
          {[ 'Coin', 'Price', '24h Change', 'Market Cap'].map((head) => (









            <TableCell
            style={{ color: 'black', fontWeight: '600', }} 
            key={head}


            align={ head === 'Coin' ? '' : 'right' }
            >
            {head}
            </TableCell>

          ) ) }


          
          </TableRow>



        </TableHead>






        <TableBody>
        { handleSearch()

        .slice( (page - 1 ) * 10, ( page - 1 ) * 10 + 10 )
        .map((row) => {


          const profit = row.price_change_percentage_24h > 0;

          


          return(









            <TableRow

            onClick = {() => navigate(`/coins/${row.id}`) }








             key={row.name}
            
            >
            
            <TableCell


            component= 'th'

            scope='row'







            
            
            
            
            style={{ display: 'flex', gap: '15px', color: 'white' }}

            >




            









            <img
            src= { row?.image }

            alt= { row.name }






            height= '60'





            style={{marginBottom: '15px' }}




             />

            <div style={{ display: 'flex', flexDirection: 'column', fontSize: '16px'}} >






            <span


            style={{ textTransform: 'uppercase' }}
            >






            { row.symbol }

            </span>







            

            
            <span>















            { row.name }






            </span>

            </div>


            </TableCell>
            
            
            
            
            
            
            



            <TableCell align='right' style={{ color: 'white' }} >
            { symbol } {' '} { numberWithCommas ( row.current_price.toFixed(2))}

            </TableCell>





             <TableCell
            align='right'
            style={{ color: profit > 0 ? 'green' : 'red', fontWeight: '600' }}


            >





            { profit && '+' }

            { row.price_change_percentage_24h.toFixed(2)}%

            </TableCell>



            <TableCell
            align='right' style={{ color: 'white' }}
            >
            { symbol } {' '} { numberWithCommas( row.market_cap.toString())}
            </TableCell>



            </TableRow>
          )

          
        } ) }
       </TableBody>


        </Table>
      ) }
     </TableContainer>

     <
     
     
     Pagination




     style={{ padding: '15px', display: 'flex', justifyContent: 'center', color: 'white'  }}


     count={( handleSearch().length/10 ).toFixed(0)}
     onChange={( _, value ) => {

      setPage(value);



      window.scroll(0,450);
     } }
 
      

      />
    </Container>






      
    </div>
  )
}

export default CoinsTable
