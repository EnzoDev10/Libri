import { createContext, useContext, useState } from 'react';

import type { Book } from '../interfaces';
import type { Dispatch, PropsWithChildren, SetStateAction } from 'react';

interface productsProps {
	productsContent: Book[] | null;
	setProductsContent: Dispatch<SetStateAction<Book[] | null>>;
	needToFetch: boolean;
	setNeedToFetch: Dispatch<SetStateAction<boolean>>;
}
const productsContext = createContext<productsProps | null>(null);

export const UseProducts = () => {
	const content = useContext(productsContext);

	if (!content) {
		throw new Error(
			'UseProductsContext has to be used within <productsContext.Provider>'
		);
	}

	return content;
};

export const ProductsContextProvider = ({ children }: PropsWithChildren) => {
	const [productsContent, setProductsContent] = useState<Book[] | null>(null);
	const [needToFetch, setNeedToFetch] = useState<boolean>(true);

	return (
		<productsContext.Provider
			value={{
				productsContent,
				setProductsContent,
				needToFetch,
				setNeedToFetch,
			}}
		>
			{children}
		</productsContext.Provider>
	);
};
