import React from 'react';
import { Link } from 'react-router-dom';
export default function ListItem({ children, listItemData, type }) {
	const id = listItemData[0];
	const market = listItemData[1].market;
	return (
		<>
			{type === 'indexes' && (
				<Link to={`indexes/${id}`}>
					<li>{children}</li>
				</Link>
			)}

			{type === 'stock' && (
				<Link to={`stock/${market}/${id}`}>
					<li>{children}</li>
				</Link>
			)}

			{type === 'markets' && (
				<Link to={`market/${id}`}>
					<li>{children}</li>
				</Link>
			)}

			{ type === 'currencies' && (
				<Link to={`currencies/${id}`}>
					<li>{children}</li>
				</Link>
			)}
			{type === 'crypto' && (
				<Link to={`crypto/${id}`}>
					<li>{children}</li>
				</Link>
			)}
		</>
	);
}
