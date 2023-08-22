function Card({ children }) {
	return (
		<main className='card'>
			<div
				role='img'
				alt='Women sitting at a desk and working on a computer'
				className='card__img'
			></div>

			{children}
		</main>
	);
}

export default Card;
