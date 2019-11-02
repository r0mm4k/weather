import React, { useState } from 'react';

import Header from '../header/header';
import SearchContainer from '../../containers/search-container';
import WeatherListContainer from '../../containers/weather-list-container';

const App = () => {
	let [appFontSize, setAppFontSize] = useState(1);

	const incFont = () => {
		setAppFontSize(appFontSize += 0.25);
	};
	const decFont = () => {
		if (appFontSize > 1) setAppFontSize(appFontSize -= 0.25);
	};

	return (
		<div style={{fontSize: `${appFontSize}rem`}}>
			<Header incFont={incFont} decFont={decFont}/>
			<main className='container mt-3'>
				<SearchContainer/>
				<WeatherListContainer/>
			</main>
		</div>
	);
};

export default App;
