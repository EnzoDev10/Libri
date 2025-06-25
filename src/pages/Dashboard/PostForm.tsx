import { useState } from "react";
import styled from "styled-components";
import toast from "react-hot-toast";
import { Button } from "../../components";
import type { Book } from "../../interfaces";

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
`;

const FormLabel = styled.label`
    display: block;
    font-size: 0.875rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
`;

const FormInput = styled.input`
    color: var(--text-dark);
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
        box-shadow: 0 0 0 2px #3b82f6;
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
    box-sizing: border-box;

    &:focus {
        outline: none;
        border-color: transparent;
        box-shadow: 0 0 0 2px #3b82f6;
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

export const PostForm = () => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [coverId, setCoverId] = useState("");
    const [price, setPrice] = useState(0);
    const [categories, setCategories] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const arrOfCategories = categories.split(",");

        const newProduct: Book = {
            title: title,
            author: author,
            coverId: coverId,
            price: price,
            quantity: 1,
            categories: arrOfCategories,
            description: description,
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
                toast("form posteada");
                return res.json();
            } else {
                toast.error("form no posteada");
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
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder='ej. Cronica de una muerte anunciada'
                        />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel htmlFor='author'>Autor</FormLabel>
                        <FormInput
                            type='text'
                            id='author'
                            required
                            onChange={(e) => setAuthor(e.target.value)}
                            placeholder='ej. Gabriel Garcia Marquez'
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
                            onChange={(e) => setCoverId(e.target.value)}
                            placeholder='ej. Gabriel Garcia Marquez'
                        />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel htmlFor='price'>Precio</FormLabel>
                        <FormInput
                            type='number'
                            id='price'
                            required
                            onChange={(e) => setPrice(+e.target.value)}
                            placeholder='ej. 15000'
                        />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel htmlFor='categories'>Categorias</FormLabel>
                        <FormInput
                            type='text'
                            id='categories'
                            required
                            placeholder='ej. ficción,romance'
                            onChange={(e) => setCategories(e.target.value)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel htmlFor='description'>descripción</FormLabel>
                        <FormTextarea
                            name=''
                            id='description'
                            required
                            placeholder='ej. Basada en un suceso real, la reconstrucción literaria, laberíntica y polifónica del ineluctable y brutal asesinato de un hombre en una remota población fluvial caribeña significa la apuesta más arriesgada de Gabriel García Márquez hacia una novela total.'
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </FormGroup>

                    <SubmitButton>Registrarse</SubmitButton>
                </Form>
            </FormContainer>
        </>
    );
};
