import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/contextIndex";
import { Footer, Header, Button, Wrapper } from "../components";
import styled from "styled-components";
import toast from "react-hot-toast";

const StyledMain = styled.main`
    background-color: var(--products-bg);
    padding: 20px;
    min-height: 100%;
    height: fit-content;
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
    color: var(--text-dark);

    margin-bottom: 0.5rem;
    margin-top: 0;
`;

const FormSubtitle = styled.p`
    color: #4b5563;
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
    color: #374151;
    margin-bottom: 0.5rem;
`;

const FormInput = styled.input`
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

const FormOptions = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.875rem;
`;

const CheckboxWrapper = styled.label`
    display: flex;
    align-items: center;
`;

const Checkbox = styled.input`
    margin-right: 0.5rem;
    border-radius: 0.25rem;

    color: #3b82f6;
    outline: none;

    &:focus {
        box-shadow: 0 0 0 2px var(--accent-color);
    }
`;

const CheckboxLabel = styled.span`
    color: #4b5563;
`;

const ForgotPassword = styled.button`
    color: #3b82f6;
    text-decoration: none;
    transition: color 0.2s ease-in-out;
    border: none;
    background-color: transparent;

    &:hover {
        color: #1d4ed8;
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
    const [password, setPassword] = useState("");
    const authContext = useAuthContext();
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Authentication simulation
        if (email === "adminLocal@gmail.com" && password === "1234") {
            authContext?.login(email);
            toast.success("Bienvenido, admin.", { position: "bottom-right" });
            navigate("/dashboard");
        } else {
            authContext?.login(email);
            navigate("/dashboard");
            toast.success("Cuenta creada con exito.", {
                position: "bottom-right",
            });
        }
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
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
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
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    placeholder='••••••••'
                                />
                            </FormGroup>
                            <FormOptions>
                                <CheckboxWrapper>
                                    <Checkbox type='checkbox' />
                                    <CheckboxLabel>Recuerdame</CheckboxLabel>
                                </CheckboxWrapper>
                                <ForgotPassword
                                    type='button'
                                    onClick={() =>
                                        toast.error(
                                            "mala suerte, esta función no fue implementada.",
                                            {
                                                position: "bottom-right",
                                                icon: "🤷",
                                            }
                                        )
                                    }
                                >
                                    Olvidaste tu contraseña?
                                </ForgotPassword>
                            </FormOptions>
                            <SubmitButton>Registrarse</SubmitButton>
                        </Form>
                    </FormContainer>
                </LoginContainer>
            </StyledMain>
            <Footer />
        </>
    );
};
