import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, Image, View } from "react-native";
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

function Info5({route, navigation}){

    console.log(route.params.status);

    return(
            
            <View style={styles.container}>

                <Text style={styles.title}>Instruções de uso</Text>
                
                <Text style={styles.text}>Em cada vídeo encontra-se uma zona de comentários ao qual poderás sempre deixar as tuas dúvidas, todos os comentários serão primeiro confirmados e comprovados por um profissional de saúde antes de se tornar visível para todos.</Text>

                <Image 
                        source={require('../../images/ex3.png')}
                        style={styles.example}
                    />


                <View style={styles.seguinteContainer}>
                    <TouchableOpacity
                      
                        onPress={() => navigation.navigate('Info6', { status: route.params.status}) }>
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
        fontSize: 22,
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
        textAlign: 'justify',
    },

    next: {
        fontSize: 17,
        fontWeight: 'bold',
        marginTop: '5%',
        textAlign: 'center',
    },

    seguinteContainer: {
        width: '20%',
        alignSelf: 'flex-end', 
        marginRight: '8%', 
        marginTop: '12%', 

    },

    example: {
        marginTop: '5%',
        marginBottom: '10%',
        borderWidth: 1,
        borderColor: 'black',
        resizeMode: 'contain',
        width: '50%',
        height: '50%',
        alignSelf: 'center',
    },

});



export default Info5;