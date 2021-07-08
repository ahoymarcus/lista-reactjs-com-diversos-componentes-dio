import { useState } from 'react';
import './Card.css';


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
				
				<button 
					class="card-button" 
					onClick={plus}
				>
					Plus
				</button>
				
				<button 
					class="card-button" 
					onClick={minus}
				>
					Minus
				</button>
				
				<p className="card-text">{value}</p>
			</div>
		</div>
	);
};


export default Card


