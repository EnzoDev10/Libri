import './button.css';

import { Search, ShoppingCart } from 'lucide-react';

interface btnProps {
	Label: string;
	Icon?: 'cart' | 'search';
	className?: string;
	parentMethod: () => void;
}

export const Button = ({ Label, Icon, className, parentMethod }: btnProps) => {
	return (
		<button className={`hover ${className}`} onClick={parentMethod}>
			{Icon == 'cart' && <ShoppingCart className='icon' />}
			{Icon == 'search' && <Search className='icon' />}
			{Label}
		</button>
	);
};
