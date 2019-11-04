import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import logo from './logo.svg'

const Header = ({history, location}) => {

	const changeUrl = () => {
		if (location.pathname === '/settings') {
			history.push('/');
		} else {
			history.push('/settings');
		}
	};

	return (
		<header className='navbar navbar-dark bg-dark pt-0 pb-0'>
			<Link to='/' className='navbar-brand'>
				<img src={logo} width={35} className=' mb-2' alt='logo'/>
				<span className='ml-1'>Weather</span>
			</Link>
			<div>
				<button type='button' onClick={changeUrl} className='btn btn-outline-success'>
					<i className='fas fa-cog'/>
				</button>
			</div>
		</header>
	);
};

export default withRouter(Header);

Header.propTypes = {
	history: PropTypes.object,
	location: PropTypes.object
};
