/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from 'react';
import studentsData from '../data/data.js';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    // Current user state from localStorage or initial null
    const [user, setUser] = useState(() => {
        const savedId = localStorage.getItem('userId');
        const isLogged = localStorage.getItem('isLoggedIn') === 'true';
        if (isLogged && savedId && studentsData[savedId]) {
            return studentsData[savedId];
        }
        return null;
    });

    const [role, setRole] = useState(() => {
        return localStorage.getItem('role') || '';
    });

    const login = (userId, password) => {
        const student = studentsData[userId];
        if (student && String(student.password) === String(password)) {
            setUser(student);
            setRole(student.Role);
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('userId', String(userId));
            localStorage.setItem('role', student.Role);
            return { success: true, role: student.Role, user: student };
        }
        return { success: false, message: 'Invalid Roll Number / User ID or Password' };
    };

    const logout = () => {
        setUser(null);
        setRole('');
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('userId');
        localStorage.removeItem('role');
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                role,
                isLoggedIn: !!user,
                login,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
