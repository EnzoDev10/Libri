import { createContext, useContext, useState } from "react";

import type { Book } from "../interfaces";
import type { PropsWithChildren } from "react";
import { randomInt } from "../helpers";
interface CartProps {
    cartContent: [] | Book[];
    addToCart: (product: Book) => void;
    removeFromCart: (productId: Book) => void;
    updateQuantity: (bookId: string | undefined, change: number) => void;
}
const CartContext = createContext<CartProps | null>(null);

export const UseCart = () => {
    const content = useContext(CartContext);

    if (!content) {
        throw new Error(
            "UseCartContext has to be used within <cartContext.Provider>"
        );
    }

    return content;
};

function bookIdGenerator(title: string, author: string) {
    const ranNum = randomInt();
    return `${title}-${author}-${ranNum}`;
}

export const CartContextProvider = ({ children }: PropsWithChildren) => {
    const [cartContent, setCartContent] = useState<Book[] | []>([]);

    const addToCart = (producto: Book) => {
        if (producto.id) {
            const clone: Book = (function ({ ...producto }) {
                producto.id = bookIdGenerator(producto.title, producto.author);
                return producto;
            })(producto);
            setCartContent([...cartContent, clone]);
        } else {
            producto.id = bookIdGenerator(producto.title, producto.author);
            setCartContent([...cartContent, producto]);
        }
    };

    const removeFromCart = (producto: Book) => {
        const bookToRemove = cartContent.find(
            (book) => book.id === producto.id
        );

        const updatedContent = cartContent.filter(function (el) {
            return el !== bookToRemove;
        });
        setCartContent(updatedContent);
    };

    const updateQuantity = (
        bookId: string | undefined,
        change: number
    ): void => {
        setCartContent((prevItems) =>
            prevItems.map((item) => {
                if (item.id === bookId) {
                    const newQuantity = Math.max(1, item.quantity + change);
                    return { ...item, quantity: newQuantity };
                }
                return item;
            })
        );
    };

    return (
        <CartContext.Provider
            value={{ cartContent, addToCart, removeFromCart, updateQuantity }}
        >
            {children}
        </CartContext.Provider>
    );
};
