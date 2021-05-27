import React, { useState } from 'react';
import { ScrollView, Checkbox, StatusBar, StyleSheet, TouchableOpacity, Text, Image, View } from "react-native";
import { NavigationEvents, withOrientation } from 'react-navigation';

function QiSara2({route, navigation}){

    return(
        <View style={styles.container}>
            <StatusBar style="auto" />

            <View style={styles.balao}>
                <Text style={styles.title}>Questionário Inicial</Text>
                <Text style={styles.subtitle}>Secção B: ffe</Text>
                <Text style={styles.texto}>ff</Text>

                <TouchableOpacity style={styles.botao}
                    onPress={() => navigation.navigate('Login')}>
                  <Text style={styles.buttonText}>blabla</Text>
              </TouchableOpacity>                 
                
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
        marginTop: '15%',
        marginBottom: '15%',
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
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: '10%',
        marginRight: '10%',
        marginBottom: '5%',
        color: '#6578B3',
    },

    next: {
        fontSize: 15,
        fontWeight: 'bold',
        marginLeft: '70%',
        marginTop: '90%',
      
    },

    texto: {
        marginLeft: '10%',
        marginRight: '10%',
        paddingBottom: '5%',
        fontSize: 15,
    },

    textobold: {
        marginLeft: '10%',
        marginRight: '10%',
        fontWeight: 'bold',
        fontSize: 15,
    },

    aceito: {
        marginLeft: '10%',
        marginRight: '10%',  
        resizeMode: 'contain',
        width: '80%',
    },

    buttonText: {
        fontSize: 15,
        marginLeft: '4%',
        marginTop: '4%',
    },

    botao:{
        marginTop: '7%',
        borderRadius: 30,
        overflow: 'hidden',
        backgroundColor: 'white',
        marginLeft: '10%',
        marginRight: '10%',
        height: 42,
      },
});

export default QiSara2;