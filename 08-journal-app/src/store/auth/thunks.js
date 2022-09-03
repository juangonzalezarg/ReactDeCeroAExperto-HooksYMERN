import { async } from '@firebase/util';
import { registerUserWithEmailPassword, singInWithGoogle } from '../../firebase/providers';
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

export const starCreatingUserWithEmailPassword = ({ email, password, displayName }) => {
    return async( dispatch ) => {

        dispatch( checkingCredentials() );
        const result = await registerUserWithEmailPassword({ email, password, displayName });

        console.log(result);

    }
}