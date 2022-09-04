import { async } from '@firebase/util';
import { loginWithEmailPassword, logoutFirebase, registerUserWithEmailPassword, singInWithGoogle } from '../../firebase/providers';
import { checkingCredentials, login, logout } from './authSlice';

export const checkingAuthentication = ( email, password ) => {
    
    return async( dispatch ) => {
        dispatch( checkingCredentials() );
    }
}

export const startGoogleSignIn = ( email, password ) => {
    
    return async( dispatch ) => {
        dispatch( checkingCredentials() );

        const result = await singInWithGoogle();
        
        if ( !result.ok ) return dispatch( logout( result.errorMessage  ) );
        
        dispatch( login( result ) );
    }
}

export const startCreatingUserWithEmailPassword = ({ email, password, displayName }) => {
    return async( dispatch ) => {

        dispatch( checkingCredentials() );
        const { ok, uid, photoURL, errorMessage } = await registerUserWithEmailPassword({ email, password, displayName });
        
        if ( !ok ) return dispatch( logout({ errorMessage }) );  

        dispatch( login({ uid, displayName, email, photoURL }) );

    }
}

export const startLoginWithEmailPassword = ({ email, password }) => {
    return async( dispatch ) => {      
        dispatch( checkingCredentials() );
        
        const { ok, uid, displayName, photoURL, errorMessage } = await loginWithEmailPassword({ email, password });
        
        if ( !ok ) return dispatch( logout({ errorMessage }) );  

        dispatch( login({ uid, displayName, email, photoURL }) );

    }
}

export const startLogout = () => {
    return async( dispatch ) => {      
        await logoutFirebase();

        dispatch( logout({}) );
    }
}