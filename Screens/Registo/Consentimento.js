import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, Image} from "react-native";
import Checkbox from 'react-native-check-box';


function Consentimento({ route, navigation }) {

    const [check, setCheck] = useState(false);

    function validate(){
        setCheck(true);

    }


    return (
        <View style={styles.container}>
            <StatusBar style="auto" />

            <ScrollView 
                style={styles.balao} 
                showsHorizontalScrollIndicator={false} 
                showsVerticalScrollIndicator={false}
            >
                <View>
                    <Text style={styles.title}>Consentimento</Text>
                    <Text style={styles.texto}>A tua colaboração é voluntária e muito importante! Agradecemos o preenchimento dos questionários, sublinhando a natureza anónima de todos os dados recolhidos. Os resultados serão utilizados apenas no contexto do estudo em curso garantindo confidencialidade.</Text>
                    <Text style={styles.texto}>Podes desistir em qualquer momento e sem qualquer consequência negativa.</Text>
                    <Text style={styles.texto}>Esta aplicação dá cumprimento ao estipulado no Regulamento Geral de Proteção de Dados (RGPD) garantindo a segurança, anonimato e confidencialidade de todos os dados facultados pelos participantes. </Text>
                    <Text style={styles.texto}>Desde já muito obrigada pela tua colaboração!</Text>
                    <Text style={styles.textobold}>Aceito prosseguir com a utilização da aplicação e permito a utilização dos dados, que de forma voluntária forneço, confiando em que apenas serão utilizados para fins científicos  nas garantias de confidencialidade e anonimato que me são dados pelos investigadores.</Text>
                    
                    <Checkbox 
                        onClick={() => validate()}
                        isChecked={check}
                        unCheckedImage={<Image source={require('../../images/unCheckedParticipar.png')} style={styles.aceito} />} 
                        checkedImage={<Image source={require('../../images/checkedParticipar.png')} style={styles.aceito} />} 
                    />

                        { check ? (
                            <TouchableOpacity
                            onPress={() =>{ if (route.params.status == 0) {
                                    navigation.navigate('Registo', { status: route.params.status, nomePedido: 'estudante', emailPedido: 'null', mensagemPedido: 'null' })
                                }else{
                                    navigation.navigate('Pedido', {
                                        status: route.params.status,})
                                }}
                            }
                            >
                                <Text style={styles.next}>Seguinte</Text>
                            </TouchableOpacity>
                        ) : (
                            <Text></Text>
                        )
                        }
                  
                </View>
            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
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

    next: {
        fontSize: 15,
        fontWeight: 'bold',
        marginRight: '10%',
        textAlign: 'right',
        marginBottom: '15%',
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
          resizeMode: 'center',
          width: 280,
          height: 100,
        
      
    
      

      },

});

export default Consentimento;
