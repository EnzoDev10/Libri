import toast from "react-hot-toast";
import { Button } from "../Button/Button";
import { ReusableModal } from "../ReusableModal/ReusableModal";
import { UseCart } from "../../context/CartContext";
import { UseProducts } from "../../context/productsContext";
import { formatPrice } from "../../helpers";
import Cover from "./cover-placeholder.png";
import styled from "styled-components";
import type { Book } from "../../interfaces";

interface showcaseProps {
    bookToShowcase: Book;
}

const Controls = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 15px;
`;

const CardArticle = styled.article`
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: var(--text-light);
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
    text-align: center;
`;

const MainInfo = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-top: 10px;
`;

const Title = styled.h3`
    width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
`;

const Author = styled.h4``;

const Price = styled.p``;

const DescriptionContainer = styled.article`
    margin: 20px 0;
    text-align: left;
`;

/* 
! Agregar el color al fondo de BookShowcase
*/

export const BookShowcase = ({ bookToShowcase }: showcaseProps) => {
    const { addToCart } = UseCart();

    const { modalState, toggleModal } = UseProducts();

    const imageUrl = bookToShowcase.imageUrl ? bookToShowcase.imageUrl : Cover;

    const color = bookToShowcase.color != "" ? bookToShowcase.color : "#333";

    return (
        <ReusableModal state={modalState} toggleModal={toggleModal}>
            <h2>Detalles del producto</h2>

            <CardArticle>
                <ImageContainer>
                    <StyledImg
                        width={125}
                        height={200}
                        src={imageUrl}
                        alt={`${bookToShowcase.title}-${bookToShowcase.author}`}
                    />
                    <Bg color={color} />
                </ImageContainer>
                <BookInfo>
                    <MainInfo>
                        <Title>{bookToShowcase.title}</Title>
                        <Author>{bookToShowcase.author}</Author>
                        <Price>{formatPrice(bookToShowcase.price)}</Price>
                    </MainInfo>

                    <DescriptionContainer>
                        <h4>Sinopsis</h4>
                        {bookToShowcase.description}
                    </DescriptionContainer>
                </BookInfo>
                <Controls>
                    <Button variant='destructive' parentMethod={toggleModal}>
                        volver atrás
                    </Button>
                    <Button
                        parentMethod={() => {
                            if (localStorage.getItem("authToken")) {
                                addToCart(bookToShowcase);
                                toast.success("Producto agregado al carrito.");
                            } else {
                                toast.error("no tienes una cuenta.");
                            }
                        }}
                    >
                        Agregar al carrito
                    </Button>
                </Controls>
            </CardArticle>
        </ReusableModal>
    );
};
