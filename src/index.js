import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import ErrorBoundry from './containers/error-boundry';
import store from './redux/store';

import App from './components/app/app';

ReactDOM.render(
	<Provider store={store}>
		<ErrorBoundry>
			<App/>
		</ErrorBoundry>
	</Provider>,
	document.querySelector('#root'));
