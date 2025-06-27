import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UseAuthContext } from "../../context/contextIndex";
import { Footer, Header, Button, Wrapper } from "..";
import styled from "styled-components";
import toast from "react-hot-toast";

const StyledMain = styled.main`
    background-color: var(--products-bg);
    padding: 20px;
    min-height: 100%;
    height: fit-content;
    color: var(--text-light);
`;

const LoginContainer = styled(Wrapper)`
    max-width: 500px;
`;

const FormContainer = styled.div`
    background-color: var(--general-bg);
    border-radius: 0.5rem;
    padding: 2rem;
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

export const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");

    const [password, setPassword] = useState("");
    const authContext = UseAuthContext();
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Authentication simulation
        if (email === "adminLocal@gmail.com" && password === "1234") {
            authContext?.login(username, true);
            toast.success("Bienvenido, admin.", { position: "bottom-right" });
            navigate("/dashboard");
        } else {
            authContext?.login(username, false);
            navigate("/dashboard");
            toast.success("Cuenta creada con exito.", {
                position: "bottom-right",
            });
        }
        console.log(email);
    };

    return (
        <>
            <Header />
            <StyledMain>
                <LoginContainer>
                    <FormContainer>
                        <FormHeader>
                            <FormTitle>Registrarse</FormTitle>
                            <FormSubtitle>
                                Crea una cuenta para continuar{" "}
                            </FormSubtitle>
                        </FormHeader>
                        <Form
                            className='form'
                            id='loginForm'
                            onSubmit={handleSubmit}
                        >
                            <FormGroup>
                                <FormLabel htmlFor='email'>Correo</FormLabel>
                                <FormInput
                                    type='email'
                                    id='email'
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder='ej. correoCompra@gmail.com'
                                />
                            </FormGroup>
                            <FormGroup>
                                <FormLabel htmlFor='name'>Nombre</FormLabel>
                                <FormInput
                                    type='text'
                                    id='name'
                                    required
                                    value={username}
                                    onChange={(e) =>
                                        setUsername(e.target.value)
                                    }
                                    placeholder='ej. José José'
                                />
                            </FormGroup>
                            <FormGroup>
                                <FormLabel htmlFor='password'>
                                    Contraseña
                                </FormLabel>
                                <FormInput
                                    type='password'
                                    id='password'
                                    required
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    placeholder='••••••••'
                                />
                            </FormGroup>
                            {/*                             <FormOptions>
                                <CheckboxWrapper>
                                    <Checkbox type='checkbox' />
                                    <CheckboxLabel>Recuerdame</CheckboxLabel>
                                </CheckboxWrapper>
                            </FormOptions> */}
                            <SubmitButton>Registrarse</SubmitButton>
                        </Form>
                    </FormContainer>
                </LoginContainer>
            </StyledMain>
            <Footer />
        </>
    );
};
