import { StyleSheet, Text, Image, View, ScrollView } from "react-native";
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

function Info3({route, navigation}){

    console.log(route.params.status);

    return(
            
            <ScrollView contentContainerStyle={{flex: 1}}>
            <View style={styles.container}>

                <Text style={styles.title}>Instruções de uso</Text>
                
                <Text style={styles.text}>Durante a intervenção só poderás ver uma única vez cada episódio. Inicialmente não terás todos os episódios disponíveis e receberás uma notificação sempre que um novo se desbloqueia.</Text>
                <Text style={styles.texto}>Terás de responder a um questionário anónimo antes e após cada intervenção.</Text>

                <Image 
                        source={require('../../images/ex2.png')}
                        style={styles.example}
                    />

               

                    <View style={styles.seguinteContainer}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Info4', { status: route.params.status}) }>
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

    texto: {
        marginLeft: '10%',
        marginRight: '10%',
        marginBottom: '10%',
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
        marginBottom: '0%',
        borderWidth: 1,
        borderColor: 'black',
        resizeMode: 'contain',
        width: '40%',
        height: '40%',
        alignSelf: 'center',
    },

});



export default Info3;