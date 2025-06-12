import { useEffect, useState } from "react";
import styled from "styled-components";

import { randomInt } from "../../helpers";
import { Categories } from "./Categories/Categories";
import { Searchbar } from "./SearchBar/SearchBar";
import { Books } from "../index";
import { X } from "lucide-react";

import type { Book } from "../../interfaces";
import { UseProducts } from "../../context/productsContext";

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

function randomPrice() {
    const max = 50000;
    const min = 12000;
    const ranNum = randomInt(min, max);

    return Number(Intl.NumberFormat("es-AR").format(ranNum));
}

export const Bookshelf = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [errorExist, setErrorExist] = useState(false);
    const [bookshelfBooks, setBookshelfBooks] = useState<Book[] | null>();
    const { productsContent, setProductsContent, needToFetch, setNeedToFetch } =
        UseProducts();

    useEffect(() => {
        if (needToFetch == false) {
            setBookshelfBooks(productsContent);
            setIsLoading(false);
            return;
        }
        fetch("https://openlibrary.org/search.json?author=lovecraft")
            .then((response) => {
                if (response.ok) {
                    response.json().then((data) => {
                        const firstTen = data.docs.slice(0, 10);
                        const arr: Book[] = [];
                        for (let i = 0; i < firstTen.length; i++) {
                            const obj: Book = {
                                title: firstTen[i].title,
                                author: firstTen[i].author_name[0],
                                coverId: firstTen[i].cover_i,
                                price: randomPrice(),
                            };
                            arr.push(obj);
                        }
                        setProductsContent(arr);
                        setBookshelfBooks(arr);
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
    }, [setProductsContent, needToFetch, setNeedToFetch, productsContent]);

    return (
        <Main>
            <div className='wrapper'>
                <Section>
                    <Heading>Productos</Heading>
                    <BookNav>
                        <Categories />
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
                        {!errorExist && !isLoading && bookshelfBooks && (
                            <Books
                                arrayOfBooks={bookshelfBooks}
                                variant='bookshelf'
                            />
                        )}
                    </Data>
                </Section>
            </div>
        </Main>
    );
};
