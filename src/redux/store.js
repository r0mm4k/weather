import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import searchReducer from './reducers/searchReducer';
import statusReducer from './reducers/statusReducer';
import weathersReducer from './reducers/weathersReducer';

const rootReducer = combineReducers({
	searchData: searchReducer,
	status: statusReducer,
	weathers: weathersReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
