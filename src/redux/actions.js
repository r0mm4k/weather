import {
	CHANGE_SEARCH_DATA, ADD_WEATHER, ADD_SEARCH_HISTORY, SET_LOADING, SET_ERROR,
	CLOSE_WEATHER, ADD_ZOOM, OUT_ZOOM, SET_MARK_FUNC, SET_MARK_NEURON
} from './constants';

import { apiService } from '../services/api';

import { setLocalData } from '../utils/local-history';
import { searchDublicate } from '../utils/search-dublicate';
import { normalizeCity } from '../utils/normalize-city';
import { fuzzySearch } from '../utils/fuzzy-search';

//action-creators
export const onSearchData = (searchData) => ({type: CHANGE_SEARCH_DATA, searchData});
export const addSearchWeather = (weather) => ({type: ADD_WEATHER, weather});
export const addSearchHistory = (searchHistory) => ({type: ADD_SEARCH_HISTORY, searchHistory});
export const setLoading = (status) => ({type: SET_LOADING, status});
export const setError = (err) => ({type: SET_ERROR, err});
export const closeWeather = (id) => ({type: CLOSE_WEATHER, id});
export const addZoom = () => ({type: ADD_ZOOM});
export const outZoom = () => ({type: OUT_ZOOM});
export const setMarkFunc = () => ({type: SET_MARK_FUNC});
export const setMarkNeuron = () => ({type: SET_MARK_NEURON});

//thunk-creators
export const submitForm = (city) => (dispatch, getState) => {
	const normCity = normalizeCity(city);

	if (normCity) {
		dispatch(setLoading(true));
		dispatch(onSearchData(''));

		const {settings: {markFunc}, searchData: {searchHistory}} = getState();

		if (markFunc) {
			apiService.getWeather(fuzzySearch(normCity, searchHistory))
				.then((weather) => {
					dispatch(addSearchWeather(weather));
					dispatch(setLoading(false));
					const {searchData: {searchHistory}} = getState();
					const hasDublicate = searchDublicate(fuzzySearch(normCity, searchHistory), searchHistory);
					if (!hasDublicate) {
						setLocalData(normCity, 'searchHistory');
						dispatch(addSearchHistory([normCity]));
					}
				})
				.catch((err) => {
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
				});
		} else {
			apiService.getWeather(normCity)
				.then((weather) => {
					dispatch(addSearchWeather(weather));
					dispatch(setLoading(false));
					const {searchData: {searchHistory}} = getState();
					const hasDublicate = searchDublicate(normCity, searchHistory);
					if (!hasDublicate) {
						setLocalData(normCity, 'searchHistory');
						dispatch(addSearchHistory([normCity]));
					}
				})
				.catch((err) => {
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
				});
		}
	}

};

export const changeSearchData = (searchData) => (dispatch) => {
	dispatch(setError(false));
	dispatch(onSearchData(searchData))
};