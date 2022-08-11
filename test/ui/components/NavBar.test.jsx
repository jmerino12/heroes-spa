import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../src/auth/context";
import { Navbar } from "../../../src/ui/components/Navbar";

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate
}) );

describe('Pruebas en NavBar', () => { 
    const contextValue = {
        logged: true,
        user:{
            name: 'Jonathan',
            id: '123'
        },
        logout: jest.fn()
    }

    beforeEach(() => jest.clearAllMocks());
    test('Debe de mostrar el nombre del usuario', () => { 

        render(
            <AuthContext.Provider value={contextValue} >
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        );
        expect(screen.getByText("Jonathan")).toBeTruthy();
        
     });


     test('Debe de llamar el logout y navigate cuando se hace click en el botton', () => { 
        render(
            <AuthContext.Provider value={contextValue} >
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        );
        const btnLogout = screen.getByRole('button');
        fireEvent.click(btnLogout);

        expect(contextValue.logout).toHaveBeenCalled();
        expect(mockedUseNavigate).toHaveBeenCalledWith('/login', {"replace":true});
    
      });
 });