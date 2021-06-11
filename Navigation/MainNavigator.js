import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';


// Screens MainStack

import Botao from '../Screens/Botao';
import Login from '../Screens/Login';
import Selecionar from '../Screens/Registo/Selecionar';
import Info from '../Screens/Registo/Info';
import Info2 from '../Screens/Registo/Info2';
import Info3 from '../Screens/Registo/Info3';
import Info4 from '../Screens/Registo/Info4';
import Info5 from '../Screens/Registo/Info5';
import Info6 from '../Screens/Registo/Info6';
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
import Ep1_Sara from '../Screens/App/Sara/Ep1_Sara';
import PlaylistSara from '../Screens/App/Sara/PlaylistSara';
import Apoio from '../Screens/App/Apoio';
import Esclarecimento from '../Screens/App/Esclarecimento';
import Conversa from '../Screens/App/Conversa';
import Responder from '../Screens/App/Responder';




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
                <Stack.Screen name='Info4' component={Info4} />
                <Stack.Screen name='Info5' component={Info5} />
                <Stack.Screen name='Info6' component={Info6} />
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
                <Stack.Screen name='Apoio' component={Apoio} />
                <Stack.Screen name='Esclarecimento' component={Esclarecimento} />
                <Stack.Screen name='Conversa' component={Conversa} />
                <Stack.Screen name='Responder' component={Responder} />
                <Stack.Screen name='Ep1_Sara' component={Ep1_Sara} />
                <Stack.Screen name='PlaylistSara' component={PlaylistSara} />
                
        
            </Stack.Navigator>
       
    )
}



export default MainStackNavigator