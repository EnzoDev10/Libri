import type { Book } from "../../interfaces";

import { CartCard, CatalogCard } from "../index";
import styled from "styled-components";

const BooksContainer = styled.article`
    display: flex;
    gap: 20px;
    padding: 20px 0;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`;

export const Books = (Props: {
    arrayOfBooks: Book[] | [];
    variant: "bookshelf" | "cart";
}) => {
    const CardComponent = Props.variant === "cart" ? CartCard : CatalogCard;

    return (
        <>
            <BooksContainer>
                {Array.from({ length: Props.arrayOfBooks.length }).map(
                    (_, index) => (
                        <CardComponent
                            book={Props.arrayOfBooks[index]}
                            key={index}
                        />
                    )
                )}
            </BooksContainer>
        </>
    );
};
