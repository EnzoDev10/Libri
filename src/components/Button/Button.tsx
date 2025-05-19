import './button.css';

import { Search, ShoppingCart } from 'lucide-react';

interface Props {
	/* 	parentMethod: () => null;
	 */
	Label: string;
	Icon?: 'cart' | 'search';
	className?: string;
}

export const Button = ({ Label, Icon, className }: Props) => {
	return (
		<button
			className={className}
			onClick={() => {
				console.log(`boton con label ${Label} presionado`);
			}}
		>
			{Icon == 'cart' && <ShoppingCart className='icon' />}
			{Icon == 'search' && <Search className='icon' />}
			{Label}
		</button>
	);
};
