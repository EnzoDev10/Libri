import { NavBar } from '../NavBar/NavBar';

import './footer.css';

export const Footer = () => {
	return (
		<footer>
			<div className='wrapper'>
				<NavBar variant='footer' className='footerNav' />
			</div>
		</footer>
	);
};
