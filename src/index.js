import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import ErrorBoundry from './containers/error-boundry';
import store from './redux/store';

import App from './components/app/app';

ReactDOM.render(
	<Provider store={store}>
		<ErrorBoundry>
			<Router>
				<App/>
			</Router>
		</ErrorBoundry>
	</Provider>,
	document.querySelector('#root'));
