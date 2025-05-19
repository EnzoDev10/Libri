import { Button } from '../../index';
import './card.css';

interface Props {
	ImageSrc: string;
	BookTitle: string;
	BookAuthor: string;
}

export const Card = ({ ImageSrc, BookTitle, BookAuthor }: Props) => {
	return (
		<article className='card'>
			<div className='image-container'>
				<img src={ImageSrc} alt={`${BookTitle}-${BookAuthor}`} />
			</div>
			<div className='book-info'>
				<div>
					<p className='title'>{BookTitle}</p>
					<p className='author'>{BookAuthor}</p>
				</div>
				<div className='book-infof'>
					<p className='price'>$Price{/* aleatorio */}</p>
					<Button Label='comprar' />
				</div>
			</div>
		</article>
	);
};
