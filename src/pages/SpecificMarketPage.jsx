import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MarketListItem from '../components/MarketListItem';

export default function SpecificMarketPage(props) {
	const [specificMarket, setSpecificMarket] = useState(null);

	function specificMarketFetch() {
		const id = props.match.params.id;
		const url = `https://market-data-collector.firebaseio.com/market-collector/markets/${id}.json`;
		fetch(url)
			.then((res) => res.json())
			.then((data) => setSpecificMarket(Object.entries(data)));
	}

	useEffect(specificMarketFetch, []);
	return (
		<div>
			{!specificMarket && <h3>Loading...</h3>}
			{specificMarket && (
				<>
					<h3>{specificMarket[0][1].market}</h3>
					{specificMarket.map((stock) => (
						<MarketListItem
						key={stock[0]}
						listItemData={stock}
						stock
						>{stock[1].name}</MarketListItem>
					))}
				</>
			)}
		</div>
	);
}
