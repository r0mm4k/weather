import React from 'react';

const InformationIndicator = () => {
	return (
		<div className='alert alert-info'>
			<div className='text-center font-weight-bold'>Please, enter a city!</div>
			<ol>
				<u>How it works:</u>
				<li>
					Put the city's name, comma, 2-letter country code (ISO3166).
				</li>
				<li>
					The order is important - the first is city name then comma then country. Example - London, GB or New York,
					US.
				</li>
			</ol>
		</div>
	);
};

export default InformationIndicator;
