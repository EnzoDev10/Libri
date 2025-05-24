import { Header, Books } from '../components';

import { UseCart } from '../context/CartContext';

export const Cart = () => {
	const { cartContent } = UseCart();
	return (
		<>
			<Header />
			<main>
				<Books arrayOfBooks={cartContent} variant='cart' />
			</main>
		</>
	);
};
