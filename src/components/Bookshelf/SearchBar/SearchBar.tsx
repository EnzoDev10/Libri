import styled from "styled-components";
import { Button, Wrapper } from "../../index";

const SearchbarWrapper = styled(Wrapper)`
    display: flex;
    position: relative;
    justify-content: end;
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

export const Searchbar = () => {
    return (
        <SearchbarWrapper>
            <SearchInput type='text' placeholder='H.P Lovecraft' />
            <Button Icon='search' parentMethod={() => {}} />
        </SearchbarWrapper>
    );
};
