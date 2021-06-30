import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput} from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';
import TextArea from 'react-native-textarea';

function Esclarecimento({route, navigation}){
    return (
        <View style={styles.container}>
            <View style={styles.header}>
               
               <TouchableOpacity
                    style={styles.arrowLeft}
                    onPress={() => navigation.navigate('Apoio')}
               >
                    <Icon name='left' size={28} color={'black'} />
                </TouchableOpacity>

                <Text style={styles.title}>Pedido de Esclarecimento</Text>

            </View>

            <ScrollView contentContainerStyle={styles.container}>

                    <View style={styles.introText}>
                        <Text style={styles.text}>Após o preenchimento dos campos de envio da mensagem, o teu pedido será enviado a um dos nossos profissionais de saúde. Relembramos que estes pedidos não precisam de estar identificados e a sua resposta não será imediata.</Text>
                    </View>

                    <View  style={styles.inputField}>
                        <TextInput
                            style={styles.inputText}
                            placeholder={'Nome (Opcional)'}
                            backgroundColor= '#CFE0FB'
                            placeholderTextColor= 'white'
                        />

                        <TextInput 
                            style={styles.inputText}  
                            backgroundColor= '#CFE0FB'
                            placeholderTextColor= 'white'
                            placeholder={'Assunto'}
                        />

                        <TextArea 
                            style={styles.inputMensagem} 
                            backgroundColor= '#CFE0FB'
                            placeholderTextColor= 'white'
                            placeholder={'Mensagem'}
                            multiline={true}
                        />

                        <View style={{marginTop: '40%'}} >
                                    <TouchableOpacity
                                            onPress={() => navigation.navigate('Apoio')}
                                            style={styles.enviar}
                                            >
                                                <Text style={{color: 'white', textAlign: 'center', fontSize: 18, fontWeight: 'bold'}}> Enviar </Text>
                                    </TouchableOpacity>
                        </View>
                       
                    </View>
            </ScrollView>

               
        </View>
    )
} 


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        width: '100%',
        alignContent: 'center',
        justifyContent: 'center',

    },

    arrowLeft: {
        position: 'absolute', 
        left: 40, 
        top: 45, 
        alignSelf: 'center'
    },

    header: {
        backgroundColor: '#CFE0FB', 
        alignContent: 'center', 
        justifyContent: 'center', 
        paddingTop: '10%', 
        paddingBottom: '5%', 
        borderWidth: 1, 
        borderColor: '#CFE0FB', 
        borderBottomLeftRadius: 50, 
        borderBottomRightRadius: 50,
        flexDirection: 'row',
      },

    inputField: {
        flex: 4,
        width: '80%',
        marginBottom:'10%',
        marginLeft: '10%',
        marginTop: '5%',
        alignContent: 'center',
      },

      inputText: {
        padding: 15,
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: '5%',
        color: 'black',
        borderRadius: 20,
      
      },

      inputMensagem: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
        borderRadius: 20,
        padding: 15,
        textAlign: 'left',

     
      },

      enviar:{
        borderColor: '#6578B3',
        borderRadius: 20,
        overflow: 'hidden',
        backgroundColor: '#6578B3',
        width: '100%',
        padding: '3%',
        alignSelf: 'center',
    
      },

      introText: {
        width: '80%', 
        alignSelf: 'center', 
        flex: 1, 
        alignContent: 'center'
      },

      text: {
        textAlign: 'justify', 
        marginTop: '15%'
      },

  
      
      title: {
        textAlign: 'center', 
        fontWeight: 'bold', 
        fontSize: 20,
      }


})

export default Esclarecimento;