import { createContext, useContext, useEffect, useState } from "react";

import type { Book } from "../interfaces";
import type { Dispatch, PropsWithChildren, SetStateAction } from "react";

interface productsProps {
    productsContent: Book[];
    setProductsContent: Dispatch<SetStateAction<Book[] | []>>;
    needToFetch: boolean;
    setNeedToFetch: Dispatch<SetStateAction<boolean>>;
    errorExists: boolean;
    isLoading: boolean;
}
const productsContext = createContext<productsProps | null>(null);

export const UseProducts = () => {
    const content = useContext(productsContext);

    if (!content) {
        throw new Error(
            "UseProductsContext has to be used within <productsContext.Provider>"
        );
    }

    return content;
};

export const ProductsContextProvider = ({ children }: PropsWithChildren) => {
    const [productsContent, setProductsContent] = useState<Book[] | []>([]);
    const [needToFetch, setNeedToFetch] = useState<boolean>(true);

    const [isLoading, setIsLoading] = useState(true);
    const [errorExists, seterrorExists] = useState(false);

    useEffect(() => {
        if (needToFetch == false) {
            setIsLoading(false);
            return;
        }
        fetch("https://6850a235e7c42cfd17992d31.mockapi.io/libri-api/productos")
            .then((response) => {
                if (response.ok) {
                    response.json().then((data) => {
                        setProductsContent(data);
                        setNeedToFetch(false);
                        setIsLoading(false);
                    });
                }
            })
            .catch((error) => {
                console.log(
                    "Hubo un problema con la petición Fetch:" + error.message
                );
                setIsLoading(false);
                seterrorExists(true);
            });
    }, [setProductsContent, needToFetch, setNeedToFetch]);

    return (
        <productsContext.Provider
            value={{
                productsContent,
                setProductsContent,
                needToFetch,
                setNeedToFetch,
                errorExists,
                isLoading,
            }}
        >
            {children}
        </productsContext.Provider>
    );
};
