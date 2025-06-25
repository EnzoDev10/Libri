import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home, Cart, Dashboard } from "./pages/pagesIndex";
import { ProtectedRoute, LoginForm } from "./components/Auth/authIndex";
import {
    CartContextProvider,
    ProductsContextProvider,
    AuthProvider,
} from "./context/contextIndex";

import { Toaster } from "react-hot-toast";

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
                        <Toaster
                            position='bottom-right'
                            toastOptions={{
                                style: {
                                    backgroundColor: "var(--accent-color)",
                                    color: "var(--text-light)",
                                    border: "1px solid var(--text-light)",
                                },
                            }}
                        />
                    </CartContextProvider>
                </ProductsContextProvider>
            </AuthProvider>
        </>
    );
}

export default App;
