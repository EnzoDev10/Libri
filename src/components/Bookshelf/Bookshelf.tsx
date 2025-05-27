import { useEffect, useState } from 'react';

import { randomInt } from '../../helpers';

import { Categories } from './Categories/Categories';

import { Searchbar } from './SearchBar/SearchBar';

import { Books } from '../index';

import { X } from 'lucide-react';

import './Bookshelf.css';

import type { Book } from '../../interfaces';

import { UseProducts } from '../../context/productsContext';

function randomPrice() {
	const max = 50000;
	const min = 12000;
	const ranNum = randomInt(min, max);

	return Number(Intl.NumberFormat('es-AR').format(ranNum));
}

export const Bookshelf = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [errorExist, setErrorExist] = useState(false);
	const [bookshelfBooks, setBookshelfBooks] = useState<Book[] | null>();
	const { productsContent, setProductsContent, needToFetch, setNeedToFetch } =
		UseProducts();
	useEffect(() => {
		if (needToFetch == false) {
			setBookshelfBooks(productsContent);
			setIsLoading(false);

			return;
		}
		fetch('https://openlibrary.org/search.json?author=lovecraft')
			.then((response) => {
				if (response.ok) {
					response.json().then((data) => {
						const firstTen = data.docs.slice(0, 10);
						const arr: Book[] = [];
						for (let i = 0; i < firstTen.length; i++) {
							const obj: Book = {
								title: firstTen[i].title,
								author: firstTen[i].author_name[0],
								coverId: firstTen[i].cover_i,
								price: randomPrice(),
							};
							arr.push(obj);
						}
						setProductsContent(arr);
						setBookshelfBooks(arr);
						setNeedToFetch(false);
						setIsLoading(false);
					});
				}
			})
			.catch((error) => {
				console.log('Hubo un problema con la petición Fetch:' + error.message);
				setIsLoading(false);
				setErrorExist(true);
			});
	}, [setProductsContent, needToFetch, setNeedToFetch, productsContent]);

	return (
		<>
			<main className='bookshelf'>
				<div className='wrapper'>
					<section>
						<h2>Productos</h2>
						<nav className='book-nav'>
							<Categories />
							<Searchbar />
						</nav>
						<article className='data'>
							{isLoading && <h2>Cargando...</h2>}
							{errorExist && (
								<div className='error'>
									<X size={64} />
									<p>Ocurrió un error.</p>
								</div>
							)}
							{!errorExist && !isLoading && bookshelfBooks && (
								<Books arrayOfBooks={bookshelfBooks} variant='bookshelf' />
							)}
						</article>
					</section>
				</div>
			</main>
		</>
	);
};
