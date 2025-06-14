import { createContext, useContext, useState } from "react";

import type { Book } from "../interfaces";
import type { PropsWithChildren } from "react";
interface CartProps {
    cartContent: [] | Book[];
    addToCart: (product: Book) => void;
    removeFromCart: (productId: Book) => void;
    updateQuantity: (bookId: string | undefined, change: number) => void;
    emptyCart: () => void;
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

export const CartContextProvider = ({ children }: PropsWithChildren) => {
    const [cartContent, setCartContent] = useState<Book[] | []>([]);

    const addToCart = (bookToAdd: Book) => {
        const book = cartContent.find((book) => book.id === bookToAdd.id);
        if (book) {
            updateQuantity(book.id, +1);
        } else {
            setCartContent([...cartContent, bookToAdd]);
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

    const emptyCart = () => {
        setCartContent([]);
    };

    return (
        <CartContext.Provider
            value={{
                cartContent,
                addToCart,
                removeFromCart,
                updateQuantity,
                emptyCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
