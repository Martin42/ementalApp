import React, { useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';
import { auth, db } from '../../Firebase';



function Registo({navigation, route}){

    const [emailRegisto, setemailRegisto] = useState('');
    const [passwordRegisto, setpasswordRegisto] = useState('');
    const [passwordConfirmacao, setpasswordConfirmacao] = useState('');


    const RegistoFinal = () => {

      if (passwordRegisto != passwordConfirmacao) {
        alert('Não foi possível confirmar a palavra passe')
      } else if (emailRegisto === '' || passwordRegisto === '' || passwordConfirmacao === '') {
                  alert('Por favor preencha todos os campos')

              } else {

      auth
        .createUserWithEmailAndPassword(emailRegisto, passwordRegisto)
        .then(() => {
          alert('Registado com sucesso');
          navigation.replace('Login');
          db
          .collection('users')
          .doc(auth.currentUser.uid)
          .set({
            name: route.params.nomePedido,
            email: route.params.emailPedido,
            area: route.params.mensagemPedido,
            status: route.params.status,
          });

          db
          .collection('Questionário Marco Inicial')
          .doc(auth.currentUser.uid)
          .set({
            concluido: 'false'
          })

          db
          .collection('Questionário Sara Inicial')
          .doc(auth.currentUser.uid)
          .set({
            concluido: 'false'
          })

          if ((route.params.status) == 1) {
            db
            .collection('users')
            .doc(auth.currentUser.uid)
            .set({
              pedido: 'Por aprovar'
            }, {merge: true})
          }


        })
        .catch(error => alert(error.message));  

      }

    }


    return (
      <ScrollView contentContainerStyle={styles.container}>

        <View style={styles.container2}>

                  

                        <Image
                                    source={require('../../images/relief.png')}
                                    style={styles.relief}
                                />
                  
      
                          <TextInput 
                            placeholder='Email'
                            placeholderTextColor= '#D7D7D7'
                            style={styles.inputEmail}
                            onChangeText={emailRegisto => setemailRegisto(emailRegisto)}
                            keyboardType='email-address'
                        
                          />
                    
                          <TextInput 
                            secureTextEntry={true}
                            placeholder='Palavra-Passe'
                            placeholderTextColor= '#D7D7D7'
                            style={styles.inputPassword}
                            onChangeText={passwordRegisto => setpasswordRegisto(passwordRegisto)}
                            
                          />

                            <TextInput 
                            secureTextEntry={true}
                            placeholder='Confirme a Palavra-Passe'
                            placeholderTextColor= '#D7D7D7'
                            style={styles.inputConfirmacao}
                            onChangeText={passwordConfirmacao => setpasswordConfirmacao(passwordConfirmacao)}
                            
                        
                          />

            <TouchableOpacity 
                style={styles.entrar}
                onPress={() => RegistoFinal()}
                >
                    <Text style={styles.loginText}>Finalizar registo</Text>
            </TouchableOpacity>

                <Text style={styles.subtitle} > Já tens conta?  <Text 
                                                                    style={styles.link}
                                                                    onPress={() => navigation.navigate('Login')}
                                                                    > 
                                                                    Faz Login
                                                                    </Text> 
                
                     
                      
                </Text>

                </View>
      
   
      </ScrollView>
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

    container2: {
      flex: 2,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
  
    },
  
    relief: {
      marginTop: '10%',
      width: '45%', 
      height: '22%',
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
  
  
    link: {
      color: '#6578B3',
      textDecorationLine: 'none',
      textDecorationColor: '#6578B3',
      textAlign: 'center',
      marginTop: '.2%',
      fontSize: 15,
      fontWeight: 'bold',
    },

  
    inputEmail: {
        borderColor: '#D7D7D7',
        borderBottomWidth: 1,
        padding: 5,
        fontSize: 15,
        fontWeight: 'bold',
        color: 'black',
        width: '80%',
        marginTop: '23%',
    },
  
    inputPassword: {
      borderColor: '#D7D7D7',
      borderBottomWidth: 1,
      padding: 5,
      fontSize: 15,
      fontWeight: 'bold',
      marginTop: '4%',
      width: '80%',
    }, 
  

    inputConfirmacao: {
      borderColor: '#D7D7D7',
      borderBottomWidth: 1,
      padding: 5,
      fontSize: 15,
      fontWeight: 'bold',
      marginTop: '4%',
      width: '80%',
    }, 


    entrar: {
      marginTop: '30%',
      borderColor: '#6578B3',
      borderStyle: 'solid',
      borderRadius: 30,
      height: 50,
      overflow: 'hidden',
      backgroundColor: '#6578B3',
      width: '80%',
    }
  
  
  
  });

  export default Registo;