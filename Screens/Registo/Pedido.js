import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from "react-native";


function Pedido({ route, navigation }) {
    console.log(route.params.status);

    return (
        <View style={styles.container}>
            <StatusBar style= "auto" />
            <View>
                <Text style={styles.title}>Pedido de Acesso</Text>
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

    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginLeft: '10%',
        marginRight: '10%',
        marginBottom: '5%',
      
    },

});


export default Pedido;