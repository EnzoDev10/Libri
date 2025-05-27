import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home, Cart } from './pages/pagesIndex';

import {
	CartContextProvider,
	ProductsContextProvider,
} from './context/contextIndex';
function App() {
	return (
		<>
			<ProductsContextProvider>
				<CartContextProvider>
					<Routes>
						<Route path='/' element={<Home />} />

						<Route path='/carrito' element={<Cart />} />
					</Routes>
				</CartContextProvider>
			</ProductsContextProvider>
		</>
	);
}

export default App;
