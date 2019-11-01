import React from 'react';

import spinner from './spinner.svg';

import './spinner.css';

const Spinner = () => {
	return <img className='spinner' src={spinner} alt='loading...'/>;
};

export default Spinner;