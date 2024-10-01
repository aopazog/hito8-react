import React, { createContext, useState, useContext } from 'react';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [email, setEmail] = useState(localStorage.getItem('email'));

    // Método para iniciar sesión
    const login = async (email, password) => {
        try {
            const response = await fetch('http://localhost:5000/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();
            
            if (response.ok && data.token) {
                // Guardar token y email en localStorage
                localStorage.setItem('token', data.token);
                localStorage.setItem('email', data.email);
                setToken(data.token);
                setEmail(data.email);
            } else {
                alert(data.error || 'Error en la autenticación');
            }
        } catch (error) {
            console.error('Error al iniciar sesión:', error);
        }
    };

    // Método para registrar un usuario
    const register = async (email, password) => {
        try {
            const response = await fetch('http://localhost:5000/api/auth/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                const data = await response.json();
                alert(data.error || 'Error en el registro');
            }
        } catch (error) {
            console.error('Error en el registro:', error);
        }
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
        try {
            const response = await fetch('http://localhost:5000/api/auth/me', {
                headers: { Authorization: `Bearer ${token}` },
            });

            if (response.ok) {
                return await response.json();
            } else {
                console.error('Error al obtener el perfil del usuario');
            }
        } catch (error) {
            console.error('Error al obtener el perfil:', error);
        }
    };

    return (
        <UserContext.Provider value={{ login, register, logout, getProfile, email, token }}>
            {children}
        </UserContext.Provider>
    );
};
