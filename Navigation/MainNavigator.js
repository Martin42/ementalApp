import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';


// Screens MainStack

import Botao from '../Screens/Botao';
import Login from '../Screens/Login';
import Selecionar from '../Screens/Registo/Selecionar';
import Info from '../Screens/Registo/Info';
import Info2 from '../Screens/Registo/Info2';
import Info3 from '../Screens/Registo/Info3';
import Consentimento from '../Screens/Registo/Consentimento';
import Pedido from '../Screens/Registo/Pedido';
import Registo from '../Screens/Registo/Registo';
import QiSaraA from '../Screens/App/Sara/QiSaraA';
import QiSaraB from '../Screens/App/Sara/QiSaraB';
import QiSaraC from '../Screens/App/Sara/QiSaraC';
import QiSaraD from '../Screens/App/Sara/QiSaraD';
import QiSaraE from '../Screens/App/Sara/QiSaraE';
import QiSaraF from '../Screens/App/Sara/QiSaraF';
import Homepage from '../Screens/App/Homepage';




const Stack = createStackNavigator();

const MainStackNavigator = () => {
    return (
     
            <Stack.Navigator
                screenOptions={{
                    header: () => null
                }}

            >
                <Stack.Screen name='Landing' component={Botao}/>
                <Stack.Screen name='Login' component={Login} />
                <Stack.Screen name='Selecionar' component={Selecionar} />
                <Stack.Screen name='Info' component={Info} />
                <Stack.Screen name='Info2' component={Info2} />
                <Stack.Screen name='Info3' component={Info3} />
                <Stack.Screen name='Consentimento' component={Consentimento} />
                <Stack.Screen name='Pedido' component={Pedido} />
                <Stack.Screen name='Registo' component={Registo} />
                <Stack.Screen name='Homepage' component={Homepage} />
                <Stack.Screen name='QiSaraA' component={QiSaraA} /> 
                <Stack.Screen name='QiSaraB' component={QiSaraB} />
                <Stack.Screen name='QiSaraC' component={QiSaraC} />
                <Stack.Screen name='QiSaraD' component={QiSaraD} />
                <Stack.Screen name='QiSaraE' component={QiSaraE} />
                <Stack.Screen name='QiSaraF' component={QiSaraF} />
                
        
            </Stack.Navigator>
       
    )
}



export default MainStackNavigator