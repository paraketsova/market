import React from 'react';
import { Link } from 'react-router-dom';
export default function ListItem({ children, listItemData, stock, markets }) {
	const id = listItemData[0];
	const market = listItemData[1].market;

	return (
		<>
			{stock && (
				<Link to={`stock/${market}/${id}`}>
					<li>{children}</li>
				</Link>
			)}

			{markets && (
				<Link to={`market/${id}`}>
					<li>{children}</li>
				</Link>
			)}
		</>
	);
}
