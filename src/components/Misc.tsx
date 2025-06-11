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
