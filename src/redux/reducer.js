import { CHANGE_SEARCH_DATA, ADD_WEATHER, ADD_SEARCH_HISTORY, SET_LOADING, SET_ERROR, CLOSE_WEATHER} from './constants';
import { getSearchHistory } from '../utils/local-history';

const initialState = {
	searchData: '',
	searchHistory: [...getSearchHistory()],
	weathers: [],
	loading: false,
	error: false
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case CHANGE_SEARCH_DATA:
			return {
				...state,
				error: false,
				searchData: action.searchData
			};
		case ADD_SEARCH_HISTORY:
			return {
				...state,
				searchHistory: [...action.searchHistory, ...state.searchHistory]
			};
		case ADD_WEATHER:
			return {
				...state,
				searchData: '',
				loading: false,
				error: false,
				weathers: action.weather
			};
		case CLOSE_WEATHER:
			return {
				...state,
				weathers: state.weathers.filter(({id})=>id!==action.id)
			};
		case SET_LOADING:
			return {
				...state,
				searchData: '',
				error: false,
				loading: action.status
			};
		case SET_ERROR:
			return {
				...state,
				error: action.err,
				loading: false,
				searchData: '',
				weathers: []
			};
		default:
			return state;
	}
};

export default reducer;
