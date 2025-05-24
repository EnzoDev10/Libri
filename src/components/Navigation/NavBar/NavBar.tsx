import { Link } from 'react-router-dom';
import { Button } from '../../index';

interface Prop {
	variant: 'headerNav' | 'footerNav';
}

export const NavBar = ({ variant }: Prop) => {
	return (
		<nav className={variant}>
			<ul>
				<li>
					<Link to='/' className='hover'>
						Inicio
					</Link>
				</li>

				<li>
					<Link to='/' className='hover'>
						Contacto
					</Link>
				</li>
				<li>
					<Link to='/carrito' className='hover'>
						<Button className='border' Icon='cart' Label='0' />
					</Link>
				</li>
			</ul>
		</nav>
	);
};
