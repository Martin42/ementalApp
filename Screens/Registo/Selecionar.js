import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';



function Selecionar ({navigation}) {
    return (
      <View style={styles.container}>
          <StatusBar style="hidden" />

          <View style={styles.balao}>

              <Text style={styles.title}>Para se registar selecione uma opção.</Text>

              <Text style={styles.subtitle}>Eu sou:</Text>

              <TouchableOpacity 
                    style={styles.estudante}
                     
                    >
                  <Text style={styles.buttonText}>Estudante</Text>
              </TouchableOpacity>

              <TouchableOpacity
                    style={styles.pds}
              >
                  <Text style={styles.buttonText}>Profissional de Saúde Mental</Text>
              </TouchableOpacity>

              <Text style={styles.subtitle2}>Já tens conta?<Text style={styles.link} onPress={() => navigation.navigate('Login')}> Faz Login </Text></Text>

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


    balao: {
      backgroundColor: '#CFE0FB',
      borderColor: '#CFE0FB',
      borderRadius: 30,
      height: '85%',
      width: '80%',

    },

    title: {
      fontSize: 30,
      fontWeight: 'bold',
      marginLeft: '10%',
      marginRight: '10%',
      marginTop: '15%',
      marginBottom: '5%',

      
    },
  
    subtitle: {
      fontSize: 30,
      fontWeight: 'bold',
      marginLeft: '10%',
      marginRight: '10%',
    },
  
    estudante :{
      marginTop: '15%',
      borderRadius: 15,
      overflow: 'hidden',
      backgroundColor: 'white',
      marginLeft: '10%',
      marginRight: '10%',
      height: '5%',
      
    },

    pds:{
      marginTop: '7%',
      borderRadius: 15,
      overflow: 'hidden',
      backgroundColor: 'white',
      marginLeft: '10%',
      marginRight: '10%',
      height: '5%',
    },

    buttonText: {
      fontSize: 18,
      marginLeft: '4%',
      marginTop: '4%',
    },

    subtitle2: {
      marginLeft: '10%',
      marginRight: '10%',
      color: 'white',
      fontWeight: 'bold',
      fontSize: 15,
      textAlign: 'center',
      marginTop: '15%'
    },

    link: {
      textDecorationLine: 'none',
      textDecorationColor: '#6578B3',
      color: '#6578B3',
    }


  
  })

    export default Selecionar;