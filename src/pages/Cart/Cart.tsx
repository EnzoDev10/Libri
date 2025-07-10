import { useState, useEffect } from "react";
import { Header, Footer, Wrapper, Button, Books } from "../../components";
import { UseCart } from "../../context/contextIndex";
import styled from "styled-components";

import type { Book } from "../../interfaces";
import { formatPrice } from "../../helpers";
import toast from "react-hot-toast";

const CartMain = styled.main`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    background-color: var(--products-bg);
    padding: 30px 0;
    min-height: 100%;
    height: fit-content;
`;

const CartWrapper = styled(Wrapper)`
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: space-between;
    border-radius: var(--radius-large);
    height: 50%;
`;

const Container = styled.div`
    max-width: 600px;
    margin: 0 auto;
    padding: 20px 0;

    @media (max-width: 480px) {
        padding: 10px 0;
    }
`;

const CartCard = styled.div`
    background: var(--general-bg);
    border-radius: var(--radius-large);
    border: 1px solid lightblue;

    padding: 40px;
`;

const CartTitle = styled.h1`
    font-size: 28px;
    font-weight: 600;
    text-align: center;
    margin-bottom: 8px;
`;

const CartSubtitle = styled.p`
    text-align: center;
    margin-bottom: 32px;
    font-size: 14px;
`;

const CartSummary = styled.div`
    border-top: 1px solid #e5e7eb;
    padding-top: 16px;
    margin-bottom: 24px;
`;

const SummaryRow = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
    font-size: 14px;

    * {
        color: var(--text-light);
    }
`;

const SummaryRowTotal = styled(SummaryRow)`
    font-size: 18px;
    font-weight: 600;
    border-top: 1px solid #e5e7eb;
    padding-top: 8px;
    margin-top: 8px;
`;

const CartActions = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 12px;

    @media (min-width: 480px) {
        grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 480px) {
        gap: 16px;
    }
`;

const EmptyCartActions = styled.div`
    display: grid;
    grid-template-columns: 1fr;

    a {
        padding: 10px 20px;
    }
`;

const ContinueShoppingBtn = styled(Button)`
    font-size: 15px;
`;

const CheckoutBtn = styled(Button)`
    &:hover {
        border-color: #1e3a8a;
    }
    &:focus {
        outline: 2px solid #1e3a8a;
        outline-offset: 2px;
    }

    @media (max-width: 480px) {
        padding: 14px 20px;
        font-size: 16px;
    }
`;

const calculateSummary = (cartContent: Book[]): CartSummary => {
    const subtotal = cartContent.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );
    const shipping = 5000;
    const total = subtotal + shipping;
    return { subtotal, shipping, total };
};

interface CartSummary {
    subtotal: number;
    shipping: number;
    total: number;
}

export const CartContent = () => {
    const [summary, setSummary] = useState<CartSummary>({
        subtotal: 0,
        shipping: 5000,
        total: 0,
    });
    const { cartContent, emptyCart } = UseCart();

    useEffect(() => {
        setSummary(calculateSummary(cartContent));
    }, [cartContent]);

    if (cartContent.length === 0) {
        return (
            <Container>
                <CartCard>
                    <CartTitle>Tu Carrito</CartTitle>
                    <CartSubtitle>Tu carrito esta vacio</CartSubtitle>
                    <EmptyCartActions>
                        <ContinueShoppingBtn to='/' variant='transparent'>
                            Volver al catálogo
                        </ContinueShoppingBtn>
                    </EmptyCartActions>
                </CartCard>
            </Container>
        );
    }

    return (
        <Container>
            <CartCard>
                <CartTitle>Tu Carrito</CartTitle>
                <CartSubtitle>
                    Revisa tu lista de productos antes de comprarlos
                </CartSubtitle>
                <Books variant='cart' arrayOfBooks={cartContent} />
                <CartSummary>
                    <SummaryRow>
                        <span>Subtotal:</span>
                        <span>{formatPrice(summary.subtotal)}</span>
                    </SummaryRow>
                    <SummaryRow>
                        <span>Envio:</span>
                        <span>{formatPrice(summary.shipping)}</span>
                    </SummaryRow>
                    <SummaryRowTotal>
                        <span>Total:</span>
                        <span>{formatPrice(summary.total)}</span>
                    </SummaryRowTotal>
                </CartSummary>

                <CartActions>
                    <Button
                        variant='destructive'
                        parentMethod={() => {
                            emptyCart();
                            toast("Carrito Vaciado.", {
                                icon: "🗑️",
                            });
                        }}
                    >
                        vaciar carrito
                    </Button>

                    <CheckoutBtn
                        parentMethod={() => {
                            toast.success("Compra realizada.");
                            emptyCart();
                        }}
                    >
                        Comprar
                    </CheckoutBtn>
                </CartActions>
            </CartCard>
        </Container>
    );
};

export const Cart = () => {
    return (
        <>
            <Header />
            <CartMain>
                <CartWrapper>
                    <CartContent />
                </CartWrapper>
            </CartMain>
            <Footer />
        </>
    );
};
