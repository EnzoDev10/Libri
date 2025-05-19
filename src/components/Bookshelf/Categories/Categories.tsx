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
			</ul>
		</article>
	);
};
