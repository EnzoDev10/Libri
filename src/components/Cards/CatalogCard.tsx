import { Button } from "../index";
import styled from "styled-components";
import type { Book } from "../../interfaces";
import Cover from "./cover-placeholder.png";
import { formatPrice } from "../../helpers";
import { UseProducts } from "../../context/productsContext";

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
    background-color: #9cbdbf;
`;

const CardParagraph = styled.p`
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
    z-index: 10;
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

interface CatalogCardProps {
    book: Book;
}

export const CatalogCard = ({ book }: CatalogCardProps) => {
    const { setBookToShowcase, toggleModal } = UseProducts();

    const imageUrl = book.imageUrl ? book.imageUrl : Cover;

    const color = book.color ? book.color : "#333";

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
                <div>
                    <Title title={book.title}>{book.title}</Title>
                    <CardParagraph className='author'>
                        {book.author}
                    </CardParagraph>
                </div>
                <BookBuy>
                    <CardParagraph className='price'>
                        {formatPrice(book.price)}
                    </CardParagraph>
                    <Button
                        parentMethod={() => {
                            setBookToShowcase(book);
                            toggleModal();
                        }}
                    >
                        ver más
                    </Button>
                </BookBuy>
            </BookInfo>
        </CardArticle>
    );
};
