import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Botão from '../ementalApp/Screens/botao';
import Route from '../ementalApp/Route/route';



export default function App() {
  return (
    <View style={styles.container}>
      <Botão />
      <Route />
      <StatusBar style="auto" />
    </View>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
