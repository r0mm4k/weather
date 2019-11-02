import React from 'react';
import logo from './logo.svg'

const Header = ({decFont, incFont}) => {
	return (
		<header className='navbar navbar-dark bg-dark pt-0 pb-0'>
				<a  href='/' className='navbar-brand'>
					<img src={logo} width={35} className=' mb-2' alt='logo'/>
					<span className='ml-1'>Weather</span>
				</a>
			<div>
				<button type="button"  onClick={decFont} className="btn btn-outline-success mr-2">--</button>
				<button type="button" onClick={incFont} className="btn btn-outline-success">+</button>
			</div>
		</header>
	);
};

export default Header;