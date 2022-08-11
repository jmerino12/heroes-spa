import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../src/auth/context";
import { AppRouter } from "../../src/router/AppRouter";

describe('Pruebas en AppRouter', () => {
    test('Debe de mostrar el login si no esta auth', () => {
        render(
            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={{ logged: false }}>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        );
        expect(screen.getAllByText("Login").length).toBe(2);
    });

    test('Debe de mosdtrar el componente de marvel', () => {
        render(
            <MemoryRouter initialEntries={['/login']}>
                <AuthContext.Provider value={{
                    logged: true, user: {
                        id: 'ABD',
                        name: 'Jonthan'
                    }
                }}>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        );

        expect(screen.getAllByText("Marvel").length).toBeGreaterThanOrEqual(1);

    })
});