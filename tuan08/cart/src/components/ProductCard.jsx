import React from 'react'
import './ProductCard.css'

export const ProductCard = ({product, onClick, key}) => {
  console.log(product)
  return (
    <div className='card' key={key}>
        <img className='productImage' src={product.img}/>
        <h2>{product.name}</h2>
        <p>{product.price}</p>
        <button className='btn btn-danger' onClick={(e)=>{onClick(e)}}>Add to cart</button>
    </div>
    
  )
}
