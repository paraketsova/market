import React, {useState, useEffect} from 'react'
import {LinkListStyled} from '../components/LinkListStyled'
import ListItem from '../components/ListItem';


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
            <LinkListStyled>
            {indexList && Object.entries(indexList).map((indexItem) => (                
                <ListItem
                    key={indexItem[0]}
                    listItemData={indexItem} index>
                    {indexItem[0]}
                </ListItem>                
            ))}
            </LinkListStyled>
        </div>
    )
}
