import React from 'react';
/* import { Link } from 'react-router-dom'; */

export default function CryptoItem({crypto}) {
  return (
    <div>
        {crypto}
        
      {/* <h3>{crypto.name}</h3>
          {crypto.price}
          {crypto.source}
          {crypto.ticker}
          {crypto.today}
          <Link className='btn btn-secondary btn-block' 
        to={`/products/${product.id}`}
        >
          Go to product
      </Link>
       */}
    </div>
  )
}
