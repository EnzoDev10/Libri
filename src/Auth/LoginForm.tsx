import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/contextIndex";

export const LoginForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const authContext = useAuthContext();
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Authentication simulation
        if (username === "admin" && password === "1234") {
            authContext?.login(username);
            navigate("/dashboard");
        } else {
            alert("Credenciales incorrectas");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>registrarse</h2>
            <div>
                <label>Usuario:</label>
                <input
                    type='text'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div>
                <label>Contraseña:</label>
                <input
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button type='submit'>Sign In</button>
        </form>
    );
};
