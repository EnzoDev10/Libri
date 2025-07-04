import styled from "styled-components";
import { Wrapper } from "../../index";
import { Search } from "lucide-react";

const StyledForm = styled.form`
    display: flex;
    position: relative;
    justify-content: end;
    height: 37px;
    padding: 0 20px;
`;

const SearchInput = styled.input`
    border: none;
    outline: none;
    color: var(--text-dark);
    border-radius: var(--radius-small) 0 0 var(--radius-small);
    padding-left: 10px;

    &:focus {
        border: 1px solid var(--accent-color);
    }
`;

const IconWrapper = styled.div`
    background-color: var(--accent-color);
    padding: 10px;
    border: 1px solid white;

    border-left: none;
    border-radius: var(--radius-small);
    border-bottom-left-radius: 0%;
    border-top-left-radius: 0%;
    display: flex;
    gap: 15px;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    color: white;
`;

interface Props {
    setter: (str: string) => void;
}

export const Searchbar = ({ setter }: Props) => {
    return (
        <Wrapper>
            <StyledForm>
                <SearchInput
                    type='text'
                    onChange={(e) => setter(e.target.value)}
                    placeholder='H.P Lovecraft'
                />
                <IconWrapper>
                    <Search />
                </IconWrapper>
            </StyledForm>
        </Wrapper>
    );
};
