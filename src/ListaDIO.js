import React from 'react';

import './ListaDIO.css';
import Item from './components/item/index.js';



const ListaDIO = () => {
	
	
	return (
		<>
			<h1>Minha Lista</h1>
			<ul>
				<li>1 <Item /></li>
				<li>2 <Item /></li>
				<li>3 <Item /></li>
			</ul>
		</>
	);
};


export default ListaDIO



