import React, { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem('token') || null);
    const [email, setEmail] = useState(localStorage.getItem('email') || null);
    const [userProfile, setUserProfile] = useState(null);

    // Almacenar o eliminar datos en localStorage cuando cambian
    useEffect(() => {
        if (token) {
            localStorage.setItem('token', token);
            localStorage.setItem('email', email);
        } else {
            localStorage.removeItem('token');
            localStorage.removeItem('email');
            setUserProfile(null);
        }
    }, [token, email]);

    // Método para hacer login
    const login = async (email, password) => {
        try {
            const response = await fetch('http://localhost:5000/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });
            if (!response.ok) throw new Error('Error en login');
            const data = await response.json();
            setToken(data.token);
            setEmail(data.email);
        } catch (error) {
            console.error(error);
            alert(error.message);
        }
    };

    // Método para registrarse
    const register = async (email, password) => {
        try {
            const response = await fetch('http://localhost:5000/api/auth/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });
            if (!response.ok) throw new Error('Error en registro');
            const data = await response.json();
            setToken(data.token);
            setEmail(data.email);
        } catch (error) {
            console.error(error);
            alert(error.message);
        }
    };

    // Método para hacer logout
    const logout = () => {
        setToken(null);
        setEmail(null);
    };

    // Método para obtener el perfil del usuario autenticado
    const fetchProfile = async () => {
        if (!token) return null;
        try {
            const response = await fetch('http://localhost:5000/api/auth/me', {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            if (!response.ok) {
                throw new Error('Token inválido o expirado');
            }
            const data = await response.json();
            setUserProfile(data);
            return data;
        } catch (error) {
            console.error(error);
            alert('Tu sesión ha expirado, por favor inicia sesión de nuevo.');
            logout(); // Cerrar sesión si hay un error en el perfil
            return null;
        }
    };

    return (
        <UserContext.Provider value={{ token, email, userProfile, login, register, logout, fetchProfile }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);
