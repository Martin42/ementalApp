import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';



function Info({}) {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Image
                source={require('../images/emental.png')}
                style={styles.relief}
            />

        </View>


    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'right',
        width: '70%',

    },