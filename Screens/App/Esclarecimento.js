import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput} from "react-native";
import TextArea from 'react-native-textarea';

function Esclarecimento({route, navigation}){
    return (
        <View>
            <View style={{backgroundColor: '#CFE0FB', alignContent: 'center', justifyContent: 'center', paddingTop: '10%', paddingBottom: '5%', borderWidth: 1, borderColor: '#CFE0FB', borderBottomLeftRadius: 50, borderBottomRightRadius: 50}}>
                <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 20}}>Pedido de Esclarecimento</Text>
            </View>

            <ScrollView>
                    <View>
                        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, ve.</Text>
                    </View>

                    <TextInput
                        placeholder={'Nome (Opcional)'}
                    />

                    <TextInput 
                        placeholder={'Assunto'}
                    />

                    <TextArea 
                        placeholder={'Mensagem'}
                    />

                    <TouchableOpacity>
                        <Text> Enviar </Text>
                    </TouchableOpacity>
            </ScrollView>
        </View>
    )
} 


// const styles = StyleSheet.create({



// })

export default Esclarecimento;