import React, { useEffect, useState } from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Redirect
} from "react-router-dom";

import { useDispatch } from 'react-redux';

import { firebase } from '../firebase/firebase-config'
import { AuthRouter } from './AuthRouter';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

import { JournalScreen } from '../components/journal/JournalScreen';
import { login } from '../actions/auth';

export const AppRouter = () => {

    const dispatch = useDispatch();

    const [checking, setChecking] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
      
      firebase.auth().onAuthStateChanged((user) =>{

        if (user?.uid) {
          dispatch( login( user.uid, user.displayName ) )
          setIsLoggedIn( true )
        } else {
          setIsLoggedIn( false )
        }

        setChecking(false);

      });

    }, [ dispatch, setChecking, setIsLoggedIn ])
    
    if ( checking ) {
      return (
        <h1>Wait...</h1>
      )
    }

    return (
      
      <Router>
        <div>
          <Switch>                  

              <PublicRoute
                isAuthenticated={ isLoggedIn }
                path="/auth"
                component={ AuthRouter }
              /> 

              <PrivateRoute
                exact
                isAuthenticated={ isLoggedIn }
                path="/"
                component={ JournalScreen }
              /> 
              
              {/* <Redirect to="/auth/login"/>   */}

          </Switch>
        </div>
      </Router>
      );
}
