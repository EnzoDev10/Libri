import styled from "styled-components";

import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { Wrapper } from "../../Misc";

const optionsSearch = [
    { label: "recomendaciones", value: "subject=argentina" },
    { label: "Terror Cosmico", value: "author=lovecraft" },
    { label: "Romance", value: "subject=romance" },
    { label: "ficción", value: "subject=fiction" },
    { label: "autoayuda", value: "subject=selfhelp" },
];

const StyledWrapper = styled(Wrapper)`
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

interface CategoriesProps {
    toReset: () => void;
    onCategoryChange: (category: string) => void;
    value: string;
}

export const Categories = ({
    toReset,
    onCategoryChange,
    value,
}: CategoriesProps) => {
    return (
        <StyledWrapper>
            <Dropdown
                options={optionsSearch}
                onChange={(option) => {
                    toReset();
                    onCategoryChange(option.value);
                }}
                value={value || "autoayuda"}
                placeholder='Select an option'
            />
        </StyledWrapper>
    );
};
