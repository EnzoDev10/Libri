import styled from "styled-components";

/* 
! Adaptar este component para que funcione como mejor reemplazo
! de la clase "wrapper" que se encuentra en index.
*/

export const Wrapper = styled.article`
    margin: 0 auto;
    padding: 10px 20px;
    width: 90vw;

    @media screen and (min-width: 1280px) {
        max-width: 1200px;
    }
`;

/*     &:first-child {
        background-color: var(--light-bg);
        padding: 20px 30px;
        border-radius: var(--radius-large);
        min-width: 300px;
    } */
