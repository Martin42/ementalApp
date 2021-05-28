import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard} from 'react-native';
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
       

          
    };


    return (
      <KeyboardAvoidingView
       style={styles.container}
       
       >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

      <View style={styles.container}>
          <StatusBar style="auto" />
          <Image
                    source={require('../images/relief.png')}
                    style={styles.relief}
                />

            <View style={styles.container2}>
                      <View style={styles.inputField}> 
                        
                                <TextInput 
                                  placeholder='Email'
                                  placeholderTextColor= '#D7D7D7'
                                  style={styles.inputEmail}
                                  onChangeText={LoginEmail => setLoginEmail(LoginEmail)}
                                  keyboardType='email-address'
                              
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
              </View>
            
        
                  <View style={styles.container3}>
                      <TouchableOpacity 
                            style={styles.entrar}
                            onPress={() => signIn()}
                            >
                              <Text style={styles.loginText}>Entrar</Text>
                      </TouchableOpacity>

                          <Text style={styles.subtitle} > Ainda não tens conta?  <Text 
                                                                                    style={styles.link}
                                                                                    onPress={() => navigation.navigate('Selecionar')}
                                                                                    > 
                                                                                        Regista-te 
                                                                                    </Text>  
                          
                          </Text>
                  </View>
   
      </View>
      </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
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
      marginTop: '26%',
      resizeMode: 'contain',
      
  },

    container2: {
      flex: 4,
      alignItems: 'center',
      width: '100%',
    },

    container3: {
      flex: 2,
      alignItems: 'center',
      width: '100%',
    },
  
  
    loginText: {
        color: 'white',
        textAlign: 'center',
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
      fontSize: 15,
      fontWeight: 'bold',
  
      
      
    },
  
    inputField: {
      width: '80%',
      height: '100%',
      marginTop:'25%',
    },
  
    inputEmail: {
        borderColor: '#D7D7D7',
        borderBottomWidth: 1,
        padding: 5,
        fontSize: 15,
        fontWeight: 'bold',
        color: 'black',
        
      
    },
  
    inputPassword: {
      borderColor: '#D7D7D7',
      borderBottomWidth: 1,
      padding: 5,
      fontSize: 15,
      fontWeight: 'bold',
      marginTop: '3%',
      
    }, 
  
    entrar: {
      marginTop: '3%',
      borderColor: '#6578B3',
      borderStyle: 'solid',
      borderRadius: 20,
      overflow: 'hidden',
      backgroundColor: '#6578B3',
      width: '80%',
      padding: '2%',
   
    }
  
  
  
  });

  export default Login;