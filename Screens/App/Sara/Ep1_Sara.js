import React, { useState } from 'react';
import { ScrollView, Checkbox, StatusBar, StyleSheet, TouchableOpacity, Text, Image, View } from "react-native";
import { NavigationEvents, withOrientation } from 'react-navigation';
import { Icon } from 'react-native-elements'

function Ep1_Sara({route, navigation}){

    return(
        <View style={styles.container}>
            <StatusBar style="auto" />
            
            <View style={[{flexDirection:'row'}], styles.title} />
            <View style={{width: '100%', height: 80, backgroundColor: '#EE2C38'}}>
                <Text style={styles.text}>A Ferida Sara - Ep. 1 Psicoeducativo</Text>
            </View>


            

        </View>
    )

}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        width: '100%',
    },

    title: {
        marginTop: '5%',
    },

    text: {
        textAlign: 'center',
        marginTop: 25,
    },

});

export default Ep1_Sara;