import React from 'react'

const Button = ({ children, selected, onClick }) => {
  return (
    <div onClick={onClick} >
    {children}
    </div>
  )
}

export default Button
