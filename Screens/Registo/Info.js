import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';



function Info({ route }) {

    console.log(route.params.status);
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />

            <Image
                source={require('../../images/emental.png')}
                style={styles.emental}
            />  

            <Text style={styles.title}>O que é o eMental</Text>

            <Text style={styles.subtitle}>O projeto eMental envolve uma equipa multidisciplinar e visa finalizar e avaliar intervenções digitais dirigidas a jovens, estruturadas em conteúdos digitais transmedia, de promoção da literacia em depressão e suicídio. Pretende-se ainda desenhar uma proposta de futura intervenção alargada à população jovem portuguesa. </Text>
            <Text style={styles.next}>Seguinte</Text>
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        width: '100%',
    },

    emental: {
        alignContent: 'flex-end',
        justifyContent: 'flex-end',
        width: '80%',
        height: '25%',
        marginTop: '30%',
        marginRight: 0,
        marginLeft: '20%',
        resizeMode: 'center',
    },

    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginLeft: '15%',
        marginRight: '10%',
        marginTop: '15%',
        marginBottom: '5%',
    },

    subtitle: {
        fontSize: 20,
        color: '#6B6B6B',
        fontWeight: 'normal',
        marginLeft: '15%',
        marginRight: '10%',
        marginTop: '3%',
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

export default Info;