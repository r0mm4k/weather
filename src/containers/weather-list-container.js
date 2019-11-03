import React from 'react';
import { connect } from 'react-redux';

import * as action from '../redux/actions';

import WeatherList from '../components/weather-list/weather-list';
import Spinner from '../components/spinner/spinner';
import ErrorIndicator from '../components/error-indicator/error-indicator';

const WeatherListContainer = ({weathers, loading, error, closeWeather}) => {
	const hasData = !(loading || error);
	const errorMessage = error ? <ErrorIndicator error={error}/> : null;
	const spinner = loading ? <Spinner/> : null;
	const content = hasData ? <WeatherList weathers={weathers} onClose={closeWeather}/> : null;

	return (
		<>
			{errorMessage}
			{spinner}
			{content}
		</>
	);
};

const mapStateToProps = ({weathers, status}) => ({
	weathers,
	loading:status.loading,
	error: status.error
});

export default connect(mapStateToProps, action)(WeatherListContainer);