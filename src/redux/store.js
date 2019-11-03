import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import searchReducer from './reducers/searchReducer';
import statusReducer from './reducers/statusReducer';
import weathersReducer from './reducers/weathersReducer';
import settingsReducer from './reducers/settingsReducer';

const rootReducer = combineReducers({
	searchData: searchReducer,
	status: statusReducer,
	weathers: weathersReducer,
	settings: settingsReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

console.log(store.getState());

export default store;
