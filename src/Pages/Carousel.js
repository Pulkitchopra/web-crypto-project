import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { CryptoState } from '../Context'

import { TrendingCoins } from '../config/api'
import AliceCarousel from 'react-alice-carousel'


import { Link } from 'react-router-dom'

const Carousel = () => {
  const [trending, setTrending] = useState([])

  const { currency, symbol } = CryptoState();

  const fetchTrendingCoinsList = async () => {

    const { data } = await axios.get(TrendingCoins(currency));

    setTrending(data);

  }

   const numberWithCommas = (x) => {
    return (x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));

  }







  useEffect(() => {
    fetchTrendingCoinsList();
  }, [currency]);


  const items = trending.map((coin) => {
    let profit = coin.price_change_percentage_24h >= 0;
    return (
      <Link style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',





        border: 'none',
        cursor: 'pointer',
        textTransform: 'uppercase',
        color: 'white',
        fontSize: '18px',
        textDecoration: 'none'
      }}

        to={`/coins/${coin.id}`} >
        <img

          src={coin?.image}
          alt={coin?.name}
          height='90px'
          style={{ marginBottom: '10' }}
        />

        <span>

          {coin?.symbol}



          &nbsp;




          <span style={{color: profit > 0 ? 'green' : 'red'  }} 
          >

            {profit && '+'} {coin?.price_change_percentage_24h?.toFixed(2)}%


          </span>

        </span>

        <span>




          {symbol} {numberWithCommas(coin?.current_price.toFixed(2))}
        </span>

      </Link>

    )
  })

  const responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 4,
    }
  };






  return (
    <div style={{ height: '600px', display: 'flex', alignItems: 'center' }}>
      <AliceCarousel
        mouseTracking

        infinite
        autoPlayInterval={1000}
        animationDuration={1500}

        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        autoPlay

        items={items}


      />

    </div>
  )
}

export default Carousel
