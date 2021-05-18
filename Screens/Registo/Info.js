import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';



function Info({ }) {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Image
                source={require('../../images/emental.png')}
                style={styles.image}
            />
            <Text style={styles.subtitle}>O que é a eMental</Text>
        </View> 

        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },

    image: {
        marginTop: '30%',
        width: '20%',
        height: '7%',
        resizeMode: 'contain',
    },

    subtitle: {
        fontSize: 30,
        fontWeight: 'bold',
        marginLeft: '10%',
        marginRight: '10%',
      },
});

export default Info;