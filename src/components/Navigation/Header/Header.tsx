import './header.css';

import { NavBar } from '../../index';
export const Header = () => {
	return (
		<header>
			<div className='wrapper'>
				<span className='logo'>Libri.</span>
				<NavBar variant='headerNav' />
			</div>
		</header>
	);
};
