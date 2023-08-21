import Card from './components/Card';
import Content from './components/Content';

import './sass/App.scss';

const stats = [
	{ title: '10k+', content: 'companies' },
	{ title: '314', content: 'templates' },
	{ title: '12M+', content: 'queries' },
];

function App() {
	return (
		<Card>
			<Content stats={stats} />
		</Card>
	);
}

export default App;
