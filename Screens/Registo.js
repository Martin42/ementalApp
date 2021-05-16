import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';



function Registo ({navigation}) {
    return (
      <View style={styles.container}>
          <StatusBar style="auto" />
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text>Registo</Text>
        </TouchableOpacity>
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
  
    }})

    export default Registo;