import React, { useReducer } from 'react'
import { AuthContext } from './';
import { authReducer } from './authReducer';
import { types } from '../types/types';

const init = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    return {
        logged: !!user,
        user
    }
}


export const AuthProvider = ({ children }) => {

    const [state, dispatch] = useReducer(authReducer, { }, init);

    const login = (name = '') => {
        const user =  {
            id: 'ABD',
            name
        }
        const action = {
            type: types.login,
            payload: user

        }
        localStorage.setItem('user', JSON.stringify(user));
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
