import { render, screen, fireEvent } from '@testing-library/react';
import { UserContext } from '../../09-useContext/context/UserContext';
import { LoginPage } from '../../09-useContext/LoginPage';


describe('Pruebas en <LoginPage />', () => { 
    
    test('debe de mostrar el componente sin el usuario', () => { 
        render(
            <UserContext.Provider value={{ user: null }}>
                <LoginPage/>
            </UserContext.Provider>
        );
        
        const preTag = screen.getByLabelText('pre');

        expect( preTag.innerHTML ).toBe( 'null' );

     });

    test('debe de llamar el setUser cuando se hace click en el botón', () => { 

        const setUserMock = jest.fn();

        render(
            <UserContext.Provider value={{ user: null, setUser: setUserMock }}>
                <LoginPage/>
            </UserContext.Provider>
        );
        
        const buttonElement = screen.getByRole('button');

        fireEvent.click(buttonElement);

        expect( setUserMock ).toHaveBeenCalledWith({id:101, name: 'Juan González', email: 'juangonzalez@google.com'});
        

    });

 });