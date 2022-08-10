import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { AuthContext, AuthProvider } from "../../src/auth/context";
import { PublicRoute } from "../../src/router/PublicRoute";

describe('Pruebas en PublicRouter', () => {
    test('Si no estoy auth debe de mostrar el childre', () => {
        const contextValue = {
            logged: false
        }
        render(
            <AuthContext.Provider value={contextValue}>
                <PublicRoute>
                    <h1>Ruta publica</h1>
                </PublicRoute>
            </AuthContext.Provider>
        );
        expect(screen.getByText("Ruta publica")).toBeTruthy();
    });

    test('Debe de nevegar si esta auth', () => {
        const contextValue = {
            logged: true,
            user: {
                name: 'Jonathan',
                id: '123'
            }
        }
        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/login']}>
                    <Routes>
                        <Route path="login" element={
                            <PublicRoute>
                                <h1>Ruta publica</h1>
                            </PublicRoute>
                        } />
                        <Route path="marvel" element={<h1>Pagina Marvel</h1>} />
                    </Routes>

                </MemoryRouter>

            </AuthContext.Provider>
        );

        expect(screen.getByText("Pagina Marvel")).toBeTruthy();
    });

});