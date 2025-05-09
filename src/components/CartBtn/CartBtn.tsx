import { ShoppingCart } from 'lucide-react';
/* const Btn = styled.button`
	background-color: var(--dark-green);
	padding: 10px 10px;
	border: none;
	border-radius: 10px;
	display: flex;
	gap: 15px;
	align-items: center;
`;
 */
/* const Icon = styled(ShoppingCart)`
	width: 1.3em;
	height: 1.3em;
`;
 */
export const CartBtn = () => {
	return (
		<button className='hover'>
			<ShoppingCart />N
		</button>
	);
};
