const { authReducer } = require("../../../src/auth/context/authReducer");
const { types } = require("../../../src/auth/types/types");

describe('Pruebas en el AuthReducer', () => { 
    test('debe retornar el estado por defecto', () => { 
        const state= authReducer({
            logged: false,
        },{});
        expect(state).toEqual({logged: false});
        
     });


     test('debe de (login) llamar el login autenticar y establecer un usuario', () => { 

        const action = {
            type:  types.login,
            payload: {
                name: "Jonathan",
                id: "ABC"
            }
        }
        const state = authReducer({
            logged: false,
        },action);
        expect(state).toEqual({
            logged: true,
            user: action.payload
        });
        
    });


     test('debe de (logotu) borrar el name del usuario y logged false', () => { 
        const state = {
            logged: true,
            user: {
               id: '123',
               name: 'Jonathan' 
            }
        }
        const action = {
            type:  types.logout,
        }
        const newState = authReducer(state, action);
        expect(newState).toEqual({logged: false});
        
    });
 });