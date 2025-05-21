import { useEffect, useState } from 'react';

import { Categories } from './Categories/Categories';

import { Searchbar } from './SearchBar/SearchBar';
import { Card } from './Card/Card';

import './Bookshelf.css';

import type { Book } from '../interfaces';
import { X } from 'lucide-react';

function randomPrice() {
	const max = 50000;
	const min = 12000;
	const randomInt = Math.floor(Math.random() * (max - min)) + min;

	return Number(Intl.NumberFormat('es-AR').format(randomInt));
}

function Books({ arr }: { arr: Book[] }) {
	return (
		<>
			{Array.from({ length: arr.length }).map((_, index) => (
				<Card
					title={`${arr[index].title}- cover ${arr[index].coverId}`}
					author={arr[index].author}
					coverId={arr[index].coverId}
					price={arr[index].price}
					key={index}
				/>
			))}
		</>
	);
}

export const Bookshelf = () => {
	const [isLoading, setIsLoading] = useState(true);
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
						console.log(firstTen);
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
				} else {
					console.log('Hubo un problema con la petición Fetch');
					setIsLoading(false);
				}
			})
			.catch((error) => {
				console.log('Hubo un problema con la petición Fetch:' + error.message);
				setIsLoading(false);
			});
	}, []);

	return (
		<>
			<main>
				<div className='wrapper'>
					<section>
						<h2>Productos</h2>
						<nav className='book-nav'>
							<Categories />
							<Searchbar />
						</nav>
						<article className='data'>
							{isLoading && <h2>Cargando...</h2>}
							{!isLoading && booksData[0] && <Books arr={booksData} />}
							{!isLoading && !booksData[0] && (
								<div className='error'>
									<X size={64} />
									<p>Ocurrió un error.</p>
								</div>
							)}
						</article>
					</section>
				</div>
			</main>
		</>
	);
};
