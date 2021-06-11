import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, Image, View } from "react-native";
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

function Info5({route, navigation}){

    console.log(route.params.status);

    return(
            
            <View style={styles.container}>

                <Text style={styles.title}>Instruções de uso</Text>
                
                <Text style={styles.text}>Caso queiras entrar em contacto direto com um profissional de saúde, na página 'Linhas de Apoio' existe uma secção de contactos de emergência e a possibilidade de enviar um pedido de esclarecimento à nossa equipa de profissionais de saúde. Para isto basta apenas redigir o assunto e a mensagem e, por fim, aguardar pela resposta.</Text>

                <Image 
                        source={require('../../images/ex4.png')}
                        style={styles.example}
                    />


                <View>
                    <TouchableOpacity
                        style={styles.touchable}
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
        marginRight: '10%',
        textAlign: 'right'
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