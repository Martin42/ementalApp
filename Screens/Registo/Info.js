import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';



function Info({route}) {

    console.log(route.params.status);
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Image
                source={require('../../images/emental.png')}
                style={styles.emental}
            />

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

    emental: {
        width: '45%', 
        height: '22%',
        marginTop: '25%',
        resizeMode: 'contain',
    }
});

export default Info;