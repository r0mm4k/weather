import {
	CHANGE_SEARCH_DATA, ADD_WEATHER, ADD_SEARCH_HISTORY, SET_LOADING, SET_ERROR,
	CLOSE_WEATHER, ADD_ZOOM, OUT_ZOOM, SET_MARK_FUNC, SET_MARK_NEURON
} from './constants';

import { apiService } from '../services/api';

import { setLocalData } from '../utils/local-history';
import { searchDublicate } from '../utils/search-dublicate';
import { normalizeCity } from '../utils/normalize-city';
import { fuzzySearch } from '../utils/fuzzy-search';
import network from '../utils/neural/neural';

//action-creators
export const onSearchData = (searchData) => ({type: CHANGE_SEARCH_DATA, searchData});
export const addSearchWeather = (weather) => ({type: ADD_WEATHER, weather});
export const addSearchHistory = (searchHistory) => ({type: ADD_SEARCH_HISTORY, searchHistory});
export const setLoading = (status) => ({type: SET_LOADING, status});
export const setError = (err) => ({type: SET_ERROR, err});
export const closeWeather = (id) => ({type: CLOSE_WEATHER, id});
export const addZoom = () => ({type: ADD_ZOOM});
export const outZoom = () => ({type: OUT_ZOOM});
export const setMarkFunc = (status) => ({type: SET_MARK_FUNC, status});
export const setMarkNeuron = (status) => ({type: SET_MARK_NEURON, status});

//thunk-creators
export const submitForm = (city) => (dispatch, getState) => {
	const normCity = normalizeCity(city);

	if (normCity) {
		dispatch(setLoading(true));
		dispatch(onSearchData(''));

		const {settings: {markFunc, markNeuron}, searchData: {searchHistory}} = getState();

		const thenCallback = (weather, city, fuzzy) => {
			dispatch(addSearchWeather(weather));
			dispatch(setLoading(false));
			const {searchData: {searchHistory}} = getState();
			const hasDublicate = searchDublicate(fuzzy || city, searchHistory);
			if (!hasDublicate) {
				setLocalData(fuzzy || city, 'searchHistory');
				dispatch(addSearchHistory([fuzzy || city]));
			}
		};
		const catchCallback = (err) => {
			if (err.response) {
				if (err.response.data.cod === '400') {
					dispatch(setError('Not found! Try again!'));
				} else {
					dispatch(setError(err.response.data.message));
				}
			} else {
				dispatch(setError(err.message));
			}

			dispatch(addSearchWeather([]));
		};

		if (markFunc) {
			const hasFuzzyCity = fuzzySearch(normCity, searchHistory);
			apiService.getWeather(hasFuzzyCity)
				.then((weather) => thenCallback(weather, normCity, hasFuzzyCity))
				.catch((err) => catchCallback(err));
		} else if (markNeuron) {
			const hasNetworkCity = network.run(normCity) || normCity;
			apiService.getWeather(hasNetworkCity)
				.then((weather) => thenCallback(weather, normCity, hasNetworkCity))
				.catch(() => {
					apiService.getWeather(normCity)
						.then((weather) => thenCallback(weather, normCity))
						.catch((err) => catchCallback(err));
				});
		} else {
			apiService.getWeather(normCity)
				.then((weather) => thenCallback(weather, normCity))
				.catch((err) => catchCallback(err));
		}
	}

};

export const changeSearchData = (searchData) => (dispatch) => {
	dispatch(setError(false));
	dispatch(onSearchData(searchData))
};