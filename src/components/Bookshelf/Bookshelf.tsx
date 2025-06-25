import styled from "styled-components";

import { Searchbar } from "./SearchBar/SearchBar";
import { X } from "lucide-react";

import { UseProducts } from "../../context/productsContext";
import { PaginatedItems } from "./Pagination/Pagination";
import { Wrapper } from "../Misc";

const Main = styled.main`
    background-color: var(--products-bg);
    padding: 30px 0;
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
    padding: 20px;
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
    flex-direction: column;
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
    const { productsContent, isLoading, errorExists } = UseProducts();

    return (
        <Main>
            <Wrapper>
                <Section>
                    <BookNav>
                        <Heading>Productos</Heading>
                        <Searchbar />
                    </BookNav>
                    <Data>
                        {isLoading && <Heading>Cargando...</Heading>}
                        {errorExists && (
                            <Error>
                                <X size={64} />
                                <p>Ocurrió un error.</p>
                            </Error>
                        )}
                        {!errorExists && !isLoading && productsContent && (
                            <PaginatedItems products={productsContent} />
                        )}
                    </Data>
                </Section>
            </Wrapper>
        </Main>
    );
};
