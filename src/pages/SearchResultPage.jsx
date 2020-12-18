import React, {useEffect, useState} from 'react';
/* import SearchForm from '../components/SearchForm';
import SearchResult from '../components/SearchResult'; */

export default function SearchResultPage() {
  const [searchData, setSearchData] = useState(null);

  useEffect( () => {
    
    // TODO - Fetch different url depending on input.value.
    
    const urlSearch = "https://market-data-collector.firebaseio.com/market-collector/crypto/usd.json"
    fetch(urlSearch)
    .then(res => res.json())
    .then(data => setSearchData(data))
  }, [] )



  return (
    <div>
      <>RESULTS OF SEARCHING:</>
      {!searchData && <p>Loading</p>}
      {searchData && Object.entries(searchData).map(searchItem => {
        const key = searchItem[0]
        const value = searchItem[1]
        console.log(value)
        return <p key={key}>{value.name}</p>  
      })}
    </div>
    
  )
}