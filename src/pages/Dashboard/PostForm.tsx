import styled from "styled-components";
import toast from "react-hot-toast";
import { Button } from "../../components";
import { UseProducts } from "../../context/productsContext";
import { CircleAlert, Dices } from "lucide-react";

import { useForm, type SubmitHandler, Controller } from "react-hook-form";

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
    display: flex;
    flex-direction: column;
    font-size: 0.875rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
`;

const FormInput = styled.input`
    color: var(--text-light);
    width: 100%;
    padding: 0.75rem 1rem;
    border: 1px solid #999;
    background-color: #333;
    border-radius: 0.375rem;
    font-size: 1rem;
    transition: all 0.2s ease-in-out;
    box-sizing: border-box;

    &:focus {
        outline: none;
        border-color: light;
        box-shadow: 0 0 0 2px #3b82f6;
    }

    &::placeholder {
        color: #9ca3af;
    }
`;

const FormInputColor = styled.input`
    width: 100%;
`;

const FormTextarea = styled.textarea`
    resize: vertical;
    max-height: 300px;
    min-height: 150px;
    color: var(--text-light);
    width: 100%;
    padding: 0.75rem 1rem;
    border: 1px solid #999;
    border-radius: 0.375rem;
    font-size: 1rem;
    background-color: #333;
    transition: all 0.2s ease-in-out;
    box-sizing: border-box;

    &:focus {
        outline: none;
        border-color: light;
        box-shadow: 0 0 0 2px #3b82f6;
    }

    &::placeholder {
        color: #9ca3af;
    }
`;

const ColorInputWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`;

const RandomColorButton = styled.button`
    padding: 0.5rem 1rem;
    background: #222;
    color: #fff;
    border: none;
    border-radius: 0.375rem;
    cursor: pointer;
    font-size: 0.9rem;
    transition: background 0.2s;
    &:hover {
        background: #444;
    }
`;

// El mismo componente en styled-components
// rompe los colores de los demas componentes por un bug con la propiedad attrs.

interface RightDistance {
    distance?: number;
}

const ErrorIcon = ({ distance = 10 }: RightDistance) => {
    return (
        <CircleAlert
            style={{
                position: "absolute",
                right: `${distance}px`,
                bottom: " 10px",
            }}
            fill='var(--destructive)'
            color='#fff'
        />
    );
};

const ErrorMessage = styled.span`
    color: var(--destructive);
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

const getRandomColor = () => {
    let hexCode = "#";

    while (hexCode.length < 7) {
        hexCode += Math.round(Math.random() * 15).toString(16);
    }

    return hexCode;
};

interface Inputs {
    title: string;
    author: string;
    imageUrl: string;
    price: number;
    description: string;
    color: string;
}

export const PostForm = () => {
    const {
        register,
        handleSubmit,
        control,
        setValue,
        formState: { errors },
    } = useForm<Inputs>();

    const { setNeedToFetch } = UseProducts();
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data);
        fetch(
            "https://6850a235e7c42cfd17992d31.mockapi.io/libri-api/productos",
            {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(data),
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
                <Form
                    className='form'
                    id='postform'
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <FormGroup>
                        <FormLabel htmlFor='title'>
                            Titulo *
                            {errors.title && (
                                <ErrorMessage>
                                    El titulo no puede estar vacio.
                                </ErrorMessage>
                            )}
                        </FormLabel>

                        <FormInput
                            type='text'
                            id='title'
                            {...register("title", { required: true })}
                            minLength={1}
                            placeholder='ej. Cronica de una muerte anunciada'
                        />
                        {errors.title && <ErrorIcon />}
                    </FormGroup>
                    <FormGroup>
                        <FormLabel htmlFor='author'>
                            Autor *
                            {errors.author && (
                                <ErrorMessage>
                                    El autor no puede estar vacio.
                                </ErrorMessage>
                            )}
                        </FormLabel>
                        <FormInput
                            type='text'
                            id='author'
                            {...register("author", { required: true })}
                            placeholder='ej. Gabriel Garcia Marquez'
                        />
                        {errors.author && <ErrorIcon />}
                    </FormGroup>

                    <FormGroup>
                        <FormLabel htmlFor='imageUrl'>
                            Imágen tapa
                            {errors.imageUrl && (
                                <ErrorMessage>
                                    {errors.imageUrl?.message}
                                </ErrorMessage>
                            )}
                        </FormLabel>
                        <FormInput
                            type='string'
                            id='imageUrl'
                            {...register("imageUrl", {
                                pattern: {
                                    value: /(https?:\/\/.*\.(?:png|jpg))/i,
                                    message: "Introduce una URL valida.",
                                },
                            })}
                            placeholder='ej. https.covers.open-library.org'
                        />
                        {errors.imageUrl && <ErrorIcon />}
                    </FormGroup>
                    <FormGroup>
                        <FormLabel htmlFor='price'>
                            Precio *
                            {errors.price && (
                                <ErrorMessage>
                                    El precio debe ser mayor a 0.
                                </ErrorMessage>
                            )}
                        </FormLabel>
                        <FormInput
                            type='number'
                            id='price'
                            {...register("price", { required: true })}
                            min={1}
                            placeholder='ej. 15000'
                        />
                        {errors.price && <ErrorIcon distance={40} />}
                    </FormGroup>

                    <FormGroup>
                        <FormLabel htmlFor='description'>
                            Descripción *
                            {errors.description && (
                                <ErrorMessage>
                                    La descripción no puede tener menos de 10
                                    caracteres.
                                </ErrorMessage>
                            )}
                        </FormLabel>
                        <FormTextarea
                            id='description'
                            {...register("description", {
                                required: true,
                                minLength: 10,
                                maxLength: 200,
                            })}
                            placeholder='ej. Basada en un suceso real, la reconstrucción literaria, laberíntica y polifónica del ineluctable y brutal asesinato de un hombre en una remota población fluvial caribeña significa la apuesta más arriesgada de Gabriel García Márquez hacia una novela total.'
                        />
                        {errors.description && <ErrorIcon />}
                    </FormGroup>
                    <FormGroup>
                        <FormLabel htmlFor='color'>Color de fondo</FormLabel>
                        <Controller
                            name='color'
                            control={control}
                            defaultValue='#06494b'
                            render={({ field }) => (
                                <ColorInputWrapper>
                                    <FormInputColor
                                        type='color'
                                        id='color'
                                        {...field}
                                        value={field.value || "#06494b"}
                                    />
                                    <RandomColorButton
                                        onClick={() =>
                                            setValue("color", getRandomColor())
                                        }
                                        type='button'
                                        aria-label='Color aleatorio'
                                    >
                                        <Dices />
                                    </RandomColorButton>
                                </ColorInputWrapper>
                            )}
                        />
                    </FormGroup>
                    <SubmitButton>Registrarse</SubmitButton>
                </Form>
            </FormContainer>
        </>
    );
};
