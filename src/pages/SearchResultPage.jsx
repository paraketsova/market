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
      <>RESULT</>
      {!searchData && <p>Loading</p>}
      {searchData && Object.entries(searchData).map(searchItem => {
        {console.log(searchData)}
        return <p>Search Item</p>  
      })}
    </div>
    
  )
}