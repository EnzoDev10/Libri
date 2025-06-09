import styled from "styled-components";

import { Wrapper } from "../Misc";

const HeroSection = styled.section`
    background-color: var(--hero-bg);
    padding: 50px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const StyledWrapper = styled(Wrapper)`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
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
