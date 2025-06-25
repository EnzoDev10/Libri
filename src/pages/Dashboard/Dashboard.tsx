import { Wrapper, Header, Footer, Button } from "../../components";
import { CirclePlus, LogOut, X } from "lucide-react";
import { styled } from "styled-components";
import { useAuthContext } from "../../context/AuthContext";
import { PostForm } from "./PostForm";
import { DeleteProduct } from "./deleteProduct";
import { useState } from "react";

const StyledMain = styled.main`
    background-color: var(--products-bg);
    padding: 20px;
    min-height: 100%;
    height: fit-content;
`;

const StyledWrapper = styled(Wrapper)`
    display: flex;
    align-items: center;
    gap: 25px;
    flex-direction: column;
    padding: 25px;
`;

const Card = styled.div`
    background-color: var(--general-bg);
    border-radius: var(--radius-small);
    border: 1px solid lightblue;
    width: 100%;
    max-width: 400px;
    padding: 1.5rem;
    text-align: center;
    color: var(--text-light);
`;

const CardHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1.5rem;
`;

const AvatarPlaceholder = styled.div`
    width: 96px;
    height: 96px;
    border-radius: 50%;
    background-color: var(--light-accent-color);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
    font-size: 2.5rem;
`;

const UsernameText = styled.h2`
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 0.25rem;
`;

const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const StyledButton = styled(Button)<{ $variant?: "destructive" }>`
    width: 100%;
    display: flex;
    justify-content: center;
`;

const StyledHeading = styled.h1`
    font-size: 30px;
    font-weight: 600;
    text-align: center;
    margin-bottom: 30px;

    @media (max-width: 480px) {
        font-size: 24px;
    }
`;

export const Dashboard = () => {
    const auth = useAuthContext();
    const username = localStorage.getItem("name");

    const [AdminActions, setAdminActions] = useState({
        addProduct: false,
        deleteProduct: false,
    });

    return (
        <>
            <Header />

            <StyledMain>
                <StyledWrapper>
                    <Card>
                        <StyledHeading>Dashboard</StyledHeading>
                        <CardHeader>
                            <AvatarPlaceholder>
                                {username?.charAt(0).toUpperCase()}
                            </AvatarPlaceholder>
                            <UsernameText>{username}</UsernameText>
                        </CardHeader>
                        <CardContent>
                            {localStorage.getItem("isAdmin") && (
                                <>
                                    <StyledButton
                                        parentMethod={() =>
                                            setAdminActions({
                                                addProduct: true,
                                                deleteProduct: false,
                                            })
                                        }
                                    >
                                        <CirclePlus size={16} /> Agregar un
                                        producto
                                    </StyledButton>
                                    <StyledButton
                                        parentMethod={() =>
                                            setAdminActions({
                                                addProduct: false,
                                                deleteProduct: true,
                                            })
                                        }
                                    >
                                        <X size={16} /> Eliminar producto
                                    </StyledButton>
                                </>
                            )}
                            <StyledButton
                                variant='destructive'
                                parentMethod={() => auth?.logout()}
                            >
                                <LogOut size={16} /> Cerrar Sesión
                            </StyledButton>
                        </CardContent>
                    </Card>
                    {AdminActions.addProduct && <PostForm />}
                    {AdminActions.deleteProduct && <DeleteProduct />}
                </StyledWrapper>
            </StyledMain>
            <Footer />
        </>
    );
};
