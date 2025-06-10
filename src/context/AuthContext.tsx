import { createContext, useContext, useState } from "react";
import type { PropsWithChildren } from "react";

interface authProps {
    user: null | string;
    login: (username: string) => void;
    logout: (username: string) => void;
}

const AuthContext = createContext<authProps | null>(null);

export function AuthProvider({ children }: PropsWithChildren) {
    const [user, setUser] = useState<null | string>(null);

    const login = (username: string) => {
        const token = `fake-token-${username}`;

        localStorage.setItem("authToken", token);

        setUser(username);
    };

    const logout = () => {
        localStorage.removeItem("authToken");

        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuthContext = () => useContext(AuthContext);
