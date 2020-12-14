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
        <div>
            <h3>Crypto list page</h3>
            {!cryptoList && <p>Loading</p>}
            
            <div >
                {cryptoList && Object.entries(cryptoList).map((cryptoListItem) => {
                   
                    const key = cryptoListItem[0];
                    const crypto = cryptoListItem[0];
                    return <CryptoItem 
                        key = {key}
                        crypto = {crypto}
                    />
                })}
            </div>
        </div>
    )
}
