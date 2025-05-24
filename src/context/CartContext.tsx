import { createContext, useContext, useState } from 'react';

import type { Book } from '../interfaces';
import type { PropsWithChildren } from 'react';

interface CartProps {
	cartContent: [] | Book[];
	addToCart: (product: Book) => void;
	removeFromCart: (product: Book) => void;
	emptyCart: () => void;
}
const CartContext = createContext<CartProps | null>(null);

export const UseCart = () => {
	const content = useContext(CartContext);

	if (!content) {
		throw new Error(
			'UseCartContext has to be used within <cartContext.Provider>'
		);
	}

	return content;
};

export const CartContextProvider = ({ children }: PropsWithChildren) => {
	const [cartContent, setCartContent] = useState<Book[] | []>([]);

	const addToCart = (producto: Book) => {
		setCartContent([...cartContent, producto]);
	};

	const removeFromCart = (producto: Book) => {
		/* 		setCartContent([...cartContent, producto]);
		 */
		console.log(
			`El libro ${producto.title} del autor ${producto.author} sera removido de la lista.`
		);
	};

	const emptyCart = () => {
		setCartContent([]);
	};

	return (
		<CartContext.Provider
			value={{ cartContent, addToCart, removeFromCart, emptyCart }}
		>
			{children}
		</CartContext.Provider>
	);
};
