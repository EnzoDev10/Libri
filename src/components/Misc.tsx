import styled from "styled-components";

export const Wrapper = styled.article`
    margin: 0 auto;
    padding: 10px 20px;
    width: 90vw;
    border-radius: var(--radius-large);

    @media screen and (min-width: 1280px) {
        max-width: 1200px;
    }
`;

export const DropdownWrapper = styled(Wrapper)`
    .Dropdown-control {
        border-radius: var(--radius-small);
        background-color: var(--accent-color);
    }
    .Dropdown-root {
        max-width: 150px;
    }

    .Dropdown-option {
        background-color: var(--light-bg);
    }
`;
