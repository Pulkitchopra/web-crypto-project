import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { CryptoState } from '../Context';

import {HistoricalChart} from '../config/api'
import { LinearProgress, Box } from '@mui/material';


import { Line } from 'react-chartjs-2';
import {chartDays} from '../config/data'
import Button from './Button';


import Chart from 'chart.js/auto'



const CoinInfoPage = ({coin}) => {
  const [historicData, setHistoricData] = useState();
  const [days, setDays] = useState(1);

  const { currency } = CryptoState();

  const [flag, setFlag] = useState(false);





  const fetchHistoricData = async () => {

      const {data} = await axios.get(HistoricalChart(coin.id, days, currency ));
      
      setFlag(true);

      setHistoricData(data.prices);
    
    
  }
  
  useEffect(() => {
    fetchHistoricData();
  }, [days]);

  return (  
    <Box sx={{ display: 'flex', width: { md: '75%', sm: '100%', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: '15px' }  }} >




    {/* <div style={{ display: 'flex', width: '100%', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: '15px'}}> */}

    { 


      !historicData| flag === false ? (



        <LinearProgress>

        </LinearProgress>
        
      ) : (

        <>

        <Line 




        data={{  
 
          labels: historicData.map((coin) => {




            let date = new Date(coin[0]);


            let time = date.getHours() > 12 ? `${date.getHours() -12 }: ${date.getMinutes()} PM `
            : `${date.getHours()}: ${date.getMinutes()} AM `;

            return (


              days === 1 ? time : date.toLocaleDateString()
            )

          }),
          datasets: [




            {
              data: historicData.map((coin) => coin[1]),
              label: `Price (Past ${days} Days ) in ${currency}`,

            }
          ]
        }}
        
        // options={{

        //   elements: {





        //     point: {
        //       radius: 1
        //     }
        //   }
        // }}
        
        />


   
    <div style={{ display: 'flex', width: '100%', justifyContent: 'center', border: 'none', 
    marginTop: '15px' }}>







    { chartDays.map((day) => (
      

    








      <Button





      key={ day.value }


      onClick={() => { setDays( day.value ); setFlag(false) } }





      selected = { day.value === days }
      >

        { day.label }
      </Button> 

    )
     ) }
    </div>






        </>
      )

    }


    {/* </div> */}



    </Box>
  )
}




export default CoinInfoPage
