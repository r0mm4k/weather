import { SET_LOADING, SET_ERROR } from '../constants';

const initialState = {
	loading: false,
	error: false
};

const statusReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_LOADING:
			return {
				...state,
				error: false,
				loading: action.status
			};
		case SET_ERROR:
			return {
				...state,
				error: action.err,
				loading: false,
			};
		default:
			return state;
	}
};

export default statusReducer;
