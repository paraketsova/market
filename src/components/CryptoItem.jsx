import React from 'react';
import { Link } from 'react-router-dom';

export default function CryptoItem({crypto}) {
  return (
    <div>
        <Link className='btn btn-secondary btn-block' 
            to={`crypto/${crypto}`}
        >
            {crypto}
        </Link>
    </div>
  )
}
