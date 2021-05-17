import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';



function Selecionar ({navigation}) {
    return (
      <View style={styles.container}>
          <StatusBar style="auto" />

          <View style={styles.balao}>
              <Text>Para se registar selecione uma opção.</Text>

              <TouchableOpacity>
                  <Text>Estudante</Text>
              </TouchableOpacity>

              <TouchableOpacity>
                  <Text>Profissional de Saúde Mental</Text>
              </TouchableOpacity>

              <Text>Já tens conta? <Text> Faz Login </Text></Text>

              <Text>Seguinte</Text>
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
      margin: '5%',
      borderColor: '#CFE0FB',
      borderRadius: 20,
      height: '90%',
      width: '85%',

    }
  
  
  
  })

    export default Selecionar;