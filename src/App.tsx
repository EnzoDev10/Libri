import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home, Cart } from './pages/pagesIndex';

import { CartContextProvider } from './context/CartContext';

function App() {
	return (
		<>
			<CartContextProvider>
				<Routes>
					<Route path='/inicio' element={<Home />} />

					<Route path='/carrito' element={<Cart />} />
				</Routes>
			</CartContextProvider>
		</>
	);
}

export default App;
