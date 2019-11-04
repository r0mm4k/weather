import { ADD_ZOOM, OUT_ZOOM, SET_MARK_NEURON, SET_MARK_FUNC } from '../constants';

const initialState = {
	zoom: JSON.parse(localStorage.getItem('zoom')) || 1,
	markFunc: JSON.parse(localStorage.getItem('func')) || false,
	markNeuron: JSON.parse(localStorage.getItem('neuron')) || false
};

const settingsReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_ZOOM:
			return {
				...state,
				zoom: state.zoom+0.25
			};
		case OUT_ZOOM:
			return {
				...state,
				zoom: state.zoom-0.25
			};
		case SET_MARK_FUNC:
			return {
				...state,
				markFunc: action.status
			};
		case SET_MARK_NEURON:
			return {
				...state,
				markNeuron: action.status
			};
		default:
			return state;
	}
};

export default settingsReducer;
