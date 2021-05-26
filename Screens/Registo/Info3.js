import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, Image, View } from "react-native";
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

function Info3({route, navigation}){

    console.log(route.params.status);

    return(
            
            <View style={styles.container}>

                <Text style={styles.title}>Instruções de uso</Text>
                <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel.</Text>


                <View>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Consentimento', { status: route.params.status}) }>
                        <Text style={styles.next}>Seguinte</Text>
                    </TouchableOpacity>
                </View>
            </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      width: '100%',
  
    },

    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginLeft: '10%',
        marginRight: '10%',
        marginBottom: '5%',
        marginTop: '15%',
      
    },

    text: {
        marginLeft: '10%',
        marginRight: '10%',
        fontSize: 15,
    },

    next: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: '70%',
        marginTop: '90%',
      
    },

});



    export default Info3;