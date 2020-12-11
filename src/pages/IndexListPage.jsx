import React, {useState, useEffect} from 'react'



export default function IndexListPage() {
    const [indexList, setIndexList] = useState(null)

    useEffect(() => {
        const url = 'https://market-data-collector.firebaseio.com/market-collector/indexes/se.json'
        fetch(url)
        .then(res => res.json())
        .then(data => setIndexList(data))
    }, [])

    
    return (
        <div>
            <h3>Index list page</h3>
            {!indexList && <p>Loading...</p>}
            <div>
            {indexList && Object.entries(indexList).map(indexItem => {
                const key = indexItem[0]
                const value = indexItem[1]
                console.log(value.name);
                return <p key={key}>{value.name}</p>
            })}
            </div>
        </div>
    )
}
