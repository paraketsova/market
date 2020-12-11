import React from 'react';
import {Link} from 'react-router-dom'
export default function MarketListItem(props) {
	return(
		<Link to={`markets/${props.listItemData[0]}`}>
			<li>{props.children}</li>
		</Link>
	) 
}
