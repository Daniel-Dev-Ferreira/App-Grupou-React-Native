import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Chat from '../src/screen/Chat/'
import Settings from '../src/screen/Settings/';

const Tab = createBottomTabNavigator();

const AppRoute = () => {
    return (
        <Tab.Navigator
            initialRouteName='Grupos'
            tabBarOptions ={
                {
                    activeTintColor: 'tomato',
                    inactiveTintColor: '#ccc'
                }
            }
        >
            <Tab.Screen 
            name='Grupos'
            component={Chat}
            options={
                {
                 tabBarIcon: ({color}) => (
                    <MaterialCommunityIcons
                    name='chat'
                    color= {color}
                    size={32}
                    />
                   ) 
                }
            }
             />
            <Tab.Screen 
            name='Configurações'
            component={Settings}
            options={
                {
                   tabBarIcon: ({color}) => (
                    <MaterialCommunityIcons
                    name='settings'
                    size={32}
                    color={color}
                    />
                   ) 
                }
            }
             />
        </Tab.Navigator>
    )
}

export default AppRoute;