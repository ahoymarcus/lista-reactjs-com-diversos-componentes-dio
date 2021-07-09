import { useState } from 'react';

import './Card.css';
import Button from '../button';



const Card = () => {
	const [value, setValue] = useState(0);
	
	function plus() {
		setValue(value => value + 1);
	};
	function minus() {
		setValue(value => value - 1);
	};
	
	
	return (
		<div className="card">
			<div className="card-header">
				Featured
			</div>
			<div className="card-body">
				<h5 className="card-title">Card Title</h5>
				
				<div className="button-container">
					<Button 
						onClick={plus}
					>
						Plus
					</Button>
					<Button 
						onClick={minus}
					>
						Minus
					</Button>
				</div>
				
				<p className="card-text">{value}</p>
			</div>
		</div>
	);
};


export default Card


