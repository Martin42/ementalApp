import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from "react-native";


function Consentimento({ route, navigation }) {

    console.log(route.params.status);

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />

            <View style={styles.balao}>
                <View>
                    <TouchableOpacity
                    onPress={() => navigation.navigate('Pedido', {status: route.params.status})}
                    
                    >
                        <Text style={styles.next}>Seguinte</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        width: '100%',
    },

    balao: {
        backgroundColor: '#CFE0FB',
        borderColor: '#CFE0FB',
        borderRadius: 30,
        height: '85%',
        width: '80%',
    },

    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginLeft: '10%',
        marginRight: '10%',
        marginTop: '15%',
        marginBottom: '5%',
    },

    next: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: '70%',
        marginRight: 0,
        marginTop: '30%',
        marginBottom: '5%',
    },
});

export default Consentimento;