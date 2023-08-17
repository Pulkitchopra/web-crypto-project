import React, {useState, useEffect } from 'react'
import axios from 'axios'
import {CryptoState} from '../Context'

import {TrendingCoins} from '../config/api'



const Carousel = () => {
  const [trending, setTrending] = useState([])

  const {currency} = CryptoState();

  const fetchTrendingCoinsList = async () => {

    const {data} = await axios.get(TrendingCoins(currency));

    setTrending(data);
  
  }

  
  useEffect(() => {
    fetchTrendingCoinsList();
  }, [currency] );






  console.log(trending)






  return (
    <div style={{height: '600px', display: 'flex', alignItems: 'center' }}>
    </div>
  )
}

export default Carousel
