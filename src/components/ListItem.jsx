function ListItem({ title, content }) {
	return (
		<li className='list__item'>
			<p className='list__item-head'>{title}</p>
			<p className='list__item-description'>{content}</p>
		</li>
	);
}

export default ListItem;
