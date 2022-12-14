import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { LoginScreen } from '../components/login/LoginScreen';

import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

import { DashboardRoutes } from './DashboardRoutes';


export const AppRouter = () => {
  return (
    <BrowserRouter>

        <Routes>
            
            <Route path='/login' element = { 
                <PublicRoute>
                   <LoginScreen/>
                </PublicRoute> 
              } 
            />

            {/* <Route path="/login" element={<LoginScreen />} /> */}


            <Route path='/*' element = { 
                <PrivateRoute>
                   <DashboardRoutes/>
                </PrivateRoute> 
              } 
            />
            
            {/* <Route path='/*' element = { <DashboardRoutes/> } /> */}

        </Routes>
    </BrowserRouter>
  )
}
