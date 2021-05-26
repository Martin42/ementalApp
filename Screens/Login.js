import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import { useState } from 'react/cjs/react.development';
import { auth } from '../Firebase';



function Login({navigation}){

    const [LoginEmail, setLoginEmail] = useState('');
    const [LoginPassword, setLoginPassword] = useState('');

    const signIn = () => {
      auth
          .signInWithEmailAndPassword(LoginEmail, LoginPassword)
          .then(() => {
            navigation.replace('Homepage');
          })
          .catch((error) => alert(error.message));
          console.log(auth.currentUser.uid);

          
    };


    return (
      <View style={styles.container}>
          <StatusBar style="auto" />
          <Image
                    source={require('../images/relief.png')}
                    style={styles.relief}
                />

      <View style={styles.container}>

                <View style={styles.inputField}> 
                  
                          <TextInput 
                            placeholder='Nome do Utilizador'
                            placeholderTextColor= '#D7D7D7'
                            style={styles.inputEmail}
                            onChangeText={LoginEmail => setLoginEmail(LoginEmail)}
                        
                          />
                    
                          <TextInput 
                            secureTextEntry={true}
                            placeholder='Palavra-Passe'
                            placeholderTextColor= '#D7D7D7'
                            style={styles.inputPassword}
                            onChangeText={LoginPassword => setLoginPassword(LoginPassword)}
                        
                          />

                      <Text style={styles.subtitle2}> Esqueceste-te da palavra-passe? </Text>

                  </View>

            
        

            <TouchableOpacity 
                  style={styles.entrar}
                  onPress={() => signIn()}
                  >
                    <Text style={styles.loginText}>Entrar</Text>
            </TouchableOpacity>

                <Text style={styles.subtitle} > Ainda não tens conta?  
                
                       <Text 
                      style={styles.link}
                      onPress={() => navigation.navigate('Selecionar')}
                      > 
                          Regista-te 
                      </Text> 
                      
                </Text>
        </View>
   
      </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
  
    },
    
  
      relief: {
         
        width: '45%', 
        height: '22%',
        marginTop: '25%',
        resizeMode: 'contain',
        
    },
  
    loginText: {
        color: 'white',
        textAlign: 'center',
        margin: '3%', 
        fontWeight: 'bold',
        fontSize: 18, 
  
    },
  
    subtitle: {
        fontWeight: 'bold',
        color: '#D7D7D7',
        textAlign: 'center',
        marginTop: '6%',
        fontSize: 15,
    },
  
    subtitle2: {
        marginTop: '4%',
        fontWeight: 'bold',
        color: '#D7D7D7',
        textAlign: 'center',
        fontSize: 15,
    },
  
  
    link: {
      color: '#6578B3',
      textDecorationLine: 'none',
      textDecorationColor: '#6578B3',
      textAlign: 'center',
      marginTop: '.2%',
      fontSize: 15,
      marginBottom: '15%',
      fontWeight: 'bold',
      
    },
  
    inputField: {
    
      width: '80%',
      height: '10%',
      marginBottom:'10%',
      
     
    },
  
    inputEmail: {
        borderColor: '#D7D7D7',
        borderBottomWidth: 1,
        padding: 5,
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: '3%',
        color: 'black',
        
      
    },
  
    inputPassword: {
      borderColor: '#D7D7D7',
      borderBottomWidth: 1,
      padding: 5,
      fontSize: 15,
      fontWeight: 'bold',
      marginTop: '5%',
    }, 
  
    entrar: {
      marginTop: '50%',
      borderColor: '#6578B3',
      borderStyle: 'solid',
      borderRadius: 20,
      overflow: 'hidden',
      backgroundColor: '#6578B3',
      width: '80%',
    }
  
  
  
  });

  export default Login;