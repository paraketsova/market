import React, {useState, useEffect} from 'react'
import Details from '../components/Details'

export default function DetailPageCurrency(props) {
    const [postData, setPostData] = useState(null)
    const id = props.match.params.id

    useEffect(()=>{
        const url = `https://market-data-collector.firebaseio.com/market-collector/currencies/sek/${id}.json`

        fetch(url)
        .then(response => response.json())
        .then(data => setPostData(data))
    },[id])
    return (
        <div>
            {!postData && <p>Loading . . .</p>}
            {postData &&
                <Details itemData={postData}/>                
            }
        </div>
    )
}
