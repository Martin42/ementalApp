import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, SafeAreaView} from "react-native";
import TextArea from 'react-native-textarea';



function Pedido({ route, navigation }) {
    console.log(route.params.status);

    return (
        <SafeAreaView style={styles.container}>

            <StatusBar style= "auto" />
            
            
            <View style={{marginTop: '15%'}}>
                <Text style={styles.title}>Pedido de Acesso</Text>

                <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra</Text>
            
                <Text style={styles.text2}> Por favor, preencha os campos abaixo:</Text>

                    <View  style={styles.inputField}>
                        <TextInput 
                            style={styles.inputText}
                            placeholder= 'Nome'
                            backgroundColor= '#CFE0FB'
                            placeholderTextColor= 'white'
                        
                        
                        />

                        <TextInput 
                            style={styles.inputEmail}
                            placeholder= 'Email'
                            backgroundColor= '#CFE0FB'
                            placeholderTextColor= 'white'
                        
                        
                        />

                        <TextArea 
                            style={styles.inputMensagem}
                            placeholder= 'Mensagem'
                            backgroundColor= '#CFE0FB'
                            placeholderTextColor= 'white'
                            multiline={true}
                            
                            
                        
                        
                        />

                        <TouchableOpacity
                            onPress={() => navigation.navigate('Consentimento', { status: route.params.status }) }
                        
                        >
                            <Text style={styles.next}>Seguinte</Text>
                        </TouchableOpacity>

                    </View>

                

            </View>

                
        </SafeAreaView>
    )


}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        width: '100%',
    },

    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginLeft: '10%',
        marginRight: '10%',
        marginBottom: '5%',
      
    },

    text: {
        marginLeft: '10%',
        marginRight: '10%',
        fontSize: 15,
    },

    text2: {
        marginLeft: '10%',
        marginRight: '10%',
        fontSize: 15,
        marginTop: '5%',
    },

    inputField: {
    
        width: '80%',
        height: '15%',
        marginBottom:'10%',
        marginLeft: '10%',
        marginTop: '5%',
    
       
      },

      inputText: {
        padding: 15,
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: '7%',
        color: 'black',
        borderRadius: 20,
        height: '100%',
      },

      inputEmail: {
        padding: 15,
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: '7%',
        color: 'black',
        borderRadius: 20,
        height: '100%',

      },

      inputMensagem: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: '7%',
        color: 'black',
        borderRadius: 20,
        paddingLeft: 15,
        height: '100%',
        marginBottom: '80%', // espaço do input para o seguinte
      
       

      },

      next: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: '70%',
        marginTop: '20%',
        marginBottom: '5%',
    },

});


export default Pedido;