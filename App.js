import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import Navigator from '../ementalApp/Route/route';


function Botão({navigation}) {
  return (
          <View style={styles.container}>
                <StatusBar style="auto" />
                <Image
                    source={require('../ementalApp/images/relief.png')}
                    style={styles.relief}
                />


            <TouchableOpacity style={styles.registo}>
                <View>
                    <Text style={styles.registoText}>Registo</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity 
                style={styles.login}
                onPress={() => navigation.navigate('Login')}
                >
                    <View>
                        <Text style={styles.loginText}>Login</Text>
                    </View>
            </TouchableOpacity>

                <Text style={styles.subtitle}> Ainda não conheces o projeto? </Text>

                <Text style={styles.link} onPress={() => Linking.openURL('https://depressaodeep.wixsite.com/emental')}>
                    Visita o nosso website
                </Text>

          
      </View>
  )
}


function Login(){
    return (
      <View>
          <Text>Bem vindo à página log</Text>
          <StatusBar style="auto" />
      </View>
  )
}



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
          </Stack.Navigator>
        </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',

  },
    relief: {
       
      width: '45%', 
      height: '22%',
      marginTop: '25%',
      resizeMode: 'contain',
      marginBottom: '95%',
  },

  registo: {
      width: '80%',
      borderWidth: 1.5,
      borderColor: '#6578B3',
      borderStyle: 'solid',
      borderRadius: 20,
      overflow: 'hidden',
      
  },

  login: {
      marginTop: '2%',
      width: '80%',
      borderColor: '#6578B3',
      borderStyle: 'solid',
      borderRadius: 20,
      overflow: 'hidden',
      backgroundColor: '#6578B3',
      
  },

  registoText: {
      color: '#6578B3',
      textAlign: 'center',
      margin: '3%',   
      fontWeight: 'bold',
      fontSize: 18,
  },

  loginText: {
      color: 'white',
      textAlign: 'center',
      margin: '3%', 
      fontWeight: 'bold',
      fontSize: 18, 

  },

  subtitle: {
      fontWeight: '100',
      color: 'grey',
      textAlign: 'center',
      marginTop: '6%',
      fontSize: 15,
  },

  link: {
      color: '#6578B3',
      textDecorationLine: 'underline',
      textDecorationColor: '#6578B3',
      textAlign: 'center',
      marginTop: '.2%',
      fontSize: 15,
      marginBottom: '15%',
  },
});
