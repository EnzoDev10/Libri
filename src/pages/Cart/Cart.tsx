import { Header, Books, Button, Footer, Wrapper } from "../../components";
import { UseCart } from "../../context/contextIndex";
import styled from "styled-components";

const CartMain = styled.main`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    background-color: var(--products-bg);
    padding: 30px;
    height: 100%;
`;

const CartWrapper = styled(Wrapper)`
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: space-between;
    background-color: var(--light-bg);
    border-radius: var(--radius-large);
    height: 50%;
`;

const ProductsSection = styled.section`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
`;

const Heading = styled.h2`
    color: var(--text-dark);
`;

const CartMessage = styled.h3`
    color: var(--text-dark);
`;

const CheckoutSection = styled.section`
    display: flex;
    justify-content: center;
`;

export const Cart = () => {
    const { cartContent, emptyCart } = UseCart();

    return (
        <>
            <Header />
            <CartMain>
                <CartWrapper>
                    <ProductsSection>
                        <Heading>Carrito</Heading>
                        {cartContent.length === 0 ? (
                            <CartMessage>
                                No hay ningún producto en el carrito
                            </CartMessage>
                        ) : null}
                        <Books arrayOfBooks={cartContent} variant='cart' />
                    </ProductsSection>
                    <CheckoutSection>
                        <article>
                            <Button
                                destructive
                                parentMethod={() => emptyCart()}
                            >
                                Vaciar Carrito
                            </Button>
                        </article>
                    </CheckoutSection>
                </CartWrapper>
            </CartMain>
            <Footer />
        </>
    );
};
