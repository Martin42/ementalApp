import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Botão from '../Screens/botao';
import Login from '../Screens/login';


const Stack = createStackNavigator();

export default function Navigator(){

    return (
        <NavigationContainer>
          <Stack.Navigator 
          screenOptions={{
              header: () => null
          }}
          >
              <Stack.Screen name='Landing' component={Botão} />
              <Stack.Screen name='Login' component={Login} />
          </Stack.Navigator>
        </NavigationContainer>
    )
}