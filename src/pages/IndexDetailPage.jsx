import React, {useState, useEffect} from 'react'
import IndexItem from '../components/IndexItem'

export default function IndexDetailPage(props) {
    const [indexData, setIndexData] = useState(null)
    useEffect(() => {
        const id = props.match.params.id
        const url = `https://market-data-collector.firebaseio.com/market-collector/indexes/se/${id}.json`
        fetch(url)
        .then(response => response.json())
        .then(data => setIndexData(data))
    })
    return (
        <div>
            {!indexData && <p>Loading...</p>}
            {indexData && 
                <IndexItem indexData={indexData}/>}
        </div>
    )
}
