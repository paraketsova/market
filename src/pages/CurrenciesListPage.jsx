import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { LinkListStyled } from '../components/LinkListStyled';

export default function CurrenciesListPage() {
const [currencies, setCurrencies] = useState(null)

useEffect(() =>{
    const url = "https://market-data-collector.firebaseio.com/market-collector/currencies/sek.json"

    fetch(url)
    .then(response => response.json())
    .then(data => setCurrencies(data))
},[])

    return (
        <div>
            <h3>Currencies list page</h3>
            {!currencies && <p>Loading . . .</p>}
            <LinkListStyled>
            {currencies && Object.entries(currencies).map(item =>{
                const id = item[0]
                const data = item[1]
                return  <Link key={id} to={`/currencies/${id}`}>
                            <li>{data.name}</li>
                        </Link>
            })}
            </LinkListStyled>
        </div>
    )
}