import React from 'react'
import "./Items.css"

const Items = ({props}) => {
  return (
    <div className='item'>
        <img src={props.image} width={200} height={200} />
        <h2>{props.title}</h2>
        <h3>{props.price}</h3>
        <button className='btn'>Add to Cart</button>
     
    </div>
  )
}

export default Items