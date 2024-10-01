import React, { createContext, useState, useContext } from 'react';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [email, setEmail] = useState(localStorage.getItem('email'));

    // Método para iniciar sesión
    const login = async (email, password) => {
        const response = await fetch('http://localhost:5000/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        });
        const data = await response.json();
        if (data.token) {
            localStorage.setItem('token', data.token);
            localStorage.setItem('email', data.email);
            setToken(data.token);
            setEmail(data.email);
        }
    };

    // Método para registrar un usuario
    const register = async (email, password) => {
        await fetch('http://localhost:5000/api/auth/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        });
    };

    // Método para cerrar sesión
    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('email');
        setToken(null);
        setEmail(null);
    };

    // Método para obtener el perfil del usuario autenticado
    const getProfile = async () => {
        const response = await fetch('http://localhost:5000/api/auth/me', {
            headers: { Authorization: `Bearer ${token}` },
        });
        return await response.json();
    };

    return (
        <UserContext.Provider value={{ login, register, logout, getProfile, email }}>
            {children}
        </UserContext.Provider>
    );
};
