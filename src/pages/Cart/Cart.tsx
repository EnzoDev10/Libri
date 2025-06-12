import { Header, Footer, Wrapper, Button, Books } from "../../components";
import { UseCart } from "../../context/contextIndex";
import styled from "styled-components";

const CartMain = styled.main`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    background-color: var(--products-bg);
    padding: 30px;
    height: fit-content;
    height: 100%;
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
    background: var(--light-bg);
    border-radius: var(--radius-large);

    padding: 40px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);

    @media (max-width: 480px) {
        padding: 20px 16px;
        margin: 0 8px;
    }
    @media (max-width: 360px) {
        padding: 16px 12px;
        margin: 0 4px;
    }
`;

const CartTitle = styled.h1`
    font-size: 28px;
    font-weight: 600;
    color: #1f2937;
    text-align: center;
    margin-bottom: 8px;

    @media (max-width: 480px) {
        font-size: 24px;
    }
`;

const CartSubtitle = styled.p`
    color: #6b7280;
    text-align: center;
    margin-bottom: 32px;
    font-size: 14px;
`;

const CartSummary = styled.div`
    border-top: 1px solid #e5e7eb;
    padding-top: 16px;
    margin-bottom: 24px;
`;

const SummaryRow = styled.div<{ total?: boolean }>`
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
    font-size: 14px;

    * {
        color: var(--text-dark);
    }

    ${({ total }) =>
        total &&
        `
        font-size: 18px;
        font-weight: 600;
        color: #1f2937;
        border-top: 1px solid #e5e7eb;
        padding-top: 8px;
        margin-top: 8px;
    `}
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
        padding: 10px 50px;
    }
`;

const ContinueShoppingBtn = styled(Button)`
    &:hover {
        background: #1d4ed8;
        color: white;
    }
    &:focus {
        outline: 2px solid #1d4ed8;
        outline-offset: 2px;
    }

    @media (max-width: 480px) {
        padding: 14px 20px;
        font-size: 16px;
    }
`;

const CheckoutBtn = styled(Button)`
    &:hover {
        background: #1e3a8a;
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

/* interface CartProps {
    onContinueShopping?: () => void;
    onCheckout?: () => void;
}
 */

/*     const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems);
 */ /* 
! Mover toda esta logica para el CartContext
*/
/*     const [summary, setSummary] = useState<CartSummary>({
    subtotal: 0,
    shipping: 5000,
    total: 0,
});

const formatPrice = (price: number): string => {
    return `$${price.toLocaleString("en-US")}`;
};

const calculateSummary = (items: CartItem[]): CartSummary => {
    const subtotal = items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );
    const shipping = items.length > 0 ? 5000 : 0;
    const total = subtotal + shipping;

    return { subtotal, shipping, total };
};

useEffect(() => {
    setSummary(calculateSummary(cartItems));
}, [cartItems]);

const updateQuantity = (itemId: number, change: number): void => {
    setCartItems((prevItems) =>
        prevItems.map((item) => {
            if (item.id === itemId) {
                const newQuantity = Math.max(1, item.quantity + change);
                return { ...item, quantity: newQuantity };
            }
            return item;
        })
    );
};

const removeItem = (itemId: number): void => {
    setCartItems((prevItems) =>
        prevItems.filter((item) => item.id !== itemId)
    );
};

const handleContinueShopping = (): void => {
    if (onContinueShopping) {
        onContinueShopping();
    } else {
        alert("Continuing shopping...");
    }
};

const handleCheckout = (): void => {
    if (onCheckout) {
        onCheckout();
    } else {
        alert("Proceeding to checkout...");
    }
};
*/

export const CartContent = () => {
    const content = UseCart();

    if (content.cartContent.length === 0) {
        return (
            <Container>
                <CartCard>
                    <CartTitle>Tu Carrito</CartTitle>
                    <CartSubtitle>Tu carrito esta vacio</CartSubtitle>
                    <EmptyCartActions>
                        <ContinueShoppingBtn to='/' variant='transparent'>
                            Volver al catalogo
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
                <Books variant='cart' arrayOfBooks={content.cartContent} />
                <CartSummary>
                    <SummaryRow>
                        <span>Subtotal:</span>
                        <span>$99.999</span>
                    </SummaryRow>
                    <SummaryRow>
                        <span>Envio:</span>
                        <span>$99.999</span>
                    </SummaryRow>
                    <SummaryRow total>
                        <span>Total:</span>
                        <span>$99.999</span>
                    </SummaryRow>
                </CartSummary>

                <CartActions>
                    <ContinueShoppingBtn to='/' variant='transparent'>
                        Volver al catalogo
                    </ContinueShoppingBtn>

                    <CheckoutBtn>Comprar</CheckoutBtn>
                </CartActions>
            </CartCard>
        </Container>
    );
};

export const Cart = () => {
    /*     const { cartContent, emptyCart } = UseCart();
     */
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
