import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home,Cart } from './pages/pagesIndex';
function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Home />} />

				<Route path='/carrito' element={<Cart />} />
			</Routes>
		</>
	);
}

export default App;
