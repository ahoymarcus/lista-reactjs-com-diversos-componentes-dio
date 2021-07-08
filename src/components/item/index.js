const Item = ( {children, item} ) => {
	
	
	return (
		<>
			<a href="/" className="hello-lista">
				{children} 
			</a> 
			- {item}
		</>
	);
};


export default Item

