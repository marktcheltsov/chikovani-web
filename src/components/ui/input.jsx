import React from 'react'
import '../../styles/components/ui/input.css'

const Input = ({icon: Icon, placeholder, handle, value, type}) => {
  return (
    <div className='input__container'>
        <Icon size={20} color="#27272a" strokeWidth={2} />
        <input className='input' type={type ? type : 'text'} placeholder={placeholder} value={value} onChange={handle}/>
    </div>
  )
}

export default Input