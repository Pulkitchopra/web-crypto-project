import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {CryptoState} from '../Context'

import {SingleCoin} from '../config/api'
import axios from 'axios'


import { Typography, LinearProgress} from '@mui/material'
import CoinInfoPage from './CoinInfoPage'
const numberWithCommas = (x) => {


  return (x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')); 
}
const Coins = () => {

  const {id} = useParams();
  
  const [coin, setCoin] = useState();
  
  const { currency, symbol } = CryptoState();

  const fetchCoin = async () => {
    const {data} = await axios.get(SingleCoin(id));




    setCoin(data);
  }
  useEffect(() => {

    fetchCoin();

  }, []);



  if(!coin) {
    return ( <LinearProgress> 

    </LinearProgress> )
  }
  return (
    <div  style={{ display: 'flex' }} >




    <div style={{ width: '40%', display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '15px', padding: '16px' }} >
    <img

    src={ coin?.image.large}

    alt={ coin?.name}

    height= '300px'
    style={{ marginBottom: '15px' }}
    
    
     />
    <Typography variant='h6'>
    {coin?.name}


    </Typography>







    <Typography variant='subtitle1'>
    {coin?.description.en.split('. ')[0]}   



    </Typography>
    <div>

      <span style={{ display: 'flex' }}>
      <Typography variant='h6'>

      Rank: 



      </Typography>





      &nbsp; &nbsp;


      <Typography variant='h5'>





      
      { coin?.market_cap_rank }


      </Typography>

      </span>
      <span style={{ display: 'flex' }}>
      <Typography variant='h6'>

      Current Price: 
      </Typography>
      &nbsp; &nbsp;






      <Typography variant='h5'>
      {symbol} {''}










      { numberWithCommas ( coin?.market_data.current_price[ currency.toLowerCase()] ) }



      </Typography>

      </span>



      <span style={{ display: 'flex' }}>
      <Typography variant='h6'>







      Market Cap: 
      </Typography>

      &nbsp; &nbsp;



      <Typography variant='h5'>
      {symbol} {''}
      { numberWithCommas( coin?.market_data.market_cap[ currency.toLowerCase()].toString().slice(0, -6) ) }



      </Typography>

      </span>


    </div>





    </div>


    <CoinInfoPage coin={coin} />
    </div>
  )
}
export default Coins
