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
            style={styles.login}
            onPress={() => navigation.navigate('Login')} 
            >
                
            <Text style={styles.loginText}>Entrar</Text>
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
      marginTop: '55%',
     
    },
    
  
      relief: {
        marginTop: '25%',
        width: '45%', 
        height: '22%',
        resizeMode: 'contain',
        
    },
  
    registo: {
        width: '80%',
        height: 50,
        borderWidth: 1.5,
        borderColor: '#6578B3',
        borderStyle: 'solid',
        borderRadius: 30,
        overflow: 'hidden',
        padding: '2%',
        marginBottom:'2%',
        
    },
  
    login: {
        marginTop: '2%',
        width: '80%',
        height: 50,
        borderColor: '#6578B3',
        borderStyle: 'solid',
        borderRadius: 300,
        overflow: 'hidden',
        backgroundColor: '#6578B3',
        padding: '2%',
        
    },
  
    registoText: {
      color: '#6578B3',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 18,
      marginTop: '0.5%',
    },
  
    loginText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18, 
        marginTop: '1%',
  
    },
  
    subtitle: {
        fontWeight: 'bold',
        color: '#D7D7D7',
        textAlign: 'center',
        marginTop: '7%',
        fontSize: 15,
    },
  
  
    link: {
        color: '#6578B3',
        textDecorationLine: 'underline',
        textDecorationColor: '#6578B3',
        textAlign: 'center',
        fontSize: 15,
        marginTop: '.2%',
        marginBottom: '5%',
    },
  
  
  });

  export default Botao;