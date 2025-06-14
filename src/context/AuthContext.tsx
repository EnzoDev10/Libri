import { createContext, useContext } from "react";
import type { PropsWithChildren } from "react";

interface authProps {
    login: (username: string) => void;
    logout: () => void;
}

const AuthContext = createContext<authProps | null>(null);

export function AuthProvider({ children }: PropsWithChildren) {
    const login = (username: string) => {
        const token = `fake-token-${username}`;

        localStorage.setItem("authToken", token);
        localStorage.setItem("name", username);
    };

    const logout = () => {
        localStorage.removeItem("authToken");
        localStorage.removeItem("name");
    };

    return (
        <AuthContext.Provider value={{ login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuthContext = () => useContext(AuthContext);
