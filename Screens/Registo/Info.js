import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';



function Info({}) {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Image
                source={require('../../images/emental.png')}
            />

        </View>


    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        width: '70%',

    },
});

export default Info;