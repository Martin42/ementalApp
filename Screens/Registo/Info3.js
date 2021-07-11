import { StyleSheet, Text, Image, View, ScrollView } from "react-native";
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

function Info3({route, navigation}){

    console.log(route.params.status);

    return(
            
            <ScrollView contentContainerStyle={{flex: 1}}>
            <View style={styles.container}>

                <Text style={styles.title}>Instruções de uso</Text>
                
                <Text style={styles.text}>A intervenção é composta por um conjunto de episódios. Durante a intervenção cada episódio só poderá ser visualizado uma única vez. Será disponibilizado apenas um episódio de cada vez e receberás uma notificação sempre que um novo se desbloqueia.</Text>
                <Text style={styles.texto}>Terás de responder a um questionário anónimo antes e após cada intervenção.</Text>


                {
                    (route.params.status == 0) ? (
                        <Image 
                        source={require('../../images/saraPL.png')}
                        style={styles.example}
                    />

                    ) : (
                        <Image 
                        source={require('../../images/40sPL.png')}
                        style={styles.example}
                    />

                    )
                }
               

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
        position: 'absolute',
        bottom: 50,
        right: 40 
    },

    example: {
        marginTop: '10%',
        borderWidth: 1,
        borderColor: 'black',
        resizeMode: 'contain',
        width: '45%',
        height: '45%',
        alignSelf: 'center',
    },

});



export default Info3;