import React, { useEffect, useState } from 'react';
import ListItem from '../components/ListItem';

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
						<ListItem
							key={marketListItem[0]}
							listItemData={marketListItem} markets>
							{marketListItem[0]}
						</ListItem>
					))}
			</ul>
		</div>
	);
}
