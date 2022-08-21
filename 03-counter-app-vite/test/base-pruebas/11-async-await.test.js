import { getImagen } from '../../src/base-pruebas/11-async-await';


describe('Pruebas en 11-async-await', () => { 
   
    test('getImagen debe de retornar un URL de la imagen', async() => { 
        
        const url = await getImagen();
        
        expect(typeof url).toBe('string');
    });

    test('getImagen debe de retornar un error sin no tenemos api key', async() => { 
        
        const error = await getImagen();
        
        expect( error ).toBe('No se encontró la imagen');

    });

 });