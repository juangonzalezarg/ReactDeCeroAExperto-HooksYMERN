import { useDispatch, useSelector } from 'react-redux';
import { calendarApi } from '../api';
import { onChecking, onLogin, onLogout, clearErrorMessage, onLogoutCalendar } from '../store';

export const useAuthStore = () => {
  
    const { status, user, errorMessage } = useSelector( state => state.auth )
    const dispatch = useDispatch()    

    const startLogin = async({ email, password }) => {
        dispatch( onChecking() );

        try {
            
            const { data } = await calendarApi.post('/auth', { email, password });
            localStorage.setItem('token', data.token );
            localStorage.setItem('token-init-date', new Date().getTime() );            
            dispatch( onLogin({ name: data.name, uid: data.uid }) );

        } catch (error) {
            dispatch( onLogout('Credenciales incorrectas') );
            
            setTimeout(() => {
                dispatch( clearErrorMessage() );
            }, 10);
            
        }
    }

    const startRegister = async({ name, email, password }) => {
        dispatch( onChecking() );
        
        try {
            
            const { data } = await calendarApi.post('/auth/new', { name, email, password });
            localStorage.setItem('token', data.token );
            localStorage.setItem('token-init-date', new Date().getTime() );            
            dispatch( onLogin({ name: data.name, uid: data.uid }) );

        } catch (error) {
            // const { email, name, password } = error.response.data.errors;
            //console.log(error.response.data)
            
            // if ( name !== undefined ) {
            //     dispatch( onLogout(name.msg) );                
            // } else if ( email !== undefined ) {
            //     dispatch( onLogout(email.msg) );                
            // } else if ( password !== undefined ) {
                dispatch( onLogout() );                
            // }

            setTimeout(() => {
                dispatch( clearErrorMessage() );
            }, 10); 
            
        }
    }

    const checkAuthToken = async() => {

        const token = localStorage.getItem('token');
        if ( !token ) return dispatch( onLogout() );

        try {
            
            const { data } = await calendarApi.get('/auth/renew');
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime() );            
            dispatch( onLogin({ name: data.name, uid: data.uid }) );

        } catch (error) {
            localStorage.clear();
            dispatch( onLogout() );
        }

    }

    const startLogout = () => {
        localStorage.clear();
        dispatch( onLogoutCalendar() );
        dispatch( onLogout() );        
    }

    return {
        // Propiedades
        errorMessage,
        status, 
        user, 

        // M??todos
        checkAuthToken,
        startLogin,
        startLogout,
        startRegister,
    }
}
