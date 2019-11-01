import React from 'react';
import { connect } from 'react-redux';

import WeatherList from '../components/weather-list/weather-list';
import Spinner from '../components/spinner/spinner';
import ErrorIndicator from '../components/error-indicator/error-indicator';

const WeatherListContainer = ({weathers, loading, error}) => {
	const hasData = !(loading || error);

	const errorMessage = error ? <ErrorIndicator error={error}/> : null;
	const spinner = loading ? <Spinner/> : null;
	const content = hasData ? <WeatherList weathers={weathers}/> : null;

	return (
		<>
			{errorMessage}
			{spinner}
			{content}
		</>
	);
};

const mapStateToProps = ({weathers, loading, error}) => ({weathers, loading, error});

export default connect(mapStateToProps)(WeatherListContainer);