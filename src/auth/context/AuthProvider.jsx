import React, { useReducer } from 'react'
import { AuthContext } from './';
import { authReducer } from './authReducer';
import { types } from '../types/types';


export const AuthProvider = ({ children }) => {

    const [state, dispatch] = useReducer(authReducer, { logged: false });

    const login = (name = '') => {
        const action = {
            type: types.login,
            payload: {
                id: 'ABD',
                name
            }
        }
        dispatch(action);
    }

    return (
        <AuthContext.Provider value={{
            login,
            ...state
        }}>
            {children}
        </AuthContext.Provider>
    );
}
