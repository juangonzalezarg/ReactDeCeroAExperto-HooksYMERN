import { mount } from 'enzyme';
import React from 'react';
import { HomeScreen } from '../../../components/09-useContext/HomeScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('Prueba en <HomeScreen />', () => { 
    
    const user = {
        name: 'Juan',
        email: 'juan@gmail.com'
    }

    const wrapper = mount(
        <UserContext.Provider value={{
            user
        }}>
            <HomeScreen/>
        </UserContext.Provider>
    );

    test('debe de mostrarse correctamente', () => { 
        
        expect(wrapper).toMatchSnapshot();

     });

 });

