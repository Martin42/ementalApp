import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity} from "react-native";
import Checkbox from 'react-native-check-box';


function Consentimento({ route, navigation }) {

    const [check, setCheck] = useState(false);

    function validate(){
        setCheck(true);

    }


    console.log(route.params.status);

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
                    <Text style={styles.texto}>Podes desistir do estudo em qualquer momento e sem qualquer consequência negativa.</Text>
                    <Text style={styles.texto}>O estudo dá cumprimento ao estipulado no Regulamento Geral de Proteção de Dados (RGPD) garantindo a segurança, anonimato e confidencialidade de todos os dados facultados pelos participantes, em todas as fases do projeto (colheita, análise e tratamento de dados, divulgação de resultados). Assegura-se ainda a destruição dos dados após a apresentação do relatório sobre resultados da implementação do Projeto.</Text>
                    <Text style={styles.texto}>Desde já muito obrigada pela tua colaboração!</Text>
                    <Text style={styles.textobold}>Aceito participar neste estudo e permito a utilização dos dados, que de forma voluntária forneço, confiando em que apenas serão utilizados para fins científicos e publicações que dela decorram e nas garantias de confidencialidade e anonimato que me são dados pelos investigadores.</Text>
                    
                
                    <Text style={styles.buttonText}>
                        
                        <Checkbox 
                                    onClick={() => validate()}
                                    isChecked={check}
                                
                                />
                            
                            Aceito participar
                            
                        </Text>

                        { check ? (
                            <TouchableOpacity
                            onPress={() =>{ if (route.params.status == 0) {
                                    navigation.navigate('Info', { //alterar
                                        status: route.params.status})
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
        height: '85%',
        width: '80%',
        marginTop: '15%',
        marginBottom: '15%',
    },

    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginLeft: '10%',
        marginRight: '10%',
        marginTop: '15%',
        marginBottom: '5%',
    },

    next: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: '70%',
        marginRight: 0,
        marginTop: '20%',
        marginBottom: '5%',
    },

    texto: {
        marginLeft: '10%',
        marginRight: '10%',
        paddingBottom: '5%',
        fontSize: 18,
    },

    textobold: {
        marginLeft: '10%',
        marginRight: '10%',
        paddingBottom: '5%',
        fontWeight: 'bold',
        fontSize: 17,
    },

    buttonText: {
        fontSize: 18,
        marginLeft: '4%',
        marginTop: '4%',
    },

    participar :{
        borderRadius: 15,
        overflow: 'hidden',
        backgroundColor: 'white',
        marginLeft: '10%',
        marginRight: '10%',
        height: '5%',
        
      },
});

export default Consentimento;