import styled from "styled-components";
import { NavBar } from "../NavBar/NavBar";
import { Wrapper } from "../../Misc";

const StyledFooter = styled.footer`
    background-color: var(--dark-bg);
    color: var(--text-light);
    position: relative;
    bottom: 0;
    width: 100%;
`;

const StyledNavBar = styled(NavBar)`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 20px;

    ul {
        display: flex;
        flex-direction: column;
        gap: 25px;
        text-align: center;
    }

    @media screen and (max-width: 480px) {
        display: flex;
        flex-direction: column;

        ul {
            flex-direction: column;
            gap: 30px;
            margin: 30px 0;
        }
    }
`;

export const Footer = () => {
    return (
        <StyledFooter>
            <Wrapper>
                <StyledNavBar variant='footer' className='footerNav' />
            </Wrapper>
        </StyledFooter>
    );
};
