import { Button } from '../../index';
import './card.css';

import type { Book } from '../../interfaces';

import Cover from '../../../assets/Cover-placeholder.png';

export const Card = ({ coverId, title, author, price }: Book) => {
	return (
		<article className='card'>
			<div className='image-container'>
				<img
				width={200}
				height={300}
					src={
						coverId
							? `https://Covers.openlibrary.org/b/id/${coverId}-M.jpg`
							: Cover
					}
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
