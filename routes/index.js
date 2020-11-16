import React from 'react';
import AuthRoute from './auth.routes';
import AppRoute from './app.routes';
import { NavigationContainer } from '@react-navigation/native';

const routes = () => {

    return(
        <NavigationContainer> 

        {  
         false ? 
            <AppRoute/> 
              :
            <AuthRoute/>
        }
            
        </NavigationContainer>
        
    );
}

export default routes;