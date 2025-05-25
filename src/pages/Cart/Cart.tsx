import { Header, Books, Button } from '../../components';

import { UseCart } from '../../context/CartContext';

import './cart.css';

export const Cart = () => {
	const { cartContent, emptyCart } = UseCart();
	return (
		<>
			<Header />
			<main className='cart'>
				<div className='wrapper'>
					<section className='products-section'>
						<Books arrayOfBooks={cartContent} variant='cart' />
					</section>
					<section className='checkout'>
						<Button
							className='border delete-btn'
							parentMethod={() => emptyCart()}
						>
							Vaciar Carrito
						</Button>
					</section>
				</div>
			</main>
		</>
	);
};
