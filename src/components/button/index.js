import './Button.css';



const Button = ( {children, onClick} ) => {
	
	
	return (
		<button 
			class="card-button" 
			onClick={onClick}
		>
			{children}
		</button>
	);
};


export default Button