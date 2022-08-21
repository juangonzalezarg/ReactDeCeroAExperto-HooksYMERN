import { fireEvent, render, screen } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';




describe('Pruebas en <GifExpertApp />', () => { 
    
    test('debe de cambiar el input value', () => { 
        
        const inputValue = 'Pokemón';

        render( <GifExpertApp />);
        
        const input = screen.getByRole('textbox');

        fireEvent.input( input, { target: { value: inputValue } } );

        expect( input.value ).toBe( inputValue );

     });

     test('No debe agregar dos veces la misma categoría', () => { 
        
        const inputValue = 'Pokemón';

        render( <GifExpertApp />);
        
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: { value: inputValue } } );
        fireEvent.submit( form );

        fireEvent.input( input, { target: { value: inputValue } } );
        fireEvent.submit( form );

        expect( screen.getAllByText( inputValue ).length).toBe( 1 );

     });

 });