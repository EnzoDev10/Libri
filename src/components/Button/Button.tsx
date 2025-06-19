import { type PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import { styled, css } from "styled-components";

const sharedStyles = `
background-color: var(--accent-color);
    padding: 10px;
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
`;

const StyledLink = styled(Link)<{ $variant?: "transparent" | "destructive" }>`
    ${sharedStyles}
    border-color: var(--text-light);

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

const StyledButton = styled.button.attrs({
    className: "hover",
})<{ $variant?: "destructive" | "transparent" }>`
    ${sharedStyles}

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
            border: 1px solid var(--text-light);
            color: var(--text-light);

            &:hover {
                background-color: var(--light-accent-color);
            }
        `};
`;

interface btnProps extends Partial<PropsWithChildren> {
    className?: string;
    parentMethod?: () => void;
    variant?: "transparent" | "destructive";
    to?: string;
}

export const Button = ({ children, variant, to, parentMethod }: btnProps) => {
    if (to) {
        return (
            <StyledLink to={to} $variant={variant}>
                {children}
            </StyledLink>
        );
    }
    return (
        <StyledButton $variant={variant} onClick={parentMethod}>
            {children}
        </StyledButton>
    );
};
