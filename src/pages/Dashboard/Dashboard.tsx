import styled from "styled-components";
import { Wrapper } from "../../components/Misc";

const StyledMain = styled.main`
    background-color: var(--products-bg);
    padding: 20px;
`;

export const Dashboard = () => {
    return (
        <StyledMain>
            <Wrapper>
                <h1>Dashboard</h1>
            </Wrapper>
        </StyledMain>
    );
};
