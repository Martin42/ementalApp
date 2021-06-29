import React, { useState, useCallback, useEffect} from 'react';
import { ScrollView, Checkbox, StatusBar, StyleSheet, TouchableOpacity, Text, Image, View, Alert , TextInput, Modal} from "react-native";
import { Entypo } from '@expo/vector-icons'
import YoutubePlayer from "react-native-youtube-iframe";
import { db, auth } from '../../../Firebase';
import { AntDesign } from '@expo/vector-icons';

function AudioMarco({ route, navigation }) {
    return(
        <View style={styles.container}>
            <View style={{flexDirection: 'row', height: 40, marginTop: '7.5%', alignItems: 'center', marginBottom: '2.5%'}}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('PlaylistMarco')}
                    style={styles.icon}>
                    <Entypo name="chevron-thin-left" size={24} color="black"/>
                </TouchableOpacity>


                <Text style={{fontSize: 20}}>
                    {route.params.titulo}
                </Text>
            </View>

            <Image
                source={require('../../../images/ep_marco.png')}
                style={styles.imagem}
            />

            <Text style={styles.titulo}>
                {route.params.episodio}
            </Text>
            <Text style={styles.subtitulo}>
                {route.params.serie}
            </Text>
        </View>
    )
    
}


const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        backgroundColor: 'white',
        width: '100%',
    },

    imagem: {
        marginTop: '25%',
        resizeMode: 'contain',
        marginLeft: 'auto',
        marginRight: 'auto',
    },

    title1: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: '10%',
        marginRight: '10%',
        marginBottom: '5%',
        marginTop: '-5%',
    },

    titulo: {
        marginTop: '8%',
        marginLeft: 'auto',
        marginRight: 'auto',
        fontWeight: 'bold',
        fontSize: 20,
    },

    subtitulo: {
        marginTop: '2%',
        marginLeft: 'auto',
        marginRight: 'auto',
    },

    inputField: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        marginLeft: '10%',
        marginRight: '10%',
    },

    inputField2: {
        marginLeft: '10%',
        marginRight: '10%',
    },

    inputMensagem: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
        borderRadius: 20,
        padding: 15,
        textAlign: 'left',
    },

    inputMensagem2: {
        fontSize: 18,
        color: 'black',
        borderRadius: 20,
        padding: 15,
        textAlign: 'left',
    },

    inputComment: {
        backgroundColor: '#CFE0FB',
        borderRadius: 20,
        padding: 0,
        textAlign: 'left',
        width: '80%',
        marginLeft: '20%',
    },

    icon: {
        marginLeft: '5%',
        marginRight: '5%',
    },
  
    entendi: {
        marginTop: '15%',
        width: '80%',
        borderColor: '#6578B3',
        borderStyle: 'solid',
        borderRadius: 20,
        overflow: 'hidden',
        backgroundColor: '#6578B3',
        padding: '4%',
    },

    modalView: {
        alignContent: 'center',
        justifyContent: 'center', 
        flex: 1,
    },

    modalContainer: {
        marginLeft: '12%', 
        marginRight: '12%', 
        backgroundColor:'white', 
        alignItems: 'center', 
        padding: 25, 
        shadowColor: 'red', 
        shadowOffset: {width: 0, height: 2}, 
        shadowOpacity: 0.25, 
        shadowRadius: 4, 
        elevation: 4, 
        borderWidth: 1, 
        borderRadius: 30, 
        borderColor: 'white',
    },

    modalImage:{
        marginBottom:'12%', 
        marginTop: '5%', 
        height: 130, 
        width: '66%'
    },

    modalTitle: {
        fontWeight: 'bold', 
        fontSize: 20, 
        textAlign: 'center',
        marginBottom: '10%',  
        marginLeft: '5%', 
        marginRight: '5%',
    },

    modalSubtitle: {
        fontSize: 15, 
        textAlign: 'center', 
        marginLeft: '10%', 
        marginRight: '10%'
    },

    entendiText: {
        textAlign: 'center', 
        color: 'white', 
        fontWeight: 'bold'
    }

});

export default AudioMarco;

