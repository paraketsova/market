import React, {useState, useEffect} from 'react'
import Details from '../components/Details'

export default function DetailPage(props) {
    const [detailData, setDetailData] = useState(null);
    
    function dataFetch(){
        let url;
        const id = props.match.params.id;
        const market = props.match.params.market;
        const stock = props.match.params.stock;
        const pathname = props.history.location.pathname;

        if (pathname.includes('crypto')){
            url = `https://market-data-collector.firebaseio.com/market-collector/crypto/usd/${id}.json`
        } else if (pathname.includes('currencies')){
            url = `https://market-data-collector.firebaseio.com/market-collector/currencies/sek/${id}.json`
        } else if (pathname.includes('indexes')){
            url = `https://market-data-collector.firebaseio.com/market-collector/indexes/se/${id}.json`
        } else if (pathname.includes('stock')){
            url = `https://market-data-collector.firebaseio.com/market-collector/markets/${market}/${stock}.json`
        }
        
        fetch(url)
        .then(resp => resp.json())
        .then(data => setDetailData(data))
    }

    useEffect(dataFetch,[]);
    return (
        <div>
            {detailData && <Details itemData={detailData}/>}
        </div>
    )
}
