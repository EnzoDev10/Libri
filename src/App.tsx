import './App.css';
import { Home } from './pages/pagesIndex';

import { CartContextProvider } from './context/CartContext';

function App() {
	return (
		<>
			<CartContextProvider>
				<Home />
				{/* 				<Cart />
				 */}
			</CartContextProvider>
		</>
	);
}

export default App;
