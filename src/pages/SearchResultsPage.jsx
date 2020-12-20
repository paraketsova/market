import React, {useEffect, useState} from 'react';
import SearchResultsList from '../components/SearchResultsList';

const filterList = (data, query) => data.filter(item => {
  const needle = query.toLowerCase();
  const haystack = item[1].name.toLowerCase();
  return haystack.includes(needle);
});

export default function SearchResultPage({ location }) {
  const [list, setList] = useState(null);

  const query = decodeURIComponent(location.search.slice(3));

  const url = 'https://market-data-collector.firebaseio.com/market-collector/crypto/usd.json';

  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(data => {
      const list = Object.entries(data);
      const filteredList = filterList(list, query);
      setList(filteredList);
    });
  }, [query, url])

  return (
  
    <div>
      {!list && <h3>Loading...</h3>}
			{list && 
        <SearchResultsList list={list}/>
      }
    </div>
  )
}