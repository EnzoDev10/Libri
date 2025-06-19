import { useEffect, useState } from "react";
import styled from "styled-components";

import { Searchbar } from "./SearchBar/SearchBar";
import { X } from "lucide-react";

import { UseProducts } from "../../context/productsContext";
import { PaginatedItems } from "./Pagination/Pagination";

const Main = styled.main`
    background-color: var(--products-bg);
    padding: 30px;
`;

const Section = styled.section`
    background-color: var(--general-bg);
    border-radius: var(--radius-large);
    border: 1px solid lightblue;
    display: flex;
    flex-direction: column;
    min-width: 300px;
    gap: 15px;
    height: fit-content;
`;

const Heading = styled.h2`
    color: var(--text-light);
`;

const BookNav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 40px;

    @media screen and (max-width: 600px) {
        flex-direction: column;

        article {
            width: fit-content;
        }
    }
`;

const Data = styled.article`
    display: flex;
    gap: 20px;
    padding: 20px 0;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    height: fit-content;
    min-height: 50vh;
`;

const Error = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    * {
        color: #cc0000;
    }
`;

export const Bookshelf = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [errorExist, setErrorExist] = useState(false);

    const { productsContent, setProductsContent, needToFetch, setNeedToFetch } =
        UseProducts();

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
                setErrorExist(true);
            });
    }, [setProductsContent, needToFetch, setNeedToFetch]);

    return (
        <Main>
            <div className='wrapper'>
                <Section>
                    <BookNav>
                        <Heading>Productos</Heading>
                        <Searchbar />
                    </BookNav>
                    <Data>
                        {isLoading && <Heading>Cargando...</Heading>}
                        {errorExist && (
                            <Error>
                                <X size={64} />
                                <p>Ocurrió un error.</p>
                            </Error>
                        )}
                        {!errorExist && !isLoading && productsContent && (
                            <PaginatedItems products={productsContent} />
                        )}
                    </Data>
                </Section>
            </div>
        </Main>
    );
};
