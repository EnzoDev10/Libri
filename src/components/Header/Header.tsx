import { CartBtn } from '../index';
import './header.css';

export const Header = () => {
	return (
		<header>
			<div className='wrapper'>
				<span className='logo'>Libri.</span>
				<nav>
					<ul>
						<li>
							<a href='#' className='hover'>
								Inicio
							</a>
						</li>
						<li>
							<a href='#' className='hover'>
								Productos
							</a>
						</li>
						<li>
							<a href='#' className='hover'>
								Contacto
							</a>
						</li>
						<li>
							<CartBtn />
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};
