import { ADD_WEATHER, CLOSE_WEATHER} from '../constants';

const weathersReducer = (state = [], action) => {
	switch (action.type) {
		case ADD_WEATHER:
			return action.weather;
		case CLOSE_WEATHER:
			return state.filter(({id})=>id!==action.id);
		default:
			return state;
	}
};

export default weathersReducer;
