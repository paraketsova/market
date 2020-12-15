import React, {useState, useEffect} from 'react'
import List from '../components/List';

export default function ListPage(props) {
  const [list, setList] = useState(null);
  let url, title, args;
  
  if(props.crypto){
    args = 'crypto';
    title = 'Crypto';
    url = 'https://market-data-collector.firebaseio.com/market-collector/crypto/usd.json';
  } else if(props.currencies){
    args = 'currencies';
    title = 'Currencies';
    url = 'https://market-data-collector.firebaseio.com/market-collector/currencies/sek.json';
  } else if(props.indexes) {
    args = 'indexes';
    title = 'Indexes';
    url = 'https://market-data-collector.firebaseio.com/market-collector/indexes/se.json'
  } else if(props.markets) {
    args = 'markets';
    title = 'Markets';
    url = 'https://market-data-collector.firebaseio.com/market-collector/markets.json';
  } else {
    const id = props.match.params.id;
    args = 'stock';
    title = 'Stocks';
    url = `https://market-data-collector.firebaseio.com/market-collector/markets/${id}.json`
  }
  
  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(data => setList(Object.entries(data)));
  }, [props])

  return (
    <div>
      {!list && <h3>Loading...</h3>}
			{list && 
        <List list={list} title={title} args={args} markets={props.markets}/>
      }
    </div>
  )
}
