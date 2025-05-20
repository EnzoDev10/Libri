import { Button } from '../../index';
import './card.css';

import type { Book } from '../../interfaces';

export const Card = ({ coverId, title, author, price }: Book) => {
	return (
		<article className='card'>
			<div className='image-container'>
				<img
					src={`https://covers.openlibrary.org/b/id/${coverId}-M.jpg`}
					alt={`${title}-${author}`}
				/>
			</div>
			<div className='book-info'>
				<div>
					<p className='title'>{title}</p>
					<p className='author'>{author}</p>
				</div>
				<div className='book-buy'>
					<p className='price'>${price}</p>
					<Button Label='comprar' />
				</div>
			</div>
		</article>
	);
};
