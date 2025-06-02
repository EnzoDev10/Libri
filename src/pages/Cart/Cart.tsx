import { Header, Books, Button, Footer } from '../../components';

import { UseCart } from '../../context/contextIndex';

import './cart.css';
export const Cart = () => {
  const { cartContent, emptyCart } = UseCart();

  return (
    <>
      <Header />
      <main className='cart'>
        <div className='wrapper'>
          <section className='products-section'>
            <h2>Carrito</h2>
            {cartContent.length == 0 ? (
              <h3 className='cart-message'>
                No hay ningún producto en el carrito
              </h3>
            ) : null}
            <Books arrayOfBooks={cartContent} variant='cart' />
          </section>
          <section className='checkout'>
            <article>
              <Button
                className='border delete-btn'
                parentMethod={() => emptyCart()}
              >
                Vaciar Carrito
              </Button>
            </article>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};
