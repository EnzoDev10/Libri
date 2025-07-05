import styled from "styled-components";
import { Button } from "../index";
import type { Book } from "../../interfaces";
import Cover from "./cover-placeholder.png";
import { UseCart } from "../../context/CartContext";
import { formatPrice } from "../../helpers";
import toast from "react-hot-toast";

const ProductContainer = styled.article`
    display: flex;
    align-items: center;
    border-bottom: 1px solid #e5e7eb;
    gap: 16px;
    min-width: 100%;
    padding: 16px 0;

    &:last-child {
        border-bottom: none;
    }
`;

const ProductImage = styled.div`
    img {
        max-height: 120px;
        object-fit: cover;
        border-radius: var(--radius-small);
        background: #f3f4f6;
    }
`;

const ProductDetails = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    justify-content: space-between;
    height: 120px;
    button {
        padding: 5px 10px;
    }
`;

const ProductHeader = styled.header`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-bottom: 4px;
`;

const ProductTitle = styled.h3`
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

const ProductAuthor = styled.p`
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

const ProductControls = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    @media (max-width: 480px) {
        gap: 12px;
    }
`;

const QuantitiesContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    margin-right: auto;
`;

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
`;

const Price = styled.span`
    justify-self: end;
    font-weight: 600;
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

    const imageUrl = book.imageUrl ? book.imageUrl : Cover;
    return (
        <ProductContainer>
            <ProductImage>
                <img src={imageUrl} alt={`${book.title} cover`} />
            </ProductImage>

            <ProductDetails>
                <ProductHeader>
                    <ProductTitle>{book.title}</ProductTitle>
                    <Price>{formatPrice(book.price)}</Price>
                    <ProductAuthor>{book.author}</ProductAuthor>
                </ProductHeader>
                <ProductControls>
                    <QuantitiesContainer>
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
                    </QuantitiesContainer>
                    <RemoveBtn
                        variant='destructive'
                        aria-label={`Remove ${book.title} from cart`}
                        parentMethod={() => {
                            removeFromCart(book);
                            toast("Producto eliminado del carrito.", {
                                icon: "🗑️",
                            });
                        }}
                    >
                        ×
                    </RemoveBtn>
                </ProductControls>
            </ProductDetails>
        </ProductContainer>
    );
};
