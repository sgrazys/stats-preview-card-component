function Card({ children }) {
	return (
		<main className='card'>
			<div
				role='img'
				className='card__img'
			></div>

			{children}
		</main>
	);
}

export default Card;
