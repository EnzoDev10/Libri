import styled from "styled-components";

import { Wrapper } from "../index";
import background from "./books-background.jpg";

const HeroSection = styled.section`
    padding: 50px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)),
        url(${background});
    justify-content: center;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`;

const StyledWrapper = styled(Wrapper)`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding: 25px 0;
`;

const TextWrapper = styled.h1`
    font-size: 6.2rem;
    font-weight: 700;
`;

const Subtitle = styled.p`
    color: #ccc;
    font-size: 20px;
    font-style: italic;
`;

export const Hero = () => {
    return (
        <HeroSection>
            <StyledWrapper>
                <TextWrapper>libri.</TextWrapper>
                <Subtitle>
                    Tu librería en línea. Compra, lee y disfruta.
                </Subtitle>
            </StyledWrapper>
        </HeroSection>
    );
};
