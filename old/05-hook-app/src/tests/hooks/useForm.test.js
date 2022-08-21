import { renderHook, act } from '@testing-library/react-hooks'
import { useForm } from '../../hooks/useForm';

describe('Pruebas en useForm', () => { 
    const initialForm = {
        name: 'Strong',
        email: 'juancistrong@gmail.com'
    };


    test('debe de regresar un formulario por defecto', () => { 

        const {result} = renderHook(()=> useForm(initialForm));            
        const [ values, handleInputChange, reset ] = result.current;        
        expect(values).toEqual(initialForm);
        expect(typeof handleInputChange).toBe('function');
        expect(typeof reset).toBe('function');

     });

     
    test('debe de cambiar el valor del formulario (cambiar name)', () => { 

        const {result} = renderHook(()=> useForm(initialForm));
                
        const [,handleInputChange] = result.current;        

        act(()=> {
           
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'Lucía'
                }
            });

        });

        const [formValues] = result.current;        
        
        expect(formValues).toEqual({...initialForm, name: 'Lucía'});

    });

    test('debe de restablecer el formulario con RESET', () => { 

        const {result} = renderHook(()=> useForm(initialForm));
                
        const [,handleInputChange, reset] = result.current;        

        act(()=> {
           
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'Lucía'
                }
            });

            reset();

        });

        const [formValues] = result.current;        
        
        expect(formValues).toEqual(initialForm);

    });
 })