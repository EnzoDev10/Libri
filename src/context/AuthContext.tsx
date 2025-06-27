import { createContext, useContext } from "react";
import type { PropsWithChildren } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
interface authProps {
    login: (username: string, isAdmin: boolean) => void;
    logout: () => void;
}

const AuthContext = createContext<authProps | null>(null);

export const UseAuthContext = () => {
    const content = useContext(AuthContext);

    if (!content) {
        throw new Error(
            "UseAuthContext has to be used within <AuthContext.Provider>"
        );
    }

    return content;
};

export function AuthProvider({ children }: PropsWithChildren) {
    const Navigate = useNavigate();

    const login = (username: string, isAdmin: boolean) => {
        const token = `fake-token-${username}`;

        if (isAdmin) {
            localStorage.setItem("isAdmin", `${isAdmin}`);
        }

        localStorage.setItem("authToken", token);
        localStorage.setItem("name", username);
    };

    const logout = () => {
        localStorage.removeItem("authToken");
        localStorage.removeItem("name");
        localStorage.removeItem("isAdmin");
        Navigate("/");
        toast.success("sesion cerrada con exito.");
    };

    return (
        <AuthContext.Provider value={{ login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}
