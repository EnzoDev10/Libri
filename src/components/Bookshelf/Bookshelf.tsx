import { useEffect, useState } from 'react';

import { randomInt } from '../../helpers';

import { Categories } from './Categories/Categories';

import { Searchbar } from './SearchBar/SearchBar';

import { Books } from '../index';

import { X } from 'lucide-react';

import './Bookshelf.css';

import type { Book } from '../../interfaces';

function randomPrice() {
	const max = 50000;
	const min = 12000;
	const ranNum = randomInt(min, max);

	return Number(Intl.NumberFormat('es-AR').format(ranNum));
}

export const Bookshelf = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [errorExist, setErrorExist] = useState(false);
	const [booksData, setBooksData] = useState<Book[]>([
		{
			title: 'title',
			author: 'author',
			coverId: 1234567,
			price: 9.99,
		},
	]);

	useEffect(() => {
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
						setBooksData(arr);
						setIsLoading(false);
					});
				}
			})
			.catch((error) => {
				console.log('Hubo un problema con la petición Fetch:' + error.message);
				setIsLoading(false);
				setErrorExist(true);
			});
	}, []);

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
							{!errorExist && !isLoading && booksData[0] && (
								<Books arrayOfBooks={booksData} variant='bookshelf' />
							)}
						</article>
					</section>
				</div>
			</main>
		</>
	);
};
