import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home, Cart, Dashboard } from "./pages/pagesIndex";
import { ProtectedRoute, LoginForm } from "./Auth/authIndex";
import {
    CartContextProvider,
    ProductsContextProvider,
    AuthProvider,
} from "./context/contextIndex";

function App() {
    return (
        <>
            <AuthProvider>
                <ProductsContextProvider>
                    <CartContextProvider>
                        <Routes>
                            <Route path='/' element={<Home />} />

                            <Route
                                path='/carrito'
                                element={
                                    <ProtectedRoute>
                                        <Cart />
                                    </ProtectedRoute>
                                }
                            />
                            <Route path='/login' element={<LoginForm />} />
                            <Route
                                path='/dashboard'
                                element={
                                    <ProtectedRoute>
                                        <Dashboard />
                                    </ProtectedRoute>
                                }
                            ></Route>
                        </Routes>
                    </CartContextProvider>
                </ProductsContextProvider>
            </AuthProvider>
        </>
    );
}

export default App;
