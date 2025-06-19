import styled from "styled-components";
import { Button } from "../index";
import type { Book } from "../../interfaces";
import Cover from "./cover-placeholder.png";
import { UseCart } from "../../context/CartContext";
import { formatPrice } from "../../helpers";
import toast from "react-hot-toast";

const CartItemDiv = styled.div`
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
    justify-content: space-between;
    align-items: flex-start;
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
    justify-content: center;
    gap: 8px;

    @media (max-width: 480px) {
        gap: 12px;
    }
`;

const QuantitySeparator = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    margin-right: auto;
`;

/* 
! Cambiar los textos para aumentar, 
! reducir o eliminar productos por iconos de lucide
*/

const QuantityBtn = styled(Button)`
    padding: 5px;
    &:hover {
        background: #f9fafb;
        border-color: #9ca3af;
    }
    &:focus {
        outline: 2px solid #3b82f6;
        outline-offset: 2px;
    }

    @media (max-width: 480px) {
        width: 32px;
        height: 32px;
        font-size: 18px;
    }
`;

const Quantity = styled.span`
    font-size: 14px;
    font-weight: 500;
    min-width: 20px;
    text-align: center;

    @media (max-width: 480px) {
        font-size: 16px;
        min-width: 24px;
    }
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

export const CartCard = ({ book }: { book: Book }) => {
    const { removeFromCart, updateQuantity } = UseCart();

    const imageUrl = book.coverId
        ? `https://Covers.openlibrary.org/b/id/${book.coverId}-M.jpg`
        : Cover;
    return (
        <CartItemDiv>
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
                    <Price>{formatPrice(book.price)}</Price>
                </ItemHeader>
                <ItemAuthor>{book.author}</ItemAuthor>
                <ItemControls>
                    <QuantitySeparator>
                        <QuantityBtn
                            variant='transparent'
                            aria-label='Decrease quantity'
                            parentMethod={() => updateQuantity(book.id, -1)}
                        >
                            -
                        </QuantityBtn>
                        <Quantity>{book.quantity}</Quantity>
                        <QuantityBtn
                            variant='transparent'
                            aria-label='Increase quantity'
                            parentMethod={() => updateQuantity(book.id, +1)}
                        >
                            +
                        </QuantityBtn>
                    </QuantitySeparator>
                    <RemoveBtn
                        variant='destructive'
                        aria-label={`Remove ${book.title} from cart`}
                        parentMethod={() => {
                            removeFromCart(book);
                            toast("Producto eliminado del carrito.", {
                                position: "bottom-right",
                                icon: "🗑️",
                            });
                        }}
                    >
                        ×
                    </RemoveBtn>
                </ItemControls>
            </ItemDetails>
        </CartItemDiv>
    );
};
