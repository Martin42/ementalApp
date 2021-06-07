import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
<<<<<<< Updated upstream
import MainStackNavigator from './Navigation/MainNavigator';
=======
import { createStackNavigator } from '@react-navigation/stack';
import Selecionar from './Screens/Registo/Selecionar';
import Login from './Screens/Login';
import Botao from './Screens/Botao';
import Info from './Screens/Registo/Info';
import Info2 from './Screens/Registo/Info2';
import Info3 from './Screens/Registo/Info3';
import Consentimento from './Screens/Registo/Consentimento';
import Pedido from './Screens/Registo/Pedido';
import Registo from './Screens/Registo/Registo';
import Homepage from './Screens/App/Homepage';
import QiSaraA from './Screens/App/Sara/QiSaraA';
import QiSaraB from './Screens/App/Sara/QiSaraB';
import QiSaraC from './Screens/App/Sara/QiSaraC';
import PlaylistSara from './Screens/App/Sara/PlaylistSara';
>>>>>>> Stashed changes


export default function App() {

    return (

<<<<<<< Updated upstream
      <NavigationContainer>
          <MainStackNavigator />
      </NavigationContainer>
  
  
    )
  }
  
=======
    <NavigationContainer>
          <Stack.Navigator 
          screenOptions={{
              header: () => null
          }}
          >
              <Stack.Screen name='Landing' component={Botao} />
              <Stack.Screen name='Login' component={Login} />
              <Stack.Screen name='Selecionar' component={Selecionar} />
              <Stack.Screen name='Info' component={Info} /> 
              <Stack.Screen name='Info2' component={Info2} />
              <Stack.Screen name='Info3' component={Info3} />
              <Stack.Screen name='Consentimento' component={Consentimento} />
              <Stack.Screen name='Pedido' component={Pedido} />
              <Stack.Screen name='Registo' component={Registo} />
              <Stack.Screen name='Homepage' component={Homepage} options={{gestureEnabled: false}}/>
              <Stack.Screen name='QiSaraA' component={QiSaraA} />
              <Stack.Screen name='QiSaraB' component={QiSaraB} />
              <Stack.Screen name='QiSaraC' component={QiSaraC} />
              <Stack.Screen name='PlaylistSara' component={PlaylistSara} />
          </Stack.Navigator>
>>>>>>> Stashed changes

  


