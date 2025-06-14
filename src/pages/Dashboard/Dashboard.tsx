import { Wrapper, Header, Footer, Button } from "../../components";
import { LogOut } from "lucide-react";
import { styled } from "styled-components";
import { useAuthContext } from "../../context/AuthContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const StyledMain = styled.main`
    background-color: var(--products-bg);
    padding: 20px;
    height: 100%;
`;

const StyledWrapper = styled(Wrapper)`
    /*     background-color: var(--light-bg);
 */
    display: flex;
    align-items: center;
    gap: 25px;
    flex-direction: column;
    padding: 25px;
`;

const Card = styled.div`
    background-color: #ffffff; /* White card background */
    border-radius: 0.5rem; /* Rounded corners */
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
        0 4px 6px -2px rgba(0, 0, 0, 0.05); /* Subtle shadow */
    width: 100%;
    max-width: 400px;
    padding: 1.5rem;
    text-align: center;
    color: #1e293b; /* Dark text for card content */
`;

const CardHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1.5rem;
`;

const AvatarPlaceholder = styled.div`
    width: 96px; /* h-24 */
    height: 96px; /* w-24 */
    border-radius: 50%;
    background-color: #3b82f6; /* Primary blue for avatar fallback */
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
    font-size: 2.5rem; /* text-4xl */
    color: #ffffff; /* White text for avatar fallback */
`;

const UsernameText = styled.h2`
    font-size: 1.5rem; /* text-2xl */
    font-weight: bold;
    margin-bottom: 0.25rem;
    color: var(--text-dark);
`;

const PasswordText = styled.p`
    color: #64748b; /* Gray text for description */
    display: flex;
    gap: 10px;
`;

const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem; /* space-y-4 */
`;

const StyledButton = styled(Button)<{ $variant?: "destructive" }>`
    width: 100%;
    color: white;
    display: flex;
    justify-content: center;
`;

const StyledHeading = styled.h1`
    font-size: 30px;
    font-weight: 600;
    color: #1f2937;
    text-align: center;
    margin-bottom: 30px;

    @media (max-width: 480px) {
        font-size: 24px;
    }
`;

export const Dashboard = () => {
    // Dummy data for visual representation
    const username = "usuario";
    const password = "••••••••";
    const avatarInitial = username.charAt(0).toUpperCase();
    const context = useAuthContext();
    const Navigate = useNavigate();

    function closeSession() {
        context?.logout();
        Navigate("/");
        toast.success("sesion cerrada con exito.", {
            position: "bottom-right",
        });
    }

    return (
        <>
            <Header />

            <StyledMain>
                <StyledWrapper>
                    <Card>
                        <StyledHeading>Dashboard</StyledHeading>
                        <CardHeader>
                            <AvatarPlaceholder>
                                {avatarInitial}
                            </AvatarPlaceholder>
                            <UsernameText>{username}</UsernameText>
                            <PasswordText>{password}</PasswordText>
                        </CardHeader>
                        <CardContent>
                            <StyledButton
                                variant='destructive'
                                parentMethod={() => closeSession()}
                            >
                                <LogOut size={16} /> Cerrar Sesión
                            </StyledButton>
                        </CardContent>
                    </Card>
                </StyledWrapper>
            </StyledMain>
            <Footer />
        </>
    );
};
