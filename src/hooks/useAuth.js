import { useState } from 'react';

export const useAuth = () => {
    const [auth, setAuth] = useState(() => {
        const savedAuth = localStorage.getItem('auth');
        return savedAuth ? JSON.parse(savedAuth) : null;
    });

    const setAuthWithLog = (value) => {
        console.log('Setting auth state:', value);
        setAuth(value);
        if (value) {
            localStorage.setItem('auth', JSON.stringify(value));
        } else {
            localStorage.removeItem('auth');
        }
    };

    const logout = () => {
        console.log('Logging out');
        setAuth(null);
        localStorage.removeItem('auth');
    };

    return { auth, setAuth: setAuthWithLog, logout };
};
