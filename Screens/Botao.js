import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Linking } from 'react-native';


function Botao({navigation}) {
    return (
            <View style={styles.container}>
                  <StatusBar style="auto" />
                  <Image
                      source={require('../images/relief.png')}
                      style={styles.relief}
                  />
  
  
              <TouchableOpacity 
                  style={styles.registo}
                  onPress={() => navigation.navigate('Selecionar')}
                  >
                 
                      <Text style={styles.registoText}>Registo</Text>
                  
              </TouchableOpacity>

              <TouchableOpacity
                  onPress={() => navigation.navigate('QiSara')} //remover este touchableopacity depois
                  >
                      
                    <Text>Questionario</Text>
              </TouchableOpacity>
  
              <TouchableOpacity 
                  style={styles.login}
                  onPress={() => navigation.navigate('Login')}
                  >
                      
                    <Text style={styles.loginText}>Login</Text>
              </TouchableOpacity>
  
                  <Text style={styles.subtitle}> Ainda não conheces o projeto? </Text>
  
                  <Text style={styles.link} onPress={() => Linking.openURL('http://emental.web.ua.pt')}>
                      Visita o nosso website
                  </Text>
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
  
    registo: {
        marginTop: '90%',
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
        fontWeight: 'bold',
        color: '#D7D7D7',
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

  export default Botao;