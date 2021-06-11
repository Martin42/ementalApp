import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity} from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';
import TextArea from 'react-native-textarea';

function Responder({route, navigation}){
    return (
        <View style={styles.container}>
            <View style={styles.header}>
               
               <TouchableOpacity
                    style={styles.arrowLeft}
                    onPress={() => navigation.navigate('Conversa')}
               >
                    <Icon name='left' size={28} color={'black'} />
                </TouchableOpacity>

                <Text style={styles.title}>Responder</Text>

            </View>

            <ScrollView 
                style={styles.container}
                persistentScrollbar={true}
                >
 
                    <View style={styles.subtitleContainer}>
                        <Text style={styles.subtitle}>Assunto: </Text>
                        <Text style={styles.subtitleReg}>Sintomas Depressivos </Text>
                    </View>

                    <View style={styles.inputField}>
                        <TextArea 
                            style={styles.inputMensagem}
                            placeholder={'Mensagem'}
                            backgroundColor= '#CFE0FB'
                            placeholderTextColor= 'white'
                            multinline={true}
                        
                        />
                    </View>

                    <View style={{marginTop: '40%'}} >
                                    <TouchableOpacity
                                            onPress={() => navigation.navigate('Conversa')}
                                            style={styles.enviar}
                                            >
                                                <Text style={{color: 'white', textAlign: 'center', fontSize: 18, fontWeight: 'bold'}}> Enviar </Text>
                                    </TouchableOpacity>
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
   
    },

    arrowLeft: {
        position: 'absolute', 
        left: 40, 
        top: 45, 
        alignSelf: 'center'
    },

    enviar:{
        borderColor: '#6578B3',
        borderRadius: 20,
        overflow: 'hidden',
        backgroundColor: '#6578B3',
        width: '80%',
        padding: '3%',
        alignSelf: 'center',
    
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
        marginBottom:'10%',
        marginLeft: '10%',
        marginRight: '10%',
        alignContent: 'center',
      },

      inputMensagem: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
        borderRadius: 20,
        padding: 15,
        textAlign: 'left',

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
      },

      subtitle: {
        textAlign: 'left', 
        fontWeight: 'bold', 
        fontSize: 18,
      },

      subtitleReg: {
        textAlign: 'left', 
        fontWeight: 'normal', 
        fontSize: 17,
        marginTop: '1%'
      },

      subtitleContainer: {
        flex: 1,
        marginTop: '7%', 
        marginLeft: '10%',
        marginBottom: '5%',
      },


})

export default Responder;