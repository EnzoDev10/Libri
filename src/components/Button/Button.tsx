import { type PropsWithChildren } from "react";
import { styled, css } from "styled-components";

const StyledButton = styled.button.attrs({
    className: "hover",
})<{ $variant?: "transparent" | "destructive" }>`
    background-color: var(--accent-color);
    padding: 10px;
    border: none;
    border: 1px solid transparent;

    border-radius: var(--radius-small);
    display: flex;
    gap: 15px;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    color: white;

    &:hover {
        background-color: var(--light-accent-color);
    }

    ${(props) =>
        props.$variant == "destructive" &&
        css`
            background-color: var(--destructive);
            color: white;

            &:hover {
                background-color: var(--destructive-hover);
            }
        `};
    ${(props) =>
        props.$variant == "transparent" &&
        css`
            background-color: transparent;
            border: 1px solid var(--text-dark);
            color: var(--text-dark);

            &:hover {
                background-color: var(--light-accent-color);
            }
        `};
`;

interface btnProps extends Partial<PropsWithChildren> {
    className?: string;
    parentMethod?: () => void;
    variant?: "transparent" | "destructive";
}

export const Button = ({ children, variant, parentMethod }: btnProps) => {
    return (
        <StyledButton $variant={variant} onClick={parentMethod}>
            {children}
        </StyledButton>
    );
};
