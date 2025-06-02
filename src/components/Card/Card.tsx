import { Button } from '../index';
import './card.css';

import type { Book } from '../../interfaces';

import Cover from './cover-placeholder.png';

import { useExtractColors } from 'react-extract-colors';

interface cardProps {
	book: Book;
	action: (book: Book) => void;
	variant: 'bookshelf' | 'cart';
}

export const Card = ({ book, action, variant }: cardProps) => {
	const imageUrl = book.coverId
		? `https://Covers.openlibrary.org/b/id/${book.coverId}-M.jpg`
		: Cover;

	const { dominantColor } = useExtractColors(imageUrl, { maxSize: 100 });

	const color = dominantColor ? dominantColor : '#333';

	return (
		<article className={`card ${variant}-card`}>
			<div className='image-container'>
				<img
					width={125}
					height={200}
					src={imageUrl}
					alt={`${book.title}-${book.author}`}
				/>
				<div className='bg' style={{ backgroundColor: color }}></div>
			</div>
			<div className='book-info'>
				<div className='title-container'>
					<p className='title' title={book.title}>
						{book.title}
					</p>
					<p className='author'>{book.author}</p>
				</div>
				<div className='book-buy'>
					<p className='price'>${book.price}</p>
					<Button parentMethod={() => action(book)}>
						{variant == 'bookshelf' ? 'agregar' : 'eliminar'}
					</Button>
				</div>
			</div>
		</article>
	);
};
