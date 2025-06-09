import styled from "styled-components";
import { Button } from "../../index";

const SearchbarWrapper = styled.article`
    display: flex;
    position: relative;
    background-color: var(--light-bg);
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
        <SearchbarWrapper className='wrapper'>
            <SearchInput type='text' placeholder='H.P Lovecraft' />
            <Button Icon='search' parentMethod={() => {}} />
        </SearchbarWrapper>
    );
};
