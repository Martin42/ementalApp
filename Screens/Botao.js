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
  
            <View style={styles.container2}>
              <TouchableOpacity 
                  style={styles.registo}
                  onPress={() => navigation.navigate('Selecionar')}
                  >
                 
                      <Text style={styles.registoText}>Registo</Text>
                  
              </TouchableOpacity>

              <TouchableOpacity 
                  style={styles.registo}
                  onPress={() => navigation.navigate('QiSaraC')}
                  >
                 
                      <Text style={styles.registoText}>qisara</Text>
                  
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

    container2: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      marginTop: '60%',
     
    },
    
  
      relief: {
        marginTop: '25%',
        width: '45%', 
        height: '22%',
        resizeMode: 'contain',
        
    },
  
    registo: {
        width: '80%',
        borderWidth: 1.5,
        borderColor: '#6578B3',
        borderStyle: 'solid',
        borderRadius: 20,
        overflow: 'hidden',
        padding: '2%',
        
    },
  
    login: {
        marginTop: '2%',
        width: '80%',
        borderColor: '#6578B3',
        borderStyle: 'solid',
        borderRadius: 20,
        overflow: 'hidden',
        backgroundColor: '#6578B3',
        padding: '2%',
        
    },
  
    registoText: {
        color: '#6578B3',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18,
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
        marginTop: '5%',
        fontSize: 15,
    },
  
  
    link: {
        color: '#6578B3',
        textDecorationLine: 'underline',
        textDecorationColor: '#6578B3',
        textAlign: 'center',
        fontSize: 15,
        marginTop: '.2%',
    },
  
  
  });

  export default Botao;