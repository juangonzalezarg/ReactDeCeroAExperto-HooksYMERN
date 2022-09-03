import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const singInWithGoogle = async() => {
    try {
        const result = await signInWithPopup( FirebaseAuth, googleProvider );

        // const credentials = GoogleAuthProvider.credentialFromResult( result );        

        const { displayName, email, photoURL, uid } = result.user;

        return {
            ok: true,
            // User info
            displayName, email, photoURL, uid
        }

    } catch (error) {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;

        return {
            ok: false,
            errorMessage,
        }   
        
    }
}

export const registerUserWithEmailPassword = async({ displayName, email, password }) => {
    try {
        const result = await createUserWithEmailAndPassword( FirebaseAuth, email, password );
        const { photoURL, uid } = result.user;
        
        // TODO: actualizar el displayName en Firebase

        return {
            ok: true,
            uid,
            photoURL,
            email,
            displayName
        }

    } catch (error) {
        return { ok: false, errorMessage: error.errorMessage }
    }
}