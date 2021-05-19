import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, StyleSheet } from "react-native";


function Consentimento({route, navigation}){

    console.log(route.params.status);

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Text>Hello</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems:'center',
      justifyContent: 'center',
      width: '100%',
  
    },

});

export default Consentimento;