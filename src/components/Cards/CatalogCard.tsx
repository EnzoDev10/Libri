import { Button } from "../index";
import styled from "styled-components";
import type { Book } from "../../interfaces";
import Cover from "./cover-placeholder.png";
import { useExtractColors } from "react-extract-colors";
import { UseCart } from "../../context/CartContext";

// Styled-components based on card.css
const CardArticle = styled.article`
    border: 1px solid var(--text-dark);
    width: 220px;
    max-height: 360px;
    border-radius: var(--radius-small);
    padding: 20px;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #abb;
`;

const CardP = styled.p`
    color: var(--text-dark);
`;

const Title = styled.p`
    width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    color: var(--text-dark);
`;

const ImageContainer = styled.div`
    position: relative;
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: center;
`;

const StyledImg = styled.img`
    position: relative;
    max-width: 125px;
    width: 100%;
    margin-bottom: 15px;
    height: 200px;
    z-index: 200;
    border: 1px solid #bbb;
    border-radius: 2.5px;
`;

const Bg = styled.div<{ color: string }>`
    background-color: ${({ color }) => color};
    width: 100%;
    height: 75%;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: var(--radius-small);
    margin: auto;
`;

const BookInfo = styled.div`
    width: 100%;
`;

const BookBuy = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
`;

export const CatalogCard = ({ book }: { book: Book }) => {
    const { addToCart } = UseCart();

    const imageUrl = book.coverId
        ? `https://Covers.openlibrary.org/b/id/${book.coverId}-M.jpg`
        : Cover;

    const { dominantColor } = useExtractColors(imageUrl, { maxSize: 100 });
    const color = dominantColor ? dominantColor : "#333";

    return (
        <CardArticle>
            <ImageContainer>
                <StyledImg
                    width={125}
                    height={200}
                    src={imageUrl}
                    alt={`${book.title}-${book.author}`}
                />
                <Bg color={color} />
            </ImageContainer>
            <BookInfo>
                <div className='title-container'>
                    <Title title={book.title}>{book.title}</Title>
                    <CardP className='author'>{book.author}</CardP>
                </div>
                <BookBuy>
                    <CardP className='price'>${book.price}</CardP>
                    <Button parentMethod={() => addToCart(book)}>
                        Agregar
                    </Button>
                </BookBuy>
            </BookInfo>
        </CardArticle>
    );
};
