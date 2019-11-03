import { CHANGE_SEARCH_DATA, ADD_SEARCH_HISTORY } from '../constants';
import { getLocalData } from '../../utils/local-history';

const initialState = {
	searchData: '',
	searchHistory: [...getLocalData('searchHistory')]
};

const searchReducer = (state = initialState, action) => {
	switch (action.type) {
		case CHANGE_SEARCH_DATA:
			return {
				...state,
				searchData: action.searchData
			};
		case ADD_SEARCH_HISTORY:
			return {
				...state,
				searchHistory: [...action.searchHistory, ...state.searchHistory]
			};
		default:
			return state;
	}
};

export default searchReducer;
