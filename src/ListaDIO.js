import React from 'react';

import './ListaDIO.css';
// A busca do arquivo index.js é automática
import Item from './components/item';



const ListaDIO = () => {
	
	
	return (
		<>
			<h1>Minha Lista</h1>
			<ul>
				<li><Item item="Caderno">Item 1</Item></li>
				<li><Item item="Borracha">Item 2</Item></li>
				<li><Item item="Mochila">Item 3</Item></li>
			</ul>
		</>
	);
};


export default ListaDIO



