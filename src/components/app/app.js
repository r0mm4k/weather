import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from '../header/header';
import SettingsPage from '../../pages/settingsPage';
import MainPage from '../../pages/mainPage';

const App = ({zoom}) => {
	return (
		<div style={{fontSize: `${zoom}rem`}}>
			<Header/>
			<Switch>
				<Route path='/' exact component={MainPage}/>
				<Route path='/settings' component={SettingsPage}/>
				<Route render={() => <Redirect to='/'/>}/>
			</Switch>
		</div>
	);
};

const mapStateToProps = ({settings: {zoom}}) => ({zoom});

export default connect(mapStateToProps)(App);
