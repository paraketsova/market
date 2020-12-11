import React, {useEffect, useState} from 'react'

export default function CryptoDetailsPage(props) {
    const [cryptoItem, setCryptoItem] = useState(null);
    
    useEffect( () => {
        const id = props.match.params.id;
        const url = `https://market-data-collector.firebaseio.com/market-collector/crypto/usd/${id}.json`;
        fetch(url)
        .then(res => res.json())
        .then(data => setCryptoItem(data))
    }, [] );

    return (
        <div class='container'>
            <div class='row'>
                <p>Product Details Page</p>
            {!cryptoItem && <p>Loading</p>}
            {cryptoItem && (
              <>
                <h3>{cryptoItem.name}</h3>
                <p>Price: {cryptoItem.price}</p>
                <p>Market: {cryptoItem.market}</p>
                <p>Source:{cryptoItem.source}</p>
                <p>Today: {cryptoItem.today}</p>
              </>
            )}
            </div>
        </div>
    )
}
