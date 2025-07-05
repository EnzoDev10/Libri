import styled from "styled-components";
import { Button } from "../index";
import type { Book } from "../../interfaces";
import Cover from "./cover-placeholder.png";
import { formatPrice } from "../../helpers";
import { UseAdminContext } from "../../context/AdminContext";

const CartItemArticle = styled.article`
    display: flex;
    align-items: center;
    padding: 16px 0;
    border-bottom: 1px solid #e5e7eb;
    gap: 16px;
    min-width: 100%;

    &:last-child {
        border-bottom: none;
    }

    @media (max-width: 480px) {
        flex-direction: row;
        align-items: flex-start;
        gap: 12px;
        padding: 20px 0;
    }
`;

const ItemImage = styled.div`
    flex-shrink: 0;
    img {
        height: 110px;
        object-fit: cover;
        border-radius: var(--radius-small);
        background: #f3f4f6;
    }
`;

const ItemDetails = styled.div`
    flex: 1;
    min-width: 0;

    button {
        padding: 5px 10px;
    }
`;

const ItemHeader = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 4px;
    gap: 12px;

    @media (max-width: 480px) {
        flex-direction: column;
        align-items: flex-start;
        gap: 4px;
    }
`;

const ItemTitle = styled.h3`
    font-size: 16px;
    font-weight: 600;
    line-height: 1.3;
    flex: 1;

    @media (max-width: 480px) {
        font-size: 15px;
        line-height: 1.4;
    }
    @media (max-width: 360px) {
        font-size: 14px;
    }
`;

const ItemAuthor = styled.p`
    font-size: 14px;
    margin-bottom: 8px;

    @media (max-width: 480px) {
        font-size: 13px;
        margin-bottom: 12px;
    }
    @media (max-width: 360px) {
        font-size: 12px;
    }
`;

const ItemControls = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const Price = styled.span`
    font-size: 16px;
    font-weight: 600;
    flex-shrink: 0;

    @media (max-width: 480px) {
        font-size: 15px;
    }
    @media (max-width: 360px) {
        font-size: 14px;
    }
`;

const RemoveBtn = styled(Button)`
    &:hover {
        background: #dc2626;
    }
    &:focus {
        outline: 2px solid #ef4444;
        outline-offset: 2px;
    }

    @media (max-width: 480px) {
        margin-left: 12px;
    }
`;

interface CardProp {
    book: Book;
}

export const AdminCard = ({ book }: CardProp) => {
    const { addProductToDelete } = UseAdminContext();

    const imageUrl = book.imageUrl ? book.imageUrl : Cover;

    return (
        <CartItemArticle>
            <ItemImage>
                <img
                    height={110}
                    width={70}
                    src={imageUrl}
                    alt={`${book.title} cover`}
                />
            </ItemImage>

            <ItemDetails>
                <ItemHeader>
                    <ItemTitle>{book.title}</ItemTitle>
                    <ItemAuthor>{book.author}</ItemAuthor>
                </ItemHeader>
                <Price>{formatPrice(book.price)}</Price>
                <ItemControls>
                    <RemoveBtn
                        variant='destructive'
                        aria-label={`Remove ${book.title} from cart`}
                        parentMethod={() => addProductToDelete(book.id)}
                    >
                        ×
                    </RemoveBtn>
                </ItemControls>
            </ItemDetails>
        </CartItemArticle>
    );
};
