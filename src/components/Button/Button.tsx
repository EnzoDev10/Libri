import './button.css';

import { ShoppingCart } from 'lucide-react';

interface Props {
	/* 	parentMethod: () => null;
	 */
	Label: string;
	Icon?: boolean;
}

export const Button = ({ Label, Icon }: Props) => {
	return (
		<button
			className={`hover ${Icon ? 'border' : ''}`}
			onClick={() => {
				console.log(`boton con label ${Label} presionado`);
			}}
		>
			{Icon && <ShoppingCart className='icon' />}
			{Label}
		</button>
	);
};
