import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { DropdownWrapper } from "../../Misc";

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

export const Categories = ({
    toReset,
    onCategoryChange,
    value,
}: CategoriesProps) => {
    return (
        <DropdownWrapper>
            <Dropdown
                options={categoriesOptions}
                onChange={(option) => {
                    toReset();
                    onCategoryChange(option.value);
                }}
                value={value}
                placeholder='Select an option'
            />
        </DropdownWrapper>
    );
};
