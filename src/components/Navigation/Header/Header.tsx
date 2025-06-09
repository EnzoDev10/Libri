import styled from "styled-components";
import { NavBar } from "../NavBar/NavBar";
import { Wrapper } from "../../Misc";

// Styled-components from header.css
const StyledHeader = styled.header`
    background-color: var(--dark-bg);
    color: var(--text-light);
`;

const StyledNavBar = styled(NavBar)`
    ul {
        display: flex;
        align-items: center;
        gap: 25px;
    }
`;

const StyledWrapper = styled(Wrapper)`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Header = () => {
    return (
        <StyledHeader>
            <StyledWrapper>
                <span className='logo'>Libri.</span>
                <StyledNavBar variant='header' className='headerNav' />
            </StyledWrapper>
        </StyledHeader>
    );
};
