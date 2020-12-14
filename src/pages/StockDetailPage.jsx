import React, { useEffect, useState } from 'react';

export default function StockDetailPage(props) {
	const [stockDetails, setStockDetails] = useState(null);

	function stockFetch() {
		const market = props.match.params.market;
		const stock = props.match.params.stock;

		const url = `https://market-data-collector.firebaseio.com/market-collector/markets/${market}/${stock}.json`;

		fetch(url)
			.then((res) => res.json())
			.then((data) => setStockDetails(data));
	}

	useEffect(stockFetch, []);

	return (
		<div>
			{!stockDetails && <h2>Loading...</h2>}
			{stockDetails && (
				<>
					<h2>{stockDetails.name}</h2>
					<p>price: {stockDetails.price} spänn</p>
					<h4>Changes:</h4>
					<p>Today: {stockDetails.today} spänn</p>
					<p>7 Days: {stockDetails.w1} spänn</p>
					<p>30 Days: {stockDetails.mtd} spänn</p>
					<p>One Year: {stockDetails.ytd} spänn</p>
					<p>3 Years: {stockDetails.y3} spänn</p>
					<p>5 Years: {stockDetails.y5} spänn</p>
				</>
			)}
		</div>
	);
}
