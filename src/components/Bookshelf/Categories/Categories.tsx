import './categories.css';

// ! Replace with a dropdown menu

export const Categories = () => {
	return (
		<article className='categories'>
			<ul>
				<li>
					<input type='radio' id='Todos' name='categories' />
					<label htmlFor='All'>Todos</label>
				</li>
				<li>
					<input type='radio' id='Ciencia' name='categories' />
					<label htmlFor='Ciencia'>Ciencia Ficción</label>
				</li>
				<li>
					<input type='radio' id='Romance' name='categories' />
					<label htmlFor='Romance'>Romance</label>
				</li>
			</ul>
		</article>
	);
};
