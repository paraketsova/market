import React from 'react';
import { Link } from 'react-router-dom';
export default function MarketListItem({ children, listItemData, stock }) {
	console.log(listItemData);
	const id = listItemData[0];
	const market = listItemData[1].market;
	return (
		<>
			{!stock && (
				<Link to={`markets/${id}`}>
					<li>{children}</li>
				</Link>
			)}
			{stock && 
				<Link to={`markets/${market}/${id}`}>
					<li>{children}</li>
				</Link>
			}
		</>
	);
}
