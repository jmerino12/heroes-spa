import React, { useReducer } from 'react'
import { AuthContext } from './';
import { authReducer } from './authReducer';

export const AuthProvider = ({ children }) => {

    const [state, dispatch] = useReducer(authReducer, { logged:false });

    return (
        <AuthContext.Provider value={{}}>
            {children}
        </AuthContext.Provider>
    );
}
