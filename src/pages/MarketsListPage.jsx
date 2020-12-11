import React, { useEffect, useState } from 'react';
import MarketListItem from '../components/MarketListItem';

export default function MarketsListPage() {
	const [marketList, setMarketList] = useState(null);

	function marketFetch() {
		const url =
			'https://market-data-collector.firebaseio.com/market-collector/markets.json';

		fetch(url)
			.then((res) => res.json())
			.then((data) => setMarketList(data));
	}

	useEffect(marketFetch, []);

	return (
		<div>
			<h3>Market list page</h3>

			{!marketList && <h3>Loading...</h3>}
			<ul>
				{marketList &&
					Object.entries(marketList).map((marketListItem) => (
						<MarketListItem
							key={marketListItem[0]}
							listItemData={marketListItem}>
							{marketListItem[0]}
						</MarketListItem>
					))}
			</ul>
		</div>
	);
}
