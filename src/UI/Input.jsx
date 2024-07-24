import React from 'react'

const Input = ({label,id,...props}) => {
  return <p className='control'>
    <label htmlFor={id}>{label}</label>
    <input name={id} id={id} {...props} required/> 
    {/* type will be set via spreaded props */}
  </p>
}

export default Input