import styled from "styled-components";

const CategoriesList = styled.ul`
    display: flex;
    gap: 5px;
    position: relative;
`;

const CategoryItem = styled.li`
    position: relative;
    width: fit-content;
    height: fit-content;
`;

const CategoryInput = styled.input`
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    margin: auto;
    opacity: 0;
    width: 100%;
    height: 100%;

    &:hover ~ label {
        background-color: color-mix(
            in srgb,
            var(--accent-color),
            transparent 20%
        );
        color: var(--text-light);
    }

    &:focus-visible ~ label {
        outline: 2px solid red;
    }

    &:checked ~ label {
        background-color: var(--accent-color);
        color: var(--text-light);
    }
`;

const CategoryLabel = styled.label`
    color: var(--text-dark);
    border: none;
    font-weight: bold;
    font-size: 14px;
    transition: all 500ms;
    height: 100%;
    background-color: var(--text-light);
    padding: 10px;
    border-radius: var(--radius-small);
`;

export const Categories = () => {
    return (
        <article className='wrapper'>
            <CategoriesList>
                <CategoryItem>
                    <CategoryInput type='radio' id='Todos' name='categories' />
                    <CategoryLabel htmlFor='Todos'>Todos</CategoryLabel>
                </CategoryItem>
            </CategoriesList>
        </article>
    );
};
