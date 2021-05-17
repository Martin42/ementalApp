import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Selecionar from './Screens/Registo/Selecionar';
import Login from './Screens/Login';
import Botão from './Screens/Botao';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
          <Stack.Navigator 
          screenOptions={{
              header: () => null
          }}
          >
              <Stack.Screen name='Landing' component={Botão} />
              <Stack.Screen name='Login' component={Login} />
              <Stack.Screen name='Registo' component={Selecionar} />
          </Stack.Navigator>
        </NavigationContainer>
  );
}


