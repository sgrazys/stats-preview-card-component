import Description from './Description';
import ListItem from './ListItem';

function Content({ stats }) {
	return (
		<div className='content'>
			<h1 className='content__heading'>
				Get <span>insights</span> that help your business grow.
			</h1>
			<Description
				content={
					'Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.'
				}
			/>
			<ul className='list'>
				{stats.map((s) => (
					<ListItem
						key={s.title}
						title={s.title}
						content={s.content}
					/>
				))}
			</ul>
		</div>
	);
}

export default Content;
