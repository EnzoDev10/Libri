import './Bookshelf.css';

import { Categories } from './Categories/Categories';

import { Searchbar } from './SearchBar/SearchBar';

export const Bookshelf = () => {
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
					</section>
				</div>
			</main>
		</>
	);
};
