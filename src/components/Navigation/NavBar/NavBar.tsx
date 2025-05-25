import { Link } from 'react-router-dom';
import { Button } from '../../index';

import { UseCart } from '../../../context/CartContext';
interface Prop {
	variant: 'headerNav' | 'footerNav';
}

export const NavBar = ({ variant }: Prop) => {
	const { cartContent } = UseCart();

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
						<Button className='border' Icon='cart' parentMethod={() => {}}>
							{cartContent.length}
						</Button>
					</Link>
				</li>
			</ul>
		</nav>
	);
};
