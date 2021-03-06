import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Router from './routes';
import { UsuarioProvider} from './contexts/user';
import './services/firebase';

export default function App() {
  return (
    <UsuarioProvider>
      <Router/>
    </UsuarioProvider>
    
  );
}


