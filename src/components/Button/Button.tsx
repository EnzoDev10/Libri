import { type PropsWithChildren } from "react";
import styled from "styled-components";
import { Search, ShoppingCart } from "lucide-react";

interface btnProps extends Partial<PropsWithChildren> {
    Icon?: "cart" | "search";
    className?: string;
    parentMethod?: () => void;
}

const StyledButton = styled.button`
    background-color: var(--accent-color);
    padding: 10px;
    border: none;
    border-radius: var(--radius-small);
    display: flex;
    gap: 15px;
    align-items: center;
    color: inherit;
    font-weight: bold;
`;

const IconWrapper = styled.span`
    width: 1.2rem;
    height: 1.2rem;
    display: flex;
    align-items: center;
`;

export const Button = ({
    children,
    Icon,
    className,
    parentMethod,
}: btnProps) => {
    return (
        <StyledButton className={className} onClick={parentMethod}>
            {Icon == "cart" && (
                <IconWrapper as={ShoppingCart} className='icon' />
            )}
            {Icon == "search" && <IconWrapper as={Search} className='icon' />}
            {children}
        </StyledButton>
    );
};
