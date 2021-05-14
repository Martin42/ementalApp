import { StatusBar} from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Linking, TouchableOpacity } from 'react-native';




export default function Botão ({ navigation }) {

    

    return (
        <View>
            <StatusBar style="auto" />
            <Image
                source={require('../images/relief.png')}
                style={styles.relief}
            />


        <TouchableOpacity>
            <View style={styles.registo}>
                <Text style={styles.registoText}>Registo</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity 
            onPress={() => navigation.navigate('Login')}
            >
                <View style={styles.login}>
                    <Text style={styles.loginText}>Login</Text>
                </View>
        </TouchableOpacity>

            <Text style={styles.subtitle}> Ainda não conheces o projeto? </Text>

            <Text style={styles.link} onPress={() => Linking.openURL('https://depressaodeep.wixsite.com/emental')}>
                Visita o nosso website
            </Text>

             
        </View>
    );
}


const styles =  StyleSheet.create({
    relief: {
       
        width: 200, 
        height: 250,
        margin: 100 ,
        resizeMode: 'contain',
        marginBottom: '95%',
    },

    registo: {
        marginLeft: 10,
        marginRight: 10,
        borderWidth: 1.5,
        borderColor: '#6578B3',
        borderStyle: 'solid',
        borderRadius: 20,
        overflow: 'hidden',
        
    },

    login: {
        margin: 10,
        marginLeft: 10,
        marginRight: 10,
        borderColor: '#6578B3',
        borderStyle: 'solid',
        borderRadius: 20,
        overflow: 'hidden',
        backgroundColor: '#6578B3',
        
    },

    registoText: {
        color: '#6578B3',
        textAlign: 'center',
        margin: 10,   
        fontWeight: 'bold',
        fontSize: 18,
    },

    loginText: {
        color: 'white',
        textAlign: 'center',
        margin: 10,
        fontWeight: 'bold',
        fontSize: 18, 

    },

    subtitle: {
        fontWeight: '100',
        color: 'grey',
        textAlign: 'center',
        marginTop: 20,
        fontSize: 15,
    },

    link: {
        color: '#6578B3',
        textDecorationLine: 'underline',
        textDecorationColor: '#6578B3',
        textAlign: 'center',
        marginTop: 1,
        fontSize: 15,
        marginBottom: '15%',
    },

})