import { Header } from '../components';

import { UseCart } from '../context/Context';

export const Cart = () => {
	const cart = UseCart();
	console.log(cart);
	return (
		<>
			<Header />
			<main>hola</main>
		</>
	);
};
