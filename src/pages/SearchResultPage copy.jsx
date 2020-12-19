import React, {useEffect, useState} from 'react';
import SearchForm from '../components/SearchForm';
/* import SearchResult from '../components/SearchResult'; */

export default function SearchResultPage(props) {
  const [searchData, setSearchData] = useState(null);

  // TODO - Fetch different url depending on input.value.
  function searchDataFetch(inputSearch) {
    let url;
    const id = props.match.params.id;
    const market = props.match.params.market;
    const stock = props.match.params.stock;
    const searchName = props.inputSearch.current.value;
    console.log(searchName + id + market + stock);
  }

  useEffect( () => {
    
    
    
    const urlSearch = "https://market-data-collector.firebaseio.com/market-collector/crypto/usd.json"
    fetch(urlSearch)
    .then(res => res.json())
    .then(data => setSearchData(data))
  }, [] );



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