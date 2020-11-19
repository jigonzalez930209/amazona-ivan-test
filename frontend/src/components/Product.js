import React from 'react'
import Rating from './Rating'

export default function Product(props) {
  const { products } = props
  return (
    <div key={products._id} className='cart'>
      <a href={`/product/${products._id}`}>
        <img
          className='medium'
          src={products.image}
          alt={products.productName}
        />
      </a>
      <div className='card-body'>
        <a href='product.html'>
          <h2>{products.productName}</h2>
        </a>
        <Rating raitigs={products.raiting} numbReview={ products.numbReview} />
        <div className='price'>{products.price}</div>
      </div>
    </div>
  )
}
