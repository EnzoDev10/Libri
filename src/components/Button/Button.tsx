import { type PropsWithChildren } from "react";
import { styled, css } from "styled-components";

const StyledButton = styled.button.attrs({
    className: "hover",
})<{ $destructive?: boolean }>`
    background-color: var(--accent-color);
    padding: 10px;
    border: none;
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
        props.$destructive &&
        css`
            background-color: var(--destructive);
            color: white;

            &:hover {
                background-color: var(--destructive-hover);
            }
        `};
`;

interface btnProps extends Partial<PropsWithChildren> {
    className?: string;
    parentMethod?: () => void;
    destructive?: boolean;
}

export const Button = ({ children, destructive, parentMethod }: btnProps) => {
    if (destructive) {
        return (
            <StyledButton $destructive onClick={parentMethod}>
                {children}
            </StyledButton>
        );
    } else {
        return <StyledButton onClick={parentMethod}>{children}</StyledButton>;
    }
};
