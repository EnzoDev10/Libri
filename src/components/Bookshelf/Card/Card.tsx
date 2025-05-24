import { Button } from '../../index';
import './card.css';

import type { Book } from '../../../interfaces';

import Cover from '../../../assets/Cover-placeholder.png';

import { useExtractColors } from 'react-extract-colors';

export const Card = ({ coverId, title, author, price }: Book) => {
	const imageUrl = coverId
		? `https://Covers.openlibrary.org/b/id/${coverId}-M.jpg`
		: Cover;

	const { dominantColor } = useExtractColors(imageUrl);

	const color = dominantColor ? dominantColor : '#333';
	return (
		<article className='card'>
			<div className='image-container'>
				<img
					width={125}
					height={200}
					loading='lazy'
					src={imageUrl}
					alt={`${title}-${author}`}
				/>
				<div className='bg' style={{ backgroundColor: color }}></div>
			</div>
			<div className='book-info'>
				<div className='title-container'>
					<p className='title' title={title}>
						{title}
					</p>
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
