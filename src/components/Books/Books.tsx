import type { Book } from '../../interfaces';

import { UseCart } from '../../context/CartContext';

import { Card } from '../index';

export const Books = (Props: {
	arrayOfBooks: Book[];
	variant: 'bookshelf' | 'cart';
}) => {
	const { addToCart, removeFromCart } = UseCart();
	const action = Props.variant == 'bookshelf' ? addToCart : removeFromCart;
	return (
		<>
			{Array.from({ length: Props.arrayOfBooks.length }).map((_, index) => (
				<Card
					book={Props.arrayOfBooks[index]}
					variant={Props.variant}
					action={action}
					key={index}
				/>
			))}
		</>
	);
};
