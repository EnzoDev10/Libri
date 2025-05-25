import './searchBar.css';

import { Button } from '../../index';
export const Searchbar = () => {
	return (
		<article className='searchbar'>
			<input type='text' placeholder='H.P Lovecraft' />
			<Button
				className='remove-left-border'
				Icon='search'
				parentMethod={() => {}}
			></Button>
		</article>
	);
};
