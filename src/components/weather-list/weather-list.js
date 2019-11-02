import React from 'react';

import './weather-list.css'

const WeatherItem = ({weather}) => {
	const {name, country, temp, humidity, pressure, speed, clouds, description, time, img, flag} = weather;
	return (
		<article className='card text-center mb-3'>
			<div className='card-header font-weight-bold'>
				{`${name} - ${country}`} <img src={flag} className='flag' alt='flag-country'/>
			</div>
			<div className='card-body'>
				<h4 className='card-title'><img src={img} className='logo' alt='logo-weather'/></h4>
				<h2 className='card-text temp'>
					{temp}&deg;
				</h2>
				<p className='text-center mt-4'>
					<span className='p-3 info'>Wind: {speed} (m/s)</span>
					<span className='p-3 info'>Pressure: {pressure} (hPa)</span>
				</p>
				<p className='text-center mb-4'>
					<span className='p-3 info'>Humidity: {humidity} (%)</span>
					<span className='p-3 info'>Cloudiness: {clouds} (%)</span>
				</p>
				<span className='badge badge-primary span'>{description}</span>
			</div>
			<div className='card-footer text-muted mt-3'>
				{time}
			</div>
		</article>
	);
};

const WeatherList = ({weathers}) => {
	const content = weathers.map(({id, ...weather}) => <WeatherItem key={id} weather={weather}/>);
	return (
		<section>
			{content}
		</section>
	);
};

export default WeatherList;
