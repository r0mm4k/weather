import React from 'react';

const InformationIndicator = () => {
	return (
		<div className='alert alert-success'>
			<div className='text-center font-weight-bold'>Please, enter a city!</div>
			<ol>
				<u>How it works:</u>
				<li>
					Put only the city's name. Example - London.
				</li>
				<li>
					Put the city's name and 2-letter country code (ISO3166). Example - London, GB.
				</li>
			</ol>
		</div>
	);
};

export default InformationIndicator;
