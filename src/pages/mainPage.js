import React from 'react';
import SearchContainer from '../containers/search-container';
import WeatherListContainer from '../containers/weather-list-container';

const MainPage = () => {
	return (
		<main className='container mt-3'>
			<SearchContainer/>
			<WeatherListContainer/>
		</main>
	);
};

export default MainPage;