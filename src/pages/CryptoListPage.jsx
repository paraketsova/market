import React, {useEffect, useState} from 'react'
import CryptoItem from '../components/CryptoItem';

export default function CryptoListPage() {
    const [cryptoList, setCryptoList] = useState(null);

    useEffect( () => {
        const url= 'https://market-data-collector.firebaseio.com/market-collector/crypto/usd.json';
        fetch(url)
        .then(res => res.json())
        .then(data => setCryptoList(data));
    }, []);
    
 
    return (
        <div className='container'>
            <h3>Crypto list page</h3>
            {!cryptoList && <p>Loading</p>}
            
            <div className='row'>
                {cryptoList && Object.entries(cryptoList).map((cryptoList, index) => {
                    const key= index;
                    const crypto = cryptoList[0];
                    return <CryptoItem 
                        key = {key}
                        crypto = {crypto}
                    />
                })}
            </div>
        </div>
    )
}
