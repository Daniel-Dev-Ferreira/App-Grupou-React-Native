import React, {useContext} from 'react';
import AuthRoute from './auth.routes';
import AppRoute from './app.routes';
import { NavigationContainer } from '@react-navigation/native';
import {UsuarioContext} from '../contexts/user';

const routes = () => {

    const {user} = useContext(UsuarioContext);

    return(
        <NavigationContainer> 

        {  
         user ? 
            <AppRoute/> 
              :
            <AuthRoute/>
        }
            
        </NavigationContainer>
        
    );
}

export default routes;