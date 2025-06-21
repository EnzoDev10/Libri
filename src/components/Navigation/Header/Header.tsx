import styled, { css } from "styled-components";
import { NavBar } from "../NavBar/NavBar";
import { Wrapper } from "../../Misc";
import { useState } from "react";
import { Button } from "../../Button/Button";
import { MenuIcon } from "lucide-react";

const StyledWrapper = styled(Wrapper)`
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
        display: none;
    }

    @media screen and (max-width: 600px) {
        button {
            display: initial;
        }
    }
`;

const StyledHeader = styled.header`
    background-color: var(--dark-bg);
    color: var(--text-light);
    position: relative;
`;

const DesktopNavbar = styled(NavBar)`
    ul {
        display: flex;
        align-items: center;
        gap: 25px;
    }
    @media screen and (max-width: 600px) {
        display: none;
    }
`;

const MobileNavbar = styled(NavBar)`
    @media screen and (min-width: 600px) {
        display: none;
    }
`;

const SideMenu = styled.div<{ $isHidden?: boolean }>`
    display: none;

    ${(props) =>
        props.$isHidden &&
        css`
            background-color: var(--general-bg);
            display: initial;
            position: absolute;
            top: 68px;
            right: 0;
            padding: 30px;
            width: 100vw;
        `}

    nav {
        ul {
            display: flex;
            flex-direction: column;
            align-items: start;
            gap: 40px;
        }
    }

    @media screen and (min-width: 600px) {
        display: none;
    }
`;

const MenuButton = styled(Button)``;

export const Header = () => {
    const [showNav, setShowNav] = useState(false);

    const toggleNavItems = (bool: boolean) => {
        setShowNav(bool);
    };

    return (
        <StyledHeader>
            <StyledWrapper>
                <span className='logo'>Libri.</span>
                <DesktopNavbar className='headerNav' variant='header' />
                <MenuButton parentMethod={() => toggleNavItems(!showNav)}>
                    <MenuIcon />
                </MenuButton>
            </StyledWrapper>
            <SideMenu $isHidden={showNav}>
                <MobileNavbar
                    variant='header'
                    className='sidebarNav'
                    menuToggle={toggleNavItems}
                />
            </SideMenu>
        </StyledHeader>
    );
};
