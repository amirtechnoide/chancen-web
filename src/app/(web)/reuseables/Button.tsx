
import React from 'react'

const Button = ({label,className}:{label:string,className:string}) => {
  return (
  <button className={` ${className}`}>{label}</button>
)
}

export default Button