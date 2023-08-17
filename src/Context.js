import React, {createContext, useContext, useState, useEffect} from 'react'

const Crypto = createContext()

const Context = ({children}) => {



  const [currency, setCurrency] = useState('INR');
  const [currencySymbol, setCurrencySymbol] = useState('₹');
  useEffect(() => {
    if(currency === 'INR') {
      setCurrencySymbol('₹');
    }
    else {


      setCurrencySymbol('$');
    }



  }, [currency]);

  return (




    <Crypto.Provider value={{currency, currencySymbol, setCurrency }} >
        {children}
    </Crypto.Provider>
   
  )
}

export default Context

export const CryptoState = () => {

  return useContext(Crypto)
}
