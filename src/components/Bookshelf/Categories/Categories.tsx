import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { DropdownWrapper } from "../../Misc";
import styled from "styled-components";

const categoriesOptions = [
    { label: "recomendaciones", value: "subject=argentina" },
    { label: "Terror Cosmico", value: "author=lovecraft" },
    { label: "Romance", value: "subject=romance" },
    { label: "ficción", value: "subject=fiction" },
    { label: "autoayuda", value: "subject=selfhelp" },
];

interface CategoriesProps {
    toReset: () => void;
    onCategoryChange: (category: string) => void;
    value: string;
}

const CategoriesDropdownWrapper = styled(DropdownWrapper)`
    .Dropdown-root {
        width: 200px;
    }
`;

export const Categories = ({
    toReset,
    onCategoryChange,
    value,
}: CategoriesProps) => {
    return (
        <CategoriesDropdownWrapper>
            <Dropdown
                options={categoriesOptions}
                onChange={(option) => {
                    toReset();
                    onCategoryChange(option.value);
                }}
                value={value}
                placeholder='Select an option'
            />
        </CategoriesDropdownWrapper>
    );
};
