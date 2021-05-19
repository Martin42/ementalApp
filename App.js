import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Selecionar from './Screens/Registo/Selecionar';
import Login from './Screens/Login';
import Botao from './Screens/Botao';
import Info from './Screens/Registo/Info';
import Info2 from './Screens/Registo/Info2';
import Consentimento from './Screens/Registo/Consentimento';
import Pedido from './Screens/Registo/pedido';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
          <Stack.Navigator 
          screenOptions={{
              header: () => null
          }}
          >
              <Stack.Screen name='Landing' component={Botao} />
              <Stack.Screen name='Login' component={Login} />
              <Stack.Screen name='Registo' component={Selecionar} />
              <Stack.Screen name='Info' component={Info} /> 
              <Stack.Screen name='Info2' component={Info2} />
              <Stack.Screen name='Consentimento' component={Consentimento} />
              <Stack.Screen name='Pedido' component={Pedido} />
          </Stack.Navigator>
        </NavigationContainer>
  );
}


