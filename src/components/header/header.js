import React from 'react';
import logo from './logo.png'

const Header = ({decFont, incFont}) => {
	return (
		<header className='navbar navbar-dark bg-dark pt-0 pb-0'>
				<a  href='/' className='navbar-brand'>
					<img src={logo} className=' mb-2' alt='logo'/>
					<span className='ml-1'>Weather</span>
				</a>
			<div>
				<button type="button"  onClick={decFont} className="btn btn-info mr-2">--</button>
				<button type="button" onClick={incFont} className="btn btn-info">+</button>
			</div>
		</header>
	);
};

export default Header;