import { useState } from "react";
import styled, { css } from "styled-components";
import toast from "react-hot-toast";
import { Button } from "../../components";
import type { Book } from "../../interfaces";
import { UseProducts } from "../../context/productsContext";
import { CircleAlert } from "lucide-react";

const FormContainer = styled.div`
    background-color: var(--general-bg);
    border-radius: 0.5rem;
    padding: 2rem;
    width: 100%;
`;

const FormHeader = styled.div`
    margin-bottom: 1.5rem;
`;

const FormTitle = styled.h2`
    font-size: 1.25rem;
    font-weight: 500;

    margin-bottom: 0.5rem;
    margin-top: 0;
`;

const FormSubtitle = styled.p`
    font-size: 0.875rem;
    margin: 0;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
`;

const FormLabel = styled.label`
    display: block;
    font-size: 0.875rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
`;

const FormInput = styled.input`
    background-color: var(--light-accent-color);
    width: 100%;
    padding: 0.75rem 1rem;
    border: 1px solid #d1d5db;
    border-radius: 0.375rem;
    font-size: 1rem;
    transition: all 0.2s ease-in-out;
    box-sizing: border-box;

    &:focus {
        outline: none;
        border-color: transparent;
        box-shadow: 0 0 0 2px green;
    }

    &::placeholder {
        color: #9ca3af;
    }
`;

const FormTextarea = styled.textarea`
    resize: vertical;
    max-height: 300px;
    min-height: 150px;
    color: var(--text-dark);
    width: 100%;
    padding: 0.75rem 1rem;
    border: 1px solid #d1d5db;
    border-radius: 0.375rem;
    font-size: 1rem;
    transition: all 0.2s ease-in-out;
    background-color: var(--light-accent-color);

    &:focus {
        outline: none;
        border-color: transparent;
        box-shadow: 0 0 0 2px green;
    }

    &::placeholder {
        color: #9ca3af;
    }
`;

const SubmitButton = styled(Button)`
    width: 100%;
    padding: 0.75rem 1rem;
    font-weight: 500;
    font-size: 1rem;
    color: var(--text-light);
    display: flex;
    justify-content: center;

    &:hover {
        background-color: #1d4ed8;
    }

    &:focus {
        outline: none;
        box-shadow: 0 0 0 2px #3b82f6, 0 0 0 4px rgba(59, 130, 246, 0.1);
    }
`;

const ErrorIcon = styled(CircleAlert)<{
    $isVisible: boolean;
}>`
    display: none;

    ${(props) =>
        props.$isVisible &&
        css`
            display: initial;
            background-color: var(--destructive);
            color: white;

            &:hover {
                background-color: var(--destructive-hover);
            }
        `};
`;

/* 
! crear un objeto que guarde los errores de todos los inputs para luego utilizarlo para mostrar mensajes
! O volver a crear los estados por pares de valor y error y manejarlo asi.
*/

export const PostForm = () => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [coverId, setCoverId] = useState("");
    const [price, setPrice] = useState(0);
    const [categories, setCategories] = useState("");
    const [description, setDescription] = useState("");

    const [error, setError] = useState(false);

    const { setNeedToFetch } = UseProducts();
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const arrOfCategories = categories.split(",");

        for (let i = 0; i < arrOfCategories.length; i++) {
            arrOfCategories[i] = arrOfCategories[i].trim();
        }

        const newProduct: Book = {
            title: title.trim(),
            author: author.trim(),
            coverId: coverId.trim(),
            price: price,
            quantity: 1,
            categories: arrOfCategories,
            description: description.trim(),
        };

        fetch(
            "https://6850a235e7c42cfd17992d31.mockapi.io/libri-api/productos",
            {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(newProduct),
            }
        ).then((res) => {
            if (res.ok) {
                toast.success("Producto agregado al catálogo.");
                setNeedToFetch(true);
            } else {
                toast.error("El producto no pudo ser agregado al catálogo.");
            }
        });
    };

    return (
        <>
            <FormContainer>
                <FormHeader>
                    <FormTitle>Agregar un producto</FormTitle>
                    <FormSubtitle>
                        Asegurate de que toda información sea correcta
                    </FormSubtitle>
                </FormHeader>
                <Form className='form' id='postform' onSubmit={handleSubmit}>
                    <FormGroup>
                        <FormLabel htmlFor='title'>Titulo</FormLabel>
                        <FormInput
                            type='text'
                            id='title'
                            required
                            autoFocus
                            onChange={(e) => {
                                setTitle(e.target.value);
                            }}
                            onInvalid={() => setError(true)}
                        />
                        <ErrorIcon $isVisible={error} />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel htmlFor='author'>Autor</FormLabel>
                        <FormInput
                            type='text'
                            id='author'
                            required
                            onChange={(e) => {
                                setAuthor(e.target.value);
                            }}
                        />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel htmlFor='coverId'>
                            Identificador portada
                        </FormLabel>
                        <FormInput
                            type='string'
                            id='coverId'
                            required
                            onChange={(e) => {
                                setCoverId(e.target.value);
                            }}
                        />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel htmlFor='price'>Precio</FormLabel>
                        <FormInput
                            type='number'
                            id='price'
                            required
                            onChange={(e) => setPrice(+e.target.value)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel htmlFor='categories'>Categorias</FormLabel>
                        <FormInput
                            type='text'
                            id='categories'
                            required
                            onChange={(e) => {
                                setCategories(e.target.value);
                            }}
                        />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel htmlFor='description'>descripción</FormLabel>
                        <FormTextarea
                            name=''
                            id='description'
                            required
                            onChange={(e) => {
                                setDescription(e.target.value);
                            }}
                        />
                    </FormGroup>

                    <SubmitButton>Registrarse</SubmitButton>
                </Form>
            </FormContainer>
        </>
    );
};
