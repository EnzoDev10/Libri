import { type PropsWithChildren } from 'react';
import './button.css';

import { Search, ShoppingCart } from 'lucide-react';

interface btnProps extends Partial<PropsWithChildren> {
	Icon?: 'cart' | 'search';
	className?: string;
	parentMethod?: () => void;
}

export const Button = ({
	children,
	Icon,
	className,
	parentMethod,
}: btnProps) => {
	return (
		<button className={`hover ${className}`} onClick={parentMethod}>
			{Icon == 'cart' && <ShoppingCart className='icon' />}
			{Icon == 'search' && <Search className='icon' />}
			{children}
		</button>
	);
};
