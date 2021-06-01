import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';





function Selecionar ({navigation}) {



    return (
      <View style={styles.container}>
          <StatusBar style="hidden" />

          <View style={styles.balao}>

              <Text style={styles.title}>Para te registares seleciona uma opção.</Text>

              <Text style={styles.subtitle}>Eu sou:</Text>

              <TouchableOpacity 
                    style={styles.estudante}
                    onPress={() => navigation.navigate('Info', {
                      status: 0,
                    })}
                     
                    >
                  <Text style={styles.buttonText}>Estudante</Text>
              </TouchableOpacity>

              <TouchableOpacity
                    style={styles.pds}
                    onPress={() => {
                      
                      navigation.navigate('Info', {
                        status: 1,
                      });
                      
                    
                    }} 
              >
                  <Text style={styles.buttonText}>Profissional de Saúde Mental</Text>
              </TouchableOpacity>

              <Text style={styles.descricao}>Já tens conta ?<Text style={styles.link} onPress={() =>  navigation.navigate('Login')}> Efetua o Login</Text></Text>

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
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: '10%',
    marginRight: '10%',
    marginTop: '10%',
    marginBottom: '5%',
    },

  subtitle: {
      fontSize: 20,
      fontWeight: 'bold',
      marginLeft: '10%',
      marginRight: '10%',
      color: 'black',
  },

  estudante :{
    marginTop: '10%',
    borderRadius: 30,
    overflow: 'hidden',
    backgroundColor: 'white',
    marginLeft: '10%',
    marginRight: '10%',
    height: 42,
   
    
  },

  pds:{
    marginTop: '7%',
    borderRadius: 30,
    overflow: 'hidden',
    backgroundColor: 'white',
    marginLeft: '10%',
    marginRight: '10%',
    height: 42,
  },

  buttonText: {
    fontSize: 15,
    marginLeft: '4%',
    marginTop: '4%',
  },

  descricao: {
    margin: 'auto',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
    marginTop: '12%'
  },

  link: {
    textDecorationLine: 'none',
    textDecorationColor: '#6578B3',
    color: '#6578B3',
  }



})

  export default Selecionar;