import React from 'react';

import SearchContainer from '../../containers/search-container';
import WeatherListContainer from '../../containers/weather-list-container';

const App = () => {
	return (
		<div className='container mt-3 mb-3'>
			<SearchContainer/>
			<WeatherListContainer/>
		</div>);
};

export default App;
