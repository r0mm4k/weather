import { CHANGE_SEARCH_DATA, ADD_WEATHER, ADD_SEARCH_HISTORY, SET_LOADING, SET_ERROR } from './constants';

import { apiService } from '../services/api';

import { setSearchHistory } from '../utils/local-history';
import { searchDublicate } from '../utils/search-dublicate';
import { normalizeCity } from '../utils/normalize-city';

//action-creators
export const changeSearchData = (searchData) => ({type: CHANGE_SEARCH_DATA, searchData});
export const addSearchWeather = (weather) => ({type: ADD_WEATHER, weather});
export const addSearchHistory = (searchHistory) => ({type: ADD_SEARCH_HISTORY, searchHistory});
export const setLoading = (status) => ({type: SET_LOADING, status});
export const setError = (err) => ({type: SET_ERROR, err});

//thunk-creators
export const submitForm = (city) => (dispatch, getState) => {
	const normCity = normalizeCity(city);

	if (normCity) {
		dispatch(setLoading(true));
		apiService.getWeather(normCity)
			.then((weather) => {
				dispatch(addSearchWeather(weather));
				const hasDublicate = searchDublicate(normCity, getState().searchHistory);
				if (!hasDublicate) {
					setSearchHistory(normCity);
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
			});
	}
};