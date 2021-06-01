import React, { useState } from 'react';
import { ScrollView, Checkbox, StatusBar, StyleSheet, TouchableOpacity, Text, Image, View } from "react-native";
import { NavigationEvents, withOrientation } from 'react-navigation';
import TextArea from 'react-native-textarea';

function QiSaraC({route, navigation}){
    const [mensagem, setMensagem] = useState('');
    
    return(
        <View style={styles.container}>
            <StatusBar style="auto" />

            <View style={styles.balao}>
                <Text style={styles.subtitle}>Secção C: Caracterização</Text>
                <Text style={styles.textobold}>C1. Ano de Nascimento:</Text>

                <View style={styles.inputField}>
                    <TextArea
                    style={styles.inputMensagem}
                    placeholder= 'Responde aqui...'
                    backgroundColor= 'white'
                    placeholderTextColor= 'black'
                    multiline={true}
                    containerStyle={styles.inputMensagemContainer}
                    onChangeText={mensagem => setMensagem(mensagem)}
                    />
                </View>                
                
                <Text style={styles.textobold}>C2. Género:</Text>

                <View style={styles.inputField}>
                    <TextArea
                    style={styles.inputMensagem}
                    placeholder= 'Responde aqui...'
                    backgroundColor= 'white'
                    placeholderTextColor= 'black'
                    multiline={true}
                    containerStyle={styles.inputMensagemContainer}
                    onChangeText={mensagem => setMensagem(mensagem)}
                    />
                </View>  

                <Text style={styles.textobold}>C3. Estado Civil:</Text>

                <View style={styles.inputField}>
                    <TextArea
                    style={styles.inputMensagem}
                    placeholder= 'Responde aqui...'
                    backgroundColor= 'white'
                    placeholderTextColor= 'black'
                    multiline={true}
                    containerStyle={styles.inputMensagemContainer}
                    onChangeText={mensagem => setMensagem(mensagem)}
                    />
                </View> 
                
                <TouchableOpacity
                    onPress={() => navigation.navigate('QiSaraC')}>
                    <Text style={styles.next}>Seguinte</Text>
                </TouchableOpacity>

            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    inputField: {
        marginTop: '5%',
        borderRadius: 30,
        overflow: 'hidden',
        backgroundColor: 'white',
        marginLeft: '10%',
        marginRight: '10%',
        height: 50,
        marginBottom: '10%'
      },

      inputMensagem: {
        fontSize: 15,
        color: 'black',
        borderRadius: 30,
        marginLeft: '8%',
        marginTop: '4%',
      },

    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },

    balao: {
        backgroundColor: '#CFE0FB',
        borderColor: '#CFE0FB',
        borderRadius: 30,
        height: '85%',
        width: '80%',
        marginTop: '15%',
        marginBottom: '15%',
    },

    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginLeft: '10%',
        marginRight: '10%',
        marginTop: '10%',
        marginBottom: '5%',
    },

    subtitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: '10%',
        marginRight: '10%',
        marginBottom: '5%',
        marginTop: '10%',
        color: '#6578B3',
    },

    next: {
        fontSize: 17,
        fontWeight: 'bold',
        marginLeft: '70%',
        marginTop: '10%',
        color: 'black'
    },

    texto: {
        marginLeft: '10%',
        marginRight: '10%',
        paddingBottom: '5%',
        fontSize: 15,
    },

    textobold: {
        marginLeft: '10%',
        marginRight: '10%',
        fontWeight: 'bold',
        fontSize: 15,
    },

    aceito: {
        marginLeft: '10%',
        marginRight: '10%',  
        resizeMode: 'contain',
        width: '80%',
    },

    buttonText: {
        fontSize: 15,
        marginLeft: '4%',
        marginTop: '4%',
    },

    botao:{
        marginTop: '7%',
        borderRadius: 30,
        overflow: 'hidden',
        backgroundColor: 'white',
        marginLeft: '10%',
        marginRight: '10%',
        height: 42,
      },
});

export default QiSaraC;