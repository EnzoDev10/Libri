import { useEffect, useState } from "react";
import styled from "styled-components";

import { randomInt } from "../../helpers";
import { Categories } from "./Categories/Categories";
import { Searchbar } from "./SearchBar/SearchBar";
import { X } from "lucide-react";

import type { Book } from "../../interfaces";
import { UseProducts } from "../../context/productsContext";
import { PaginatedItems } from "./Pagination/Pagination";

const Main = styled.main`
    background-color: var(--products-bg);
    padding: 20px;
`;

const Section = styled.section`
    background-color: var(--light-bg);
    padding: 20px 30px;
    border-radius: var(--radius-large);
    display: flex;
    flex-direction: column;
    min-width: 300px;
    gap: 15px;
    height: fit-content;
`;

const Heading = styled.h2`
    color: var(--text-dark);
`;

const BookNav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
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
    const [currentCategory, setCurrentCategory] = useState("subject=argentina");

    const { productsContent, setProductsContent, needToFetch, setNeedToFetch } =
        UseProducts();

    useEffect(() => {
        if (needToFetch == false) {
            setIsLoading(false);
            return;
        }
        fetch(`https://openlibrary.org/search.json?${currentCategory}`)
            .then((response) => {
                if (response.ok) {
                    response.json().then((data) => {
                        const booksList = data.docs;
                        if (booksList.length > 0) {
                            const arr: Book[] = [];
                            for (let i = 0; i < booksList.length; i++) {
                                const obj: Book = {
                                    title: booksList[i].title,
                                    author: booksList[i].author_name[0],
                                    coverId: booksList[i].cover_i,
                                    id: `${booksList[i].title}-
                                        ${booksList[i].author_name[0]}-${i}`,
                                    price: randomInt(),
                                    quantity: 1,
                                };
                                arr.push(obj);
                            }
                            setProductsContent(arr);
                            setNeedToFetch(false);
                            setIsLoading(false);
                        } else {
                            setIsLoading(false);
                            setErrorExist(true);
                        }
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
    }, [setProductsContent, needToFetch, setNeedToFetch, currentCategory]);

    function changeCategories() {
        setNeedToFetch(true);
        setIsLoading(true);
    }

    return (
        <Main>
            <div className='wrapper'>
                <Section>
                    <Heading>Productos</Heading>
                    <BookNav>
                        <Categories
                            toReset={changeCategories}
                            onCategoryChange={setCurrentCategory}
                            value={currentCategory}
                        />
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
