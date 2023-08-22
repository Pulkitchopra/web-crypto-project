import React from 'react'

const Button = ({ children, selected, onClick }) => {
  return (
    
    <span onClick={onClick} style={{ padding: '15px', paddingLeft: '10px', paddingRight: '16px', border: 'none', cursor: 'pointer', backgroundColor: selected ? 'blue' : 'white', color: selected ? 'white' : 'black', borderRadius: '9px', margin: '16px'    }}  >


    {children}
    </span>
    
  )
}

export default Button
