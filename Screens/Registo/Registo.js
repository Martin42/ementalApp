import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import { useState } from 'react/cjs/react.development';
import { auth, db } from '../../Firebase';



function Registo({navigation, route}){

    const [emailRegisto, setemailRegisto] = useState('');
    const [passwordRegisto, setpasswordRegisto] = useState('');


    const RegistoFinal = () => {
      auth
        .createUserWithEmailAndPassword(emailRegisto, passwordRegisto)
        .then(() => {
          alert('Registado com sucesso');
          navigation.replace('Login');
          db.collection('users')
          .doc(auth.currentUser.uid)
          .set({
            name: route.params.nomePedido,
            email: route.params.emailPedido,
            mensagem: route.params.mensagemPedido,
            status: route.params.status,
          });
        })
        .catch(error => alert(error.message));  

        console.log(auth);
    }

    



    return (
      <View style={styles.container}>
          <StatusBar style="auto" />
          <Image
                    source={require('../../images/relief.png')}
                    style={styles.relief}
                />

      <View style={styles.container}> 

      {/* KeyboardAvoidingView para o teclado não interferir com a página ? */}

                <View style={styles.inputField}> 
                  
                          <TextInput 
                            placeholder='Nome do Utilizador'
                            placeholderTextColor= '#D7D7D7'
                            style={styles.inputEmail}
                            onChangeText={emailRegisto => setemailRegisto(emailRegisto)}
                        
                          />
                    
                          <TextInput 
                            secureTextEntry={true}
                            placeholder='Palavra-Passe'
                            placeholderTextColor= '#D7D7D7'
                            style={styles.inputPassword}
                            onChangeText={passwordRegisto => setpasswordRegisto(passwordRegisto)}
                        
                          />


                  </View>

            
        

            <TouchableOpacity 
                style={styles.entrar}
                onPress={() => RegistoFinal()}
                >
                    <Text style={styles.loginText}>Finalizar Registo</Text>
            </TouchableOpacity>

                <Text style={styles.subtitle} > Já tens conta?  
                
                       <Text 
                      style={styles.link}
                      onPress={() => navigation.navigate('Login')}
                      > 
                          Faz Login
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

  export default Registo;