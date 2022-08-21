import { shallow } from 'enzyme';
import React from 'react';
import { MultipleCustomHooks } from '../../../components/03-examples/MultipleCustomHooks';
import { useCounter } from '../../../hooks/useCounter';
import { useFetch } from '../../../hooks/useFetch';

jest.mock('../../../hooks/useFetch');
jest.mock('../../../hooks/useCounter');


describe('Pruebas en <MultipleCustomHooks />', () => { 

    beforeEach(()=>{
        useCounter.mockReturnValue({
            counter: 1,
            increment: () => {}
        })
    })

    test('debe de mostrarse correctamente', () => {         

        useCounter.mockReturnValue({
            counter: 10,
            increment: () => {}
        });

        useFetch.mockReturnValue({
            data:null,
            loading: true,
            error: null
        })

        const wrapper = shallow(<MultipleCustomHooks/>);
        expect(wrapper).toMatchSnapshot();

     });

     test('debe de mostrar la información', () => { 
            
        useFetch.mockReturnValue({
            data:[{
                author: 'Juan',
                quote: 'Hola Mundo'
            }],
            loading: false,
            error: null
        });

        const wrapper = shallow(<MultipleCustomHooks/>);
        
        expect(wrapper.find('.alert').exists()).toBe(false);
        expect(wrapper.find('.mb-0').text().trim()).toBe('Hola Mundo');
        expect(wrapper.find('footer').text().trim()).toBe('Juan');

     });
 });