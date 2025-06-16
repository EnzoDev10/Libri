import styled from "styled-components";
import { Button, Wrapper } from "../../index";
import { Search } from "lucide-react";

const SearchbarWrapper = styled(Wrapper)`
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

export const Searchbar = () => {
    return (
        <SearchbarWrapper>
            <SearchInput type='text' placeholder='H.P Lovecraft' />
            <Button parentMethod={() => {}}>
                <Search />{" "}
            </Button>
        </SearchbarWrapper>
    );
};
