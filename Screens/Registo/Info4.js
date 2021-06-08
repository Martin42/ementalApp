import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, Image, View, ScrollView } from "react-native";
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

function Info4({route, navigation}){

    console.log(route.params.status);

    return(
            
            <ScrollView contentContainerStyle={{flex: 1}}>
            <View style={styles.container}>

                <Text style={styles.title}>Instruções de uso</Text>
                
                <Text style={styles.text}>Só será possível ver um conteúdo de cada vez, precisando sempre de terminar o atual em que se encontra antes de proseguir. No momento de visualização do primeiro episódio, será obrigatório responder um questionário inicial anónimo, também será obrigatório responder um outro questionário no final da visualização do conteúdo audio visual na sua totalidade.</Text>
                <Text style={styles.text}>Inicialmente não terás todos episódios disponíveis, estes tem uma calendarização programada ao qual receberás uma notificação sempre que fica disponível um episódio novo.</Text>

                <Image 
                        source={require('../../images/ex2.png')}
                        style={styles.example}
                    />

                <View style={styles.seguinteContainer}>
                    <TouchableOpacity
            
                        onPress={() => navigation.navigate('Info5', { status: route.params.status}) }>
                        <Text style={styles.next}>Seguinte</Text>
                    </TouchableOpacity>
                </View>

                </View>
            </ScrollView>
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
        marginTop: '2%', 

    },

    example: {
        marginTop: '5%',
        marginBottom: '10%',
        borderWidth: 1,
        borderColor: 'black',
        resizeMode: 'contain',
        width: '40%',
        height: '40%',
        alignSelf: 'center',
    },

});



export default Info4;