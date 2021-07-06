import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView} from "react-native";




function Pedido({ route, navigation }) {

    console.log(route.params.status)

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [mensagem, setMensagem] = useState('');

    return (

        <ScrollView contentContainerStyle={styles.container}> 
            <View style={styles.container1}>
            
                <Text style={styles.title}>Pedido de Acesso</Text>

                <Text style={styles.text}>
                    Se é profissional de saúde e gostaria de ter acesso a todo o conteúdo audiovisual disponível na uMind, pedimos-lhe que faça aqui o seu pedido. 
                    Após a confirmação por parte da equipa de administradores, terá acesso à intervenção '40 Segundos'. 
                    Enquanto o pedido é processado, terá acesso à aplicação enquanto estudante mas rapidamente tentaremos resolver o pedido ! 
                </Text>
            
                <Text style={styles.text2}> Por favor, preencha os campos abaixo:</Text>

                </View>

                    <View  style={styles.inputField}>
                        <TextInput 
                            style={styles.inputText}
                            placeholder= 'Nome'
                            backgroundColor= '#CFE0FB'
                            placeholderTextColor= 'white'
                            onChangeText={nome => setNome(nome)}
                        />

                        <TextInput 
                            style={styles.inputEmail}
                            placeholder= 'Email'
                            backgroundColor= '#CFE0FB'
                            placeholderTextColor= 'white'
                            onChangeText={email => setEmail(email)}
                            keyboardType='email-address'
                        />

                        <TextInput 
                            style={styles.inputMensagem}
                            placeholder= 'Área de Especialidade'
                            backgroundColor= '#CFE0FB'
                            placeholderTextColor= 'white'
                            onChangeText={mensagem => setMensagem(mensagem)}
                        />
                        </View>

                        <View style={styles.container2}>
                            <TouchableOpacity
                                style={styles.touchable}
                                onPress={() => { if (nome == '' || email == '' || mensagem == '') {
                                                        alert('Por favor preencha todos os campos')

                                                    } else {   

                                                        navigation.navigate('Registo', { status: route.params.status, nomePedido: nome, emailPedido: email, mensagemPedido: mensagem }) 
                                                    }
                                        }
                                    }
                            >
                                <Text style={styles.next}>Seguinte</Text>
                            </TouchableOpacity>
                        </View> 
              
        </ScrollView>
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

    container1: {
        flex: 2,
        backgroundColor: 'white',
        width: '100%',
        alignContent: 'center',
        justifyContent: 'center',
    },

    container2: {
        flex: 1,
        backgroundColor: 'white',
        width: '100%',
        alignContent: 'center',
        justifyContent: 'center',
    },

    title: {
        fontSize: 22,
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
        flex: 1,
        width: '80%',
        height: '15%',
        marginBottom:'10%',
        marginLeft: '10%',
        alignContent: 'center',
        justifyContent: 'center',
    
       
      },

      inputText: {
        padding: 15,
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: '5%',
        color: 'black',
        borderRadius: 20,
      
      },

      inputEmail: {
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
     
      },

      next: {
        fontSize: 17,
        fontWeight: 'bold',
    },

    touchable: {
        width: '20%', 
        alignSelf: 'flex-end',
        marginRight: '8%',
  
    },

});


export default Pedido;