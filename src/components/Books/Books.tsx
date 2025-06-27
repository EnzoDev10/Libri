import type { Book } from "../../interfaces";

import { CartCard, CatalogCard, AdminCard } from "../index";
import styled from "styled-components";

const BooksContainer = styled.section`
    display: flex;
    gap: 20px;
    padding: 20px 0;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
`;

interface Props {
    arrayOfBooks: Book[] | [];
    variant: "bookshelf" | "cart" | "admin";
}

export const Books = ({ arrayOfBooks, variant }: Props) => {
    let CardComponent;

    if (variant == "bookshelf") {
        CardComponent = CatalogCard;
    } else if (variant == "cart") {
        CardComponent = CartCard;
    } else {
        CardComponent = AdminCard;
    }

    return (
        <>
            <BooksContainer>
                {Array.from({ length: arrayOfBooks.length }).map((_, index) => (
                    <CardComponent book={arrayOfBooks[index]} key={index} />
                ))}
            </BooksContainer>
        </>
    );
};
